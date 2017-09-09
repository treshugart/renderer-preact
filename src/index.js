import { render } from 'preact';

export const withPreact = Base =>
  class extends (Base || HTMLElement) {
    rendererCallback(renderRoot, renderCallback) {
      this._preactDom = render(
        renderCallback(),
        renderRoot,
        this._preactDom || renderRoot.children[0]
      );
    }
  };