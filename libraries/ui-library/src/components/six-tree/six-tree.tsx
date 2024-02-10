import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { isTreeItem } from '../six-tree-item/six-tree-item.util';

type ExpandedState = 'expand' | 'collapse';

/**
 * @summary Trees allow you to display a hierarchical list of selectable [tree items](/components/tree-item). Items with children can be expanded and collapsed as desired by the user.
 * @documentation https://shoelace.style/components/tree
 * @status stable
 * @since 2.0
 * Forked from https://github.com/shoelace-style/shoelace version v2.13.1.
 *
 * @event {{ selection: HTMLSixTreeItemElement[] }} six-selection-change - Emitted when a tree item is selected or deselected.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded. Works best with `<six-icon>`.
 * @slot collapse-icon - The icon to show when the tree item is collapsed. Works best with `<six-icon>`.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty [--indent-size=var(--six-spacing-medium)] - The size of the indentation for nested items.
 * @cssproperty [--indent-guide-color=var(--six-color-web-rock-300)] - The color of the indentation line.
 * @cssproperty [--indent-guide-offset=0] - The amount of vertical spacing to leave between the top and bottom of the
 *  indentation line's starting position.
 * @cssproperty [--indent-guide-style=solid] - The style of the indentation line, e.g. solid, dotted, dashed.
 * @cssproperty [--indent-guide-width=0] - The width of the indentation line.
 */
@Component({
  tag: 'six-tree',
  styleUrl: 'six-tree.scss',
  shadow: true,
})
export class SixTree {
  @Element() host!: HTMLSixTreeElement;

  /**
   * The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple
   * displays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.
   */
  @Prop() selection: 'single' | 'leaf' = 'single';

  @Event({ eventName: 'six-selection-change' }) sixSelectionChange!: EventEmitter;

  private expandedIconSlot?: HTMLSlotElement;
  private collapsedIconSlot?: HTMLSlotElement;

  //
  // A collection of all the items in the tree, in the order they appear. The collection is live, meaning it is
  // automatically updated when the underlying document is changed.
  //
  private lastFocusedItem: HTMLSixTreeItemElement | null = null;
  private mutationObserver?: MutationObserver;
  private clickTarget?: HTMLSixTreeItemElement;

  constructor() {
    this.host.addEventListener('focusin', this.handleFocusIn);
    this.host.addEventListener('focusout', this.handleFocusOut);
  }

  async connectedCallback() {
    this.host.setAttribute('role', 'tree');
    this.host.setAttribute('tabindex', '0');
    this.mutationObserver = new MutationObserver((e) => this.handleTreeChanged(e));
    this.mutationObserver.observe(this.host, { childList: true, subtree: true });
  }

  disconnectedCallback() {
    this.mutationObserver?.disconnect();
  }

  // Generates a clone of the expand icon element to use for each tree item
  private getExpandButtonIcon(status: 'expand' | 'collapse') {
    const slot = status === 'expand' ? this.expandedIconSlot : this.collapsedIconSlot;
    const icon = slot?.assignedElements({ flatten: true }).at(0) as HTMLElement;

    // Clone it, remove ids, and slot it
    if (icon != null) {
      const clone = icon.cloneNode(true) as HTMLElement;
      [clone, ...clone.querySelectorAll('[id]')].forEach((el) => el.removeAttribute('id'));
      clone.setAttribute('data-default', '');
      clone.slot = `${status}-icon`;

      return clone;
    }

    return null;
  }

  // Initializes new items by setting the `selectable` property and the expanded/collapsed icons if any
  private initTreeItem = (item: HTMLSixTreeItemElement) => {
    const start: ExpandedState[] = ['expand', 'collapse'];
    start
      .filter((status) => !!this.host.querySelector(`[slot="${status}-icon"]`))
      .forEach((status) => {
        const existingIcon = item.querySelector(`[slot="${status}-icon"]`);

        if (existingIcon === null) {
          // No separator exists, add one
          item.append(this.getExpandButtonIcon(status)!);
        } else if (existingIcon.hasAttribute('data-default')) {
          // A default separator exists, replace it
          existingIcon.replaceWith(this.getExpandButtonIcon(status)!);
        } else {
          // The user provided a custom icon, leave it alone
        }
      });
  };

