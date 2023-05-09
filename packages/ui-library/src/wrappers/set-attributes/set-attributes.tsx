import { Component, Element, Watch, Prop, h } from '@stencil/core';

@Component({
  tag: 'set-attributes',
})
export class SetAttributes {
  @Element() host: HTMLSetAttributesElement;

  /** Attributes map */
  @Prop() value = {};

  componentWillLoad() {
    this.injectAttrs();
  }

  @Watch('value')
  attrsUpdated() {
    this.injectAttrs();
  }

  injectAttrs() {
    const slot = this.host.firstElementChild as HTMLSlotElement;

    if (typeof slot?.assignedElements !== 'function') {
      return;
    }

    const child = slot.assignedElements().pop();

    if (!child) {
      return;
    }

    const types = {
      // no need for function and bigint
      undefined: (key) => child.removeAttribute(key),
      boolean: (key, value) => {
        if (value) {
          child.setAttribute(key, '');
        } else {
          child.removeAttribute(key);
        }
      },
      number: (key, value) => child.setAttribute(key, value),
      string: (key, value) => child.setAttribute(key, value),
      object: (key, value) => child.setAttribute(key, JSON.stringify(value)),
    };

    for (const [key, value] of Object.entries(this.value)) {
      types[typeof value](key, value);
    }
  }

  render() {
    return <slot />;
  }
}
