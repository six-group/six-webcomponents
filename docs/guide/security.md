# Security

SIX Web Components work well in environments with a **Content Security Policy (CSP)**. Since they
are built with [Stencil](https://stenciljs.com/docs/csp-nonce), they support CSP nonces out of the
box and can be used in projects with strict security headers.

A **CSP** defines which scripts, styles, images, and other resources the browser may load. Using
nonces (random tokens generated per request) makes it possible to set up a **strict CSP**: only
resources with the matching nonce will run, which effectively blocks unwanted or injected code.

To use SIX Web Components in such a setup:

- Configure a [strict CSP with nonces](https://web.dev/articles/strict-csp).
- Pass the nonce from your server to Stencil via `setNonce(...)`.
- In Angular projects, also check the
  [Angular security best practices](https://angular.dev/best-practices/security).
