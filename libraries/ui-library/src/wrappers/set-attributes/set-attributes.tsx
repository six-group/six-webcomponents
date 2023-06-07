import { Component, Element, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'set-attributes',
})
export class SetAttributes {
  @Element() host!: HTMLSetAttributesElement;

  /** Attributes map */
  @Prop() value = {};

  componentWillLoad() {
    this.injectAttrs();
  }

  @Watch('value')
  attrsUpdated() {
    this.injectAttrs();
  }

  private injectAttrs() {
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
      undefined: (key: string) => child.removeAttribute(key),
      boolean: (key: string, value: unknown) => {
        if (value != null) {
          child.setAttribute(key, '');
        } else {
          child.removeAttribute(key);
        }
      },
      number: (key: string, value: string) => child.setAttribute(key, value),
      string: (key: string, value: string) => child.setAttribute(key, value),
      object: (key: string, value: string) => child.setAttribute(key, JSON.stringify(value)),
    };

    for (const [key, value] of Object.entries(this.value)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      types[typeof value](key, value);
    }
  }

  render() {
    return <slot />;
  }
}
