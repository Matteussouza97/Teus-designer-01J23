import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class SObreSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }

      div {
        padding: 32px;
        padding-bottom:0;
      }

      app-quadro1 {
        width: 360px;
        height: 640px;
        position: absolute;
        z-index: -10;
      }

      img {
        height: 100%;
      }

      app-titulo {
        display: flex;
        justify-content: center;
        font-size: 32px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
      }
      .subtitulo {
        color: color-mix(in srgb, black 30%, #e77917);
        text-align: justify;
        font-family: Var(--font-corpo);
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
      }
      span {
        font-family: var(--font-titulo);
      }
      app-paragrafo {
        width: 280px;
      }

      article {
        display: flex;
        padding: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      section {
        display: flex;
        padding: 15px 5px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 10px;
        align-self: stretch;

        border-radius: 8px;
        background: rgba(175, 175, 175, 0.1);
        backdrop-filter: blur(3.5px);
      }
      app-botao,a {
        gap:20px;
       
      }

      feather-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ];

  render() {
    return html`
      <app-quadro1
        ><img loading="lazy" src="wireframe.jpg" alt="Um wireframe de um site"
      /></app-quadro1>

      <div>
        <app-titulo>Teus Designer</app-titulo>
        <section>
          <article>
            <app-paragrafo class="subtitulo"
              >Desenvolvedora de sites web</app-paragrafo
            >
            <app-paragrafo
              >A <span>Teus Designer</span> é uma empresa desenvolvedora de
              sites altamente especializada e comprometida em fornecer soluções
              de ponta para seus clientes. Com uma equipe de profissionais
              experientes e talentosos, a <span>Teus Designer</span> tem como
              objetivo principal criar experiências digitais inovadoras e
              atraentes para seus clientes, garantindo o sucesso e a expansão de
              seus negócios online.</app-paragrafo
            >
          </article>
          <app-botao>
            <a href="sobre"
              >Saiba Mais<feather-icon
                icon="arrow-right-circle"
                width="25"
                height="25"
                color="white"
              ></feather-icon
            ></a>
          </app-botao>
        </section>
      </div>
    `;
  }
}
customElements.define("sobre-section", SObreSection);
