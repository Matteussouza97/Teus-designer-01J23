import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class PortfolioSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        width: 359px;
        height: 640px;
        padding: 32px;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        flex-shrink: 0;
      }

      app-titulo {
        font-family: DM Serif Text;
        font-size: 32px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
      }
      app-quadro1 {
        width: 280px;
        height: 521px;
        border-radius: 8px;
        box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.30);
      }
      img{
        height:100%;
      }
    `,
  ];

  render() {
    return html`
      <app-plano-de-fundo></app-plano-de-fundo>
      <app-titulo>Portfolio</app-titulo>
      <app-quadro1><img loading="lazy" src="wire.jpg" alt="Imagem" /></app-quadro1>
    `;
  }
}
customElements.define("portfolio-section", PortfolioSection);
