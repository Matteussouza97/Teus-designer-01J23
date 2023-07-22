import { LitElement, html, css } from "lit";

export class Paragrafo extends LitElement {
  static styles = [
    css`
      :host {
        color: #000;
        text-align: justify;
        font-family: var(--font-texto);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        
      }
      p {
        margin:0;
      }
    `,
  ];

  render() {
    return html` <p>
        <slot> OI eu sou o goku</slot>
    </p>
    `;
  }
}
customElements.define("app-paragrafo", Paragrafo);
