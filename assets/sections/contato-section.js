import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class ContatoSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        padding: 0px 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0px;
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
        width: 255px;
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
      .zap {
        display: flex;
        width: 83px;
        height: 79px;
        justify-content: center;
        align-items: center;
        z-index:1;

        position: absolute;
        right: 8px;
        bottom: 113px;
        transition: background-color 0.2s;
      }
      .mail{
        display: flex;
        width: 71px;
        height: 79px;
        justify-content: center;
        align-items: center;
        z-index:1;

        position: absolute;
        right: 13px;
        bottom: 50px;
        transition: background-color 0.2s;
      }
      svg:active{
        transform:scale(1.3);
       
      }
      svg:hover{
        transform:scale(1.1);
       
      }

      
    `,
  ];


  mensagemWhatsapp() {
    const mensagem ="Olá! Eu olhei o seu site  e gostaria de mais informações."
    return encodeURIComponent(mensagem)
  }
  render() {
    const numeroWhatsapp = "5511982865226";
    return html`
      <app-quadro1><img src="contato.jpg" alt="" /></app-quadro1>
      <article>
        <app-paragrafo class="titulo">Fale Conosco</app-paragrafo>
        <app-paragrafo
          >Entre em contato conosco e saiba mais! Contate-nos pelo WhatsApp ou
          mande-nos um E-mail para :<br />
          TeusDesigner@Gmail.com <br />Tel.:(11)982865226 <br />
          Aumente sua divugação! tenha um Site.</app-paragrafo
        >
      </article>
      
      <a
            href=${`https://wa.me/${numeroWhatsapp}?text=${this.mensagemWhatsapp()}`}>
            <svg class="zap" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"
    fill-rule="evenodd" clip-rule="evenodd">
    <path fill="#fff"
        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z" />
    <path fill="#fff"
        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z" />
    <path fill="#cfd8dc"
        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z" />
    <path fill="#40c351"
        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z" />
    <path fill="#fff" fill-rule="evenodd"
        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
        clip-rule="evenodd" />
</svg></a>

<a href="mailto:teusdesigner@gmail.com"><?xml  version="1.0" encoding="iso-8859-1"?>
<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg class="mail" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<path style="fill:#F4B2B0;" d="M310.481,157.604c0-5.767,0.547-11.404,1.539-16.885H13.246v43.978l196.797,165.457l138.819-116.712
	C325.59,216.305,310.481,188.724,310.481,157.604z"/>
<g>
	<path style="fill:#B3404A;" d="M349.849,249.921c16.048,9.557,34.773,15.068,54.77,15.068c59.21,0,107.381-48.172,107.381-107.383
		S463.828,50.223,404.619,50.223c-48.75,0-89.99,32.667-103.05,77.251H13.246C5.93,127.474,0,133.404,0,140.72v3.629v40.347V444.9
		v0.128v3.502c0,7.316,5.93,13.246,13.246,13.246h393.595c7.315,0,13.246-5.93,13.246-13.246v-3.629V311.778
		c0-7.316-5.932-13.246-13.246-13.246s-13.246,5.93-13.246,13.246v104.679L272.68,314.798L349.849,249.921z M404.619,76.714
		c44.603,0,80.889,36.287,80.889,80.89s-36.287,80.89-80.889,80.89c-20.636,0-39.483-7.778-53.789-20.544
		c-0.238-0.213-0.483-0.421-0.721-0.637c-0.665-0.608-1.311-1.235-1.955-1.865c-0.425-0.417-0.85-0.835-1.266-1.261
		c-0.525-0.534-1.04-1.076-1.548-1.624c-0.595-0.644-1.179-1.299-1.751-1.962c-0.327-0.376-0.658-0.747-0.978-1.129
		c-8.988-10.779-15.086-23.76-17.594-37.59c-0.008-0.045-0.016-0.089-0.024-0.134c-0.249-1.392-0.454-2.794-0.631-4.2
		c-0.028-0.225-0.06-0.448-0.086-0.673c-0.147-1.256-0.253-2.518-0.34-3.784c-0.021-0.305-0.053-0.607-0.069-0.913
		c-0.087-1.519-0.138-3.044-0.138-4.574c0-1.266,0.038-2.525,0.095-3.777c0.041-0.86,0.109-1.723,0.179-2.588
		c0.027-0.344,0.048-0.69,0.079-1.033c0.101-1.072,0.224-2.146,0.367-3.222c0.016-0.122,0.03-0.244,0.046-0.366
		c0.152-1.106,0.33-2.212,0.526-3.318C331.796,105.501,364.897,76.714,404.619,76.714z M297.234,157.604
		c0,1.787,0.046,3.569,0.135,5.345c1.139,23.124,9.646,44.331,23.19,61.362c0.356,0.45,0.702,0.91,1.066,1.355
		c0.385,0.469,0.791,0.922,1.184,1.384c1.809,2.139,3.681,4.23,5.661,6.227l-118.429,99.569L26.493,178.528v-24.561h270.805
		C297.257,155.183,297.234,156.396,297.234,157.604z M26.493,213.141L147.407,314.8L26.493,416.457V213.141z M374.82,435.284H45.268
		l122.722-103.18l33.529,28.19c2.464,2.072,5.493,3.108,8.524,3.108c3.031,0,6.06-1.036,8.524-3.108l33.529-28.19L374.82,435.284z"
		/>
	<path style="fill:#B3404A;" d="M366.867,170.851h24.506v24.506c0,7.316,5.932,13.246,13.246,13.246s13.246-5.93,13.246-13.246
		v-24.506h24.506c7.315,0,13.246-5.93,13.246-13.246c0-7.316-5.932-13.246-13.246-13.246h-24.506v-24.506
		c0-7.316-5.932-13.246-13.246-13.246s-13.246,5.93-13.246,13.246v24.506h-24.506c-7.315,0-13.246,5.93-13.246,13.246
		C353.62,164.92,359.551,170.851,366.867,170.851z"/>
</g>
</svg></a>
      
    `;
  }
}
customElements.define("contato-section", ContatoSection);
