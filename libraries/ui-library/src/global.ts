import { setMode } from "@stencil/core";
/*
The global script config option takes a file path as a string.

The global script runs once before your library/app loads, so you can do things like setting up a connection to an external service or configuring a library you are using.

The code to be executed should be placed within a default function that is exported by the global script.
 */

export default function () {

  setMode(elm => {
    return (elm as any).mode || elm.getAttribute('mode') || 'dark';
  });

}
