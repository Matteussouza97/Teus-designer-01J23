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

      app-paragrafo {
        color: #080808;
        font-family: DM Mono;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.5px;
      }

      span {
        display: flex;
        width: 360px;
        height: 31px;
        padding: 9px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        position: absolute;
        bottom: 0px;

        background: rgba(0, 0, 0, 0.4);
      }
    `,
  ];

  render() {
    return html`
      <footer>
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
