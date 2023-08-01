import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class Rodape extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
          ),
          #e77917;
      }
      footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
      }
      a,
      nav {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        gap: 12px;
        color: #fff;
        font-family: var(--font-botao);
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;
      }

      span {
        display: flex;
        width: 100%;
        height: 2rem;

        justify-content: center;
        align-items: center;
        gap: 10px;
        bottom: 0px;

        background: rgba(0, 0, 0, 0.4);
      }
      app-paragrafo {
        color: #fff;
        font-family: var(--font-corpo);
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.5px;
      }
      img {
        width: 55px;
        height: 55px;
      }

      /* copiado do vanguarda */

      a, button {
        color: white;

        text-decoration: none;

        opacity: 0.9;
        cursor: poiter;
        transition: color 300ms;
      }
      button {
        padding: 0;
        border: 0;
        background: transparent;
      }

      a:hover,
      button:hover {
        color: var(--tom-1);
      }

      a:active,
      button:active {
        color: var(--cor-primaria);
      }
    `,
  ];
  rolarContato() {
    return nav.rolarPara("#contato");
  }
  rolarPortfolio() {
    return nav.rolarPara("#portfolio");
  }

  render() {
    return html`
      <footer>
        <img src="alogo.svg" />
        <nav>
          <button @click=${this.rolarContato}>Contato</button> 
          <button @click=${this.rolarPortfolio}>Portfolio</button>
          <a href="sobre">Teus Designer</a>
          <a href="/">Home</a>
        </nav>
      </footer>
      <span>
        <app-paragrafo
          >©Teus Desginer - Todos os direitos reservados desde
          2023.</app-paragrafo
        >
      </span>
    `;
  }
}
customElements.define("app-rodape", Rodape);
