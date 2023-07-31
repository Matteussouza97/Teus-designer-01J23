import { LitElement, html, css } from "lit";

export class Rodape extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
        height: 96px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }
    `,
  ];

  render() {
    return html``;
  }
}
customElements.define("app-rodape", Rodape);
