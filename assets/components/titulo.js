import { LitElement, html, css } from "lit";

export class Titulo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: var(--cor-secundaria);
        font-family: Var(--font-titulo);
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 0.8;
      }

      ::slotted(*) {
        font-size: inherit;
        margin:0;
      }

    `,
  ];

  render() {
    return html`<slot>
    oi eu sou o goku
</slot>`;
  }
}
customElements.define("app-titulo", Titulo);
