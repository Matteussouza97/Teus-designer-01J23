import { LitElement, html, css } from 'lit';

export class Logo extends LitElement {
    static styles = [
        css`
            :host {
                width: 48px;
                height: 48px;
                
                background-color:black;
                -webkit-mask: url('../../Imagens/logo.svg');
                mask: url('../../Imagens/logo.svg');
                display: block;
            }
        `
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
            <app-paragrafo></app-paragrafo>
        </span>
        
        
        `;
    }
}
customElements.define('app-logo', Logo);
