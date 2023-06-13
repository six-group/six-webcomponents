import { Component, Element, h, Prop, State, Watch } from '@stencil/core';
import FormControl from '../../functional-components/form-control/form-control';
import { hasSlot } from '../../utils/slot';

let id = 0;

/**
 * @since 1.1
 * @status stable
 *
 * @slot label - The wrapped component's label. Alternatively, you can use the label prop.
 * @slot help-text - Help text that describes how to use the input.
 * @slot error-text - Error text that is shown for validation errors. Alternatively, you can use the error-text prop.
 *
 * @part base - The component's base wrapper.
 * @part form-control - The form control that wraps the label, textarea, and help text.
 * @part label - The label of wrapped component.
 * @part help-text - The help text of the wrapped component.
 */
@Component({
  tag: 'six-group-label',
  styleUrl: 'six-group-label.scss',
  shadow: true,
})
export class SixGroupLabel {
  private wrapperLabelId = `label-${++id}`;
  private labelId = `label-label-${id}`;
  private helpTextId = `label-help-text-${id}`;

  @Element() host!: HTMLSixGroupLabelElement;

  @State() hasHelpTextSlot = false;
  @State() hasLabelSlot = false;

  /** The label's size. */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** The wrapper label's label. Alternatively, you can use the label slot. */
  @Prop() label = '';

  /** The wrapper label's help text. Alternatively, you can use the help-text slot. */
  @Prop() helpText = '';

  /** Set to true to disable the label. */
  @Prop({ reflect: true }) disabled = false;

  /** Set to true to show an asterisk beneath the label. */
  @Prop() required = false;

  @Watch('helpText')
  @Watch('label')
  handleLabelChange() {
    this.handleSlotChange();
  }

  connectedCallback() {
    this.host.shadowRoot?.addEventListener('slotchange', this.handleSlotChange);
  }

  componentWillLoad() {
    this.handleSlotChange();
  }

  disconnectedCallback() {
    this.host.shadowRoot?.removeEventListener('slotchange', this.handleSlotChange);
  }

  private handleSlotChange = () => {
    this.hasLabelSlot = hasSlot(this.host, 'label');
    this.hasHelpTextSlot = hasSlot(this.host, 'help-text');
  };

  render() {
    return (
      <FormControl
        inputId={this.wrapperLabelId}
        label={this.label}
        labelId={this.labelId}
        hasLabelSlot={this.hasLabelSlot}
        helpTextId={this.helpTextId}
        helpText={this.helpText}
        hasHelpTextSlot={this.hasHelpTextSlot}
        size={this.size}
        disabled={this.disabled}
        required={this.required}
      >
        <slot></slot>
      </FormControl>
    );
  }
}
