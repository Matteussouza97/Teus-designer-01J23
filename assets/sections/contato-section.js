import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ContatoSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        padding: 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        padding-top: 0;
      }
      app-quadro1 {
        width: 360px;
        height: 640px;
        position: relative;
        z-index: -10;
      }

      img {
        height: 100%;
      }
      article {
        display: flex;
        width: 296px;
        padding: 15px 22px;
        flex-direction: column;
        align-items: center;
        position: absolute;
        gap: 69px;

        border-radius: 8px;
        background: linear-gradient(
            0deg,
            rgba(252, 252, 252, 0.62) 0%,
            rgba(252, 252, 252, 0.62) 100%
          ),
          rgba(89, 89, 89, 0.2);
        backdrop-filter: blur(2px);
      }
      .titulo {
        color: #e77917;
        text-align: right;
        
        font-family: Var(--font-titulo);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    `,
  ];

  render() {
    return html`
      <app-quadro1><img src="contato.jpg" alt="" /></app-quadro1>
      <article>
        <app-paragrafo class="titulo">Fale Conosco</app-paragrafo>
        <app-paragrafo
          >Entre em contato conosco e saiba mais! Contate-nos pelo WhatsApp ou
          mande-nos um E-mail para : TeusDesigner@Gmail.com Tel.:(11)982865226
          Aumente sua divugação! tenha um Site.</app-paragrafo
        >
      </article>
    `;
  }
}
customElements.define("contato-section", ContatoSection);