  private handleTreeChanged = (mutations: MutationRecord[]) => {
    for (const mutation of mutations) {
      const addedNodes = [...mutation.addedNodes].filter(isTreeItem);
      const removedNodes = [...mutation.removedNodes].filter(isTreeItem);

      addedNodes.forEach(this.initTreeItem);

      if (this.lastFocusedItem && removedNodes.includes(this.lastFocusedItem)) {
        this.lastFocusedItem = null;
      }
    }
  };

  private selectItem(selectedItem: HTMLSixTreeItemElement) {
    const previousSelection = [...this.selectedItems];
    if (this.selection === 'single' || selectedItem.isLeaf) {
      const items = this.getAllTreeItems();
      for (const item of items) {
        item.selected = item === selectedItem;
      }
    } else if (this.selection === 'leaf') {
      selectedItem.expanded = !selectedItem.expanded;
    }

    const nextSelection = this.selectedItems;

    if (
      previousSelection.length !== nextSelection.length ||
      nextSelection.some((item) => !previousSelection.includes(item))
    ) {
      this.sixSelectionChange.emit({ detail: { selection: nextSelection } });
    }
  }

  private getAllTreeItems() {
    return [...this.host.querySelectorAll<HTMLSixTreeItemElement>('six-tree-item')];
  }

  private focusItem(item?: HTMLSixTreeItemElement | null) {
    item?.focus();
  }

  private handleKeyDown(event: KeyboardEvent) {
    // Ignore key presses we aren't interested in
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End', 'Enter', ' '].includes(event.key)) {
      return;
    }

    // Ignore key presses when focus is inside a text field. This prevents the component from hijacking nested form
    // controls that exist inside tree items.
    if (
      event
        .composedPath()
        .some((el) => el instanceof HTMLElement && ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
    ) {
      return;
    }

    const items = this.getFocusableItems();

    if (items.length > 0) {
      event.preventDefault();
      const activeItemIndex = items.findIndex((item) => item.matches(':focus'));
      const activeItem: HTMLSixTreeItemElement | undefined = items[activeItemIndex];

      const focusItemAt = (index: number) => {
        const item = items[clamp(index, 0, items.length - 1)];
        this.focusItem(item);
      };
      const toggleExpand = (expanded: boolean) => {
        activeItem.expanded = expanded;
      };

      if (event.key === 'ArrowDown') {
        // Moves focus to the next node that is focusable without opening or closing a node.
        focusItemAt(activeItemIndex + 1);
      } else if (event.key === 'ArrowUp') {
        // Moves focus to the next node that is focusable without opening or closing a node.
        focusItemAt(activeItemIndex - 1);
      } else if (event.key === 'ArrowRight') {
        //
        // When focus is on a closed node, opens the node; focus does not move.
        // When focus is on a open node, moves focus to the first child node.
        // When focus is on an end node (a tree item with no children), does nothing.
        //
        if (activeItem == null || activeItem.disabled || activeItem.expanded || activeItem.isLeaf) {
          focusItemAt(activeItemIndex + 1);
        } else {
          toggleExpand(true);
        }
      } else if (event.key === 'ArrowLeft') {
        //
        // When focus is on an open node, closes the node.
        // When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
        // When focus is on a closed `tree`, does nothing.
        //
        if (activeItem == null || activeItem.disabled || activeItem.isLeaf || !activeItem.expanded) {
          focusItemAt(activeItemIndex - 1);
        } else {
          toggleExpand(false);
        }
      } else if (event.key === 'Home') {
        // Moves focus to the first node in the tree without opening or closing a node.
        focusItemAt(0);
      } else if (event.key === 'End') {
        // Moves focus to the last node in the tree that is focusable without opening the node.
        focusItemAt(items.length - 1);
      } else if (event.key === 'Enter' || event.key === ' ') {
        // Selects the focused node.
        if (!activeItem.disabled) {
          this.selectItem(activeItem);
        }
      }
    }
  }

