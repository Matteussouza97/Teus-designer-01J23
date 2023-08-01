import { LitElement, html, css } from "lit";
import {section} from "../styles/section-style"


export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      img {
        width: 360px;
        height: 425px;
       
      }

      app-titulo {
        position: absolute;
        left: 9px;
        top: 117px;
        width: 245px;
        height: 48px;
        align-items:center;
        align-self: stretch;
        display:flex;
      }

      section {
        display: inline-flex;
        height: 640px;
        width:100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
       
      }

      span {
        color: #e77917;
        font-family: var(--font-corpo);
        font-size: 20px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo>
          <h1>Teus Designer <span>Tenha seu site Agora!</span></h1>
        </app-titulo>
        <app-quadro1>
          <img loading="lazy" src="macbook.jpg" alt="Imagem de um descktop" />
        </app-quadro1>
      </section>
      <app-plano-de-fundo></app-plano-de-fundo>
    `;
  }
}
customElements.define("hero-section", HeroSection);
