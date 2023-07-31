import { LitElement, html, css } from "lit";

export class Logo extends LitElement {
  static styles = [
    css`
      :host {
        width: 48px;
        height: 48px;

        background-color: black;
        -webkit-mask: url("../../Imagens/logo.svg");
        mask: url("../../Imagens/logo.svg");
        display: block;
      }
    `,
  ];

  render() {
    return html`
      
    `;
  }
}
customElements.define("app-logo", Logo);