  private handleClick(event: Event) {
    const target = event.target as HTMLSixTreeItemElement;
    const treeItem = target.closest('six-tree-item')!;
    const isExpandButton = event
      .composedPath()
      .some((el) => el instanceof HTMLElement && el?.classList?.contains('tree-item__expand-button'));

    // Don't Do anything if there's no tree item, if it's disabled, or if the click doesn't match the initial target
    // from mousedown. The latter case prevents the user from starting a click on one item and ending it on another,
    // causing the parent node to collapse.
    //
    // See https://github.com/shoelace-style/shoelace/issues/1082
    //
    if (treeItem == null || treeItem.disabled || target !== this.clickTarget) {
      return;
    }

    if (isExpandButton) {
      treeItem.expanded = !treeItem.expanded;
    } else {
      this.selectItem(treeItem);
    }
  }

  private handleMouseDown(event: MouseEvent) {
    // Record the click target so we know which item the click initially targeted
    this.clickTarget = event.target as HTMLSixTreeItemElement;
  }

  private handleFocusOut = (event: FocusEvent) => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    // If the element that got the focus is not in the tree
    if (relatedTarget == null || !this.host.contains(relatedTarget)) {
      this.host.tabIndex = 0;
    }
  };

  private handleFocusIn = (event: FocusEvent) => {
    const target = event.target as HTMLSixTreeItemElement;

    // If the tree has been focused, move the focus to the last focused item
    if (event.target === this.host) {
      this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]);
    }

    // If the target is a tree item, update the tabindex
    if (isTreeItem(target) && !target.disabled) {
      if (this.lastFocusedItem) {
        this.lastFocusedItem.tabIndex = -1;
      }
      this.lastFocusedItem = target;
      this.host.tabIndex = -1;

      target.tabIndex = 0;
    }
  };

  private handleSlotChange() {
    const items = this.getAllTreeItems();
    items.forEach(this.initTreeItem);
  }

  /** @internal Returns the list of tree items that are selected in the tree. */
  get selectedItems(): HTMLSixTreeItemElement[] {
    const items = this.getAllTreeItems();
    const isSelected = (item: HTMLSixTreeItemElement) => item.selected;

    return items.filter(isSelected);
  }

  /** @internal Gets focusable tree items in the tree. */
  private getFocusableItems() {
    const items = this.getAllTreeItems();
    const collapsedItems = new Set();

    return items.filter((item) => {
      // Exclude disabled elements
      if (item.disabled) return false;

      // Exclude those whose parent is collapsed
      const parent: HTMLSixTreeItemElement | null | undefined = item.parentElement?.closest('[role=treeitem]');
      if (parent && (!parent.expanded || collapsedItems.has(parent))) {
        collapsedItems.add(item);
      }

      return !collapsedItems.has(item);
    });
  }

  render() {
    return (
      <div
        part="base"
        class="tree"
        onClick={(e) => this.handleClick(e)}
        onKeyDown={(e) => this.handleKeyDown(e)}
        onMouseDown={(e) => this.handleMouseDown(e)}
      >
        <slot onSlotchange={() => this.handleSlotChange()}></slot>

        <span hidden aria-hidden="true">
          <slot ref={(el) => (this.expandedIconSlot = el as HTMLSlotElement)} name="expand-icon"></slot>
        </span>
        <span hidden aria-hidden="true">
          <slot ref={(el) => (this.collapsedIconSlot = el as HTMLSlotElement)} name="collapse-icon"></slot>
        </span>
      </div>
    );
  }
}

/** Ensures a number stays within a minimum and maximum value */
function clamp(value: number, min: number, max: number) {
  const noNegativeZero = (n: number) => (Object.is(n, -0) ? 0 : n);

  if (value < min) {
    return noNegativeZero(min);
  }

  if (value > max) {
    return noNegativeZero(max);
  }

  return noNegativeZero(value);
}
