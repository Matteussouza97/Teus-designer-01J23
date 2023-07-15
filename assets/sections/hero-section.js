import { LitElement, html, css } from "lit";

export class HeroSection extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-flex;
        height: 640px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
      }
      img {
        width: 360px;
        height: 425px;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-quadro1>
          <img src="desktop.webp" alt="Imagem de um descktop" />
        </app-quadro1>
      </section>
      <app-plano-de-fundo></app-plano-de-fundo>
     
    `;
  }
}
customElements.define("hero-section", HeroSection);
