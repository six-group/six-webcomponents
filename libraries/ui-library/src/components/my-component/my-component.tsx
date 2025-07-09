import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'my-component',
  styleUrls: {
    "light": 'my-component.light.scss',
    "dark": 'my-component.dark.scss'
  },
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() mode: "dark" | "light" = "dark";
 

  render() {
    return <div class="component">Hello, World! I'm blabla</div>;
  }
}
