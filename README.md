# EZP Program

Installable browser-based SPI flash programmer interface built with WebAssembly and WebUSB.

## Build and deployment

This branch contains only the web application and its deployment configuration. The Pages workflow temporarily fetches the native C backend from `master` to compile the WebAssembly module; those native sources are not committed to this branch.

The workflow builds `web/dist` and deploys it to GitHub Pages. Use Chrome or Edge over HTTPS or localhost for WebUSB.
