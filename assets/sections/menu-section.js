import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class MenuSection extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
      }

      dialog {
        margin:0;
        z-index: 110;
        display: flex;
        width: 100%;
        height: 100%;

        max-width: 100%;
        max-height: 100%;

        padding: 32px;
        border: 0;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        opacity: 0;
        pointer-events: none;
        transition: 300ms;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 40%);

        position: fixed;
      }

      dialog[open] {
        opacity: 1;
        pointer-events: auto;
      }

      img {
        width: 100px;
        height: 100px;
       
      }
      nav {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        align-self: flex-end;
        gap: 1.5rem;

        /* tipografia */
        color: #fff;
        font-family: var(--fonte-titulo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        text-decoration: none;
      }
      a,button {
        color: white;
        text-decoration: none;
        /* layout */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        cursor:poiter;
      transition:color 300ms;
      }
      a:hover,button:hover {
        color:var(--tom-1);
      }

      a:active, button:active {
        color:var(--cor-primaria);
      }

      button {
        padding: 0;
        border: 0;
        background: transparent;
        /* tipografia */
        color: #fff;
        font-family: var(--fonte-titulo);
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        text-decoration: none;
      }
      feather-icon {
        display: flex;
        width: 24px;
        fill: currentColor;
        
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
      <dialog>
        <img src="logowhite.svg" />
        <nav>
          
        <button @click=${this.rolarContato}>Contato</button> 
          <button @click=${this.rolarPortfolio}>Portfolio</button>
          <a href="Sobre">Teus Designer</a>
          <a href="/">Home</a>
          <button @click=${nav.fechar}>
            <feather-icon icon="x"></feather-icon>
          </button>
        </nav>
      </dialog>
    `;
  }
}
customElements.define("menu-section", MenuSection);
