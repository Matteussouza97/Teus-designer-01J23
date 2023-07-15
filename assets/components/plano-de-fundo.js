import { LitElement, html, css } from "lit";

export class PlanoDeFundo extends LitElement {
  static styles = [
    css`
      :host {
        width: 360px;
        height: 640px;
        position: absolute;
        z-index: -1;
        left: 1px;
        opacity: 0.029999999329447746;
        display: block;

        background-color:black;
        -webkit-mask: url('icon.svg');
        mask:('icon.svg');
      }
    `,
  ];

  render() {
    return html``;
  }
}
customElements.define("app-plano-de-fundo", PlanoDeFundo);
