import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      ::slotted(button),button,::slotted(a) {
        width: inherit;
        display: flex;
        padding: 7px 10px;
        align-items: center;
        justify-content: flex-start;
        align-items: center;
        border-radius: 8px;
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(0, 0, 0, 0.4) 100%
          ),
          #e77917;
        box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.25);

        /* tipografia */
        color: #fff;
        font-family: Var(-font-botao);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration:none;


        cursor: pointer;
        transition: all 200ms;

        button:hover,
        button:active,
        a:hover,
        a:active {
          background-color: color-mix(
            in srgb,
            white 15%,
            var(--button-background, var(--cor-tom-2))
          );
          color: var (--cor-tom-1);
        }
      }
    `,
  ];

  render() {
    return html`<slot><button>Saiba Mais</button></slot>`;
  }
}
customElements.define("app-botao", Botao);
