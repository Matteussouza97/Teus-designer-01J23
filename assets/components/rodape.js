import { LitElement, html, css } from "lit";

export class Rodape extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
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
      footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap:auto;
      }
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
      }

      span {
        display: flex;
        width: 360px;
        height: 31px;
        padding: 9px 25px;
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
    `,
  ];

  render() {
    return html`
      <footer>
        <img src="alogo.svg" />
        <nav>
          <a href="">Contato</a>
          <a href="">Portfolio</a>
          <a href="services">Sobre</a>
          <a href="baber">Teus Designer</a>
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
