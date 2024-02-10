import { Component, Element, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { isTreeItem } from './six-tree-item.util';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../utils/animation';

/**
 * @summary A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
 * @documentation https://shoelace.style/components/tree-item
 * @status stable
 * @since 2.0
 *
 * @dependency six-checkbox
 * @dependency six-icon
 * @dependency six-spinner
 *
 * @event six-expand - Emitted when the tree item expands.
 * @event six-after-expand - Emitted after the tree item expands and all animations are complete.
 * @event six-collapse - Emitted when the tree item collapses.
 * @event six-after-collapse - Emitted after the tree item collapses and all animations are complete.
 * @event six-lazy-change - Emitted when the tree item's lazy state changes.
 * @event six-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
 *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
 *  state and update the tree.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded.
 * @slot collapse-icon - The icon to show when the tree item is collapsed.
 *
 * @csspart base - The component's base wrapper.
 * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
 * @csspart item--disabled - Applied when the tree item is disabled.
 * @csspart item--expanded - Applied when the tree item is expanded.
 * @csspart item--indeterminate - Applied when the selection is indeterminate.
 * @csspart item--selected - Applied when the tree item is selected.
 * @csspart indentation - The tree item's indentation container.
 * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
 * @csspart label - The tree item's label.
 * @csspart children - The container that wraps the tree item's nested children.
 * @csspart checkbox - The checkbox that shows when using multiselect.
 * @csspart checkbox__base - The checkbox's exported `base` part.
 * @csspart checkbox__control - The checkbox's exported `control` part.
 * @csspart checkbox__control--checked - The checkbox's exported `control--checked` part.
 * @csspart checkbox__control--indeterminate - The checkbox's exported `control--indeterminate` part.
 * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
 * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
 * @csspart checkbox__label - The checkbox's exported `label` part.
 */
@Component({
  tag: 'six-tree-item',
  styleUrl: 'six-tree-item.scss',
  shadow: true,
})
export class SixTreeItem {
  @Element() host!: HTMLSixTreeItemElement;

  /** Expands the tree item. */
  @Prop({ reflect: true }) expanded = false;

  /** Draws the tree item in a selected state. */
  @Prop({ reflect: true }) selected = false;

  /** Disables the tree item. */
  @Prop({ reflect: true }) disabled = false;

  /** internal */
  @Prop({ reflect: true, mutable: true }) isLeaf = false;

  @Event({ eventName: 'six-expand' }) sixExpand!: EventEmitter;
  @Event({ eventName: 'six-after-expand' }) sixAfterExpand!: EventEmitter;
  @Event({ eventName: 'six-collapse' }) sixCollapse!: EventEmitter;
  @Event({ eventName: 'six-after-collapse' }) sixAfterCollapse!: EventEmitter;

  private childrenSlot?: HTMLSlotElement;
  private childrenContainer?: HTMLDivElement;

  connectedCallback() {
    this.host.setAttribute('role', 'treeitem');
    this.host.setAttribute('tabindex', '-1');
    const parent = this.host.parentElement;
    if (parent != null && isTreeItem(parent)) {
      this.host.slot = 'children';
    }
  }

  componentDidLoad() {
    // render on next tick to avoid warnings in the console
    requestAnimationFrame(() => {
      if (this.childrenContainer != null) {
        this.childrenContainer.style.display = this.expanded ? 'block' : 'none';
        this.childrenContainer.style.height = this.expanded ? 'auto' : '0';
        this.isLeaf = this.getChildrenItems().length === 0;
        this.handleExpandedChange();
      }
    });
  }

  private async animateCollapse() {
    if (this.childrenContainer == null) {
      return;
    }
    this.sixCollapse.emit();
    await stopAnimations(this.childrenContainer);
    const { keyframes, options } = collapseAnimation;
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.style.display = 'none';
    this.sixAfterCollapse.emit();
  }

  private handleChildrenSlotChange() {
    this.isLeaf = this.getChildrenItems().length === 0;
  }

  private async animateExpand() {
    if (this.childrenContainer == null) {
      return;
    }
    this.sixExpand.emit();

    await stopAnimations(this.childrenContainer);
    this.childrenContainer.style.display = 'block';

    const { keyframes, options } = expandAnimation;
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.style.height = 'auto';
    this.sixAfterExpand.emit();
  }

  @Watch('disabled')
  handleDisabledChange() {
    this.host.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @Watch('selected')
  handleSelectedChange() {
    this.host.setAttribute('aria-selected', this.selected ? 'true' : 'false');
  }

  @Watch('expanded')
  handleExpandedChange() {
    if (!this.isLeaf) {
      this.host.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
    } else {
      this.host.removeAttribute('aria-expanded');
    }
  }

  @Watch('expanded')
  handleExpandAnimation() {
    if (this.expanded) {
      this.animateExpand();
    } else {
      this.animateCollapse();
    }
  }

  /** Gets all the nested tree items in this node. */
  private getChildrenItems({ includeDisabled = true }: { includeDisabled?: boolean } = {}): HTMLSixTreeItemElement[] {
    return this.childrenSlot
      ? [...this.childrenSlot.assignedElements({ flatten: true })]
          .filter(isTreeItem)
          .filter((item) => includeDisabled || !item.disabled)
      : [];
  }

  render() {
    const showExpandButton = !this.isLeaf;
    return (
      <div
        part="base"
        class={{
          'tree-item': true,
          'tree-item--expanded': this.expanded,
          'tree-item--selected': this.selected,
          'tree-item--disabled': this.disabled,
          'tree-item--leaf': this.isLeaf,
          'tree-item--has-expand-button': showExpandButton,
        }}
      >
        <div
          class="tree-item__item"
          part={
            'item' +
            (this.disabled ? 'item--disabled' : '') +
            (this.expanded ? 'item--expanded' : '') +
            (this.selected ? 'item--selected' : '')
          }
        >
          {/* Indentation */}
          <div class="tree-item__indentation" part="indentation"></div>

          {/* Expand/Collapse icon */}
          <div
            part="expand-button"
            class={{
              'tree-item__expand-button': true,
              'tree-item__expand-button--visible': showExpandButton,
            }}
            aria-hidden="true"
          >
            <div class="tree-item__expand-icon-slot">
              <slot name="expand-icon">
                <six-icon>chevron_right</six-icon>
              </slot>
            </div>
            <div class="tree-item__expand-icon-slot">
              <slot name="collapse-icon">
                <six-icon>chevron_right</six-icon>
              </slot>
            </div>
          </div>

          {/* Label */}
          <div part="label" class="tree-item__label">
            <slot></slot>
          </div>
        </div>

        {/* Children */}
        <div ref={(el) => (this.childrenContainer = el)} class="tree-item__children" part="children" role="group">
          <slot
            ref={(el) => (this.childrenSlot = el as HTMLSlotElement)}
            name="children"
            onSlotchange={() => this.handleChildrenSlotChange()}
          ></slot>
        </div>
      </div>
    );
  }
}

const expandAnimation = {
  keyframes: [
    { height: '0', opacity: '0', overflow: 'hidden' },
    { height: 'auto', opacity: '1', overflow: 'hidden' },
  ],
  options: { duration: 250, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)' },
};

const collapseAnimation = {
  keyframes: [
    { height: 'auto', opacity: '1', overflow: 'hidden' },
    { height: '0', opacity: '0', overflow: 'hidden' },
  ],
  options: { duration: 200, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)' },
};
