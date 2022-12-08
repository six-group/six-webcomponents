import { Component, Element, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';
import { EmptyPayload } from '../../utils/types';
import { hasSlot } from '../../utils/slot';

/**
 * @since 1.0
 * @status stable
 */

@Component({
  tag: 'six-tile',
  styleUrl: 'six-tile.scss',
  shadow: true,
})
export class SixTile {
  @Element() host: HTMLSixTileElement;

  /** The tile's label. */
  @Prop() label = '';

  /** The icon's name. */
  @Prop() iconName;

  /** Flag, whether the tile is closeable. */
  @Prop() closeable = true;

  /** Flag, whether the tile should cast a shadow. */
  @Prop() elevated = false;

  /** Enables tile tooltip for tiles */
  @Prop() disableTooltip: boolean = true;

  /** Set to true to disable the tile. */
  @Prop({ reflect: true }) disabled = false;

  /** The tile's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  @State() visible = true;

  /** Emitted when the tile was closed. */
  @Event({ eventName: 'six-tile-closed' }) sixTileClose: EventEmitter<EmptyPayload>;

  /** Emitted when the tile is selected. */
  @Event({ eventName: 'six-tile-selected' }) sixTileSelected: EventEmitter<EmptyPayload>;

  /** Hides the tile */
  @Method()
  async hide() {
    this.visible = false;
  }

  /** Shows the tile */
  @Method()
  async show() {
    this.visible = true;
  }

  @State() hasIconSlot = false;

  @State() hasLabelSlot = false;

  connectedCallback() {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  componentWillLoad() {
    this.handleSlotChange();
  }

  handleSlotChange() {
    this.hasIconSlot = hasSlot(this.host, 'icon');
    this.hasLabelSlot = hasSlot(this.host, 'label');

    if (this.hasIconSlot) {
      let slot: HTMLElement = this.host.querySelector(`[slot="icon"]`);
      slot.addEventListener('click', this.handleClickEvent);
    }

    if (this.hasLabelSlot) {
      let slot: HTMLElement = this.host.querySelector(`[slot="label"]`);
      slot.addEventListener('click', this.handleClickEvent);
    }
  }

  render() {
    return (
      <six-tooltip disabled={this.disableTooltip || this.label === ''} content={this.label}>
        <div
          part="base"
          class={{
            tile: true,
            'tile--visible': this.visible,
            'tile--small': this.size === 'small',
            'tile--medium': this.size === 'medium',
            'tile--large': this.size === 'large',
            'tile--elevated': this.elevated,
          }}
        >
          <div part="header" class="tile__header">
            <six-icon-button
              class={{
                'tile__header--hidden': !this.closeable,
              }}
              name="close"
              size={closeIconSize(this.size)}
              onClick={this.handleCloseClickEvent}
            />
          </div>

          <div part="body" class="tile__body">
            {this.iconName && (
              <six-icon onClick={this.handleClickEvent} size={iconSize(this.size)}>
                {this.iconName}
              </six-icon>
            )}
            {this.hasIconSlot && <slot name="icon"></slot>}
          </div>

          <div
            part="footer"
            class={{
              'tile__footer--small': this.size === 'small',
              'tile__footer--medium': this.size === 'medium',
              'tile__footer--large': this.size === 'large',
            }}
          >
            {this.label && (
              <div
                class={{
                  '.label__footer': true,
                }}
                onClick={this.handleClickEvent}
              >
                {this.label}
              </div>
            )}
            {this.hasLabelSlot && <slot name="label"></slot>}
          </div>
        </div>
      </six-tooltip>
    );
  }

  private handleCloseClickEvent = () => {
    this.visible = false;
    this.sixTileClose.emit();
  };

  private handleClickEvent = () => {
    this.sixTileSelected.emit();
  };
}

const closeIconSize = (size: string) => {
  return {
    small: 'xxSmall',
    medium: 'medium',
    large: 'medium',
  }[size] as 'xSmall' | 'medium';
};

const iconSize = (size: string) => {
  return {
    small: 'xLarge',
    medium: 'xxLarge',
    large: 'xxxLarge',
  }[size] as 'xLarge' | 'xxLarge' | 'xxxLarge';
};
