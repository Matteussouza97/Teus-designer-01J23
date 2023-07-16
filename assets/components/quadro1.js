import { LitElement, html, css } from "lit";

export class Quadro1 extends LitElement {
  static styles = [
    css`
      :host {
        
        display:flex;
        width: 360px;
        height: 425px;
        justify-content: center;
        align-items: center;
        

        background: linear-gradient(0deg,rgba(0, 0, 0, 0.05) 0%,rgba(0, 0, 0, 0.05) 100%);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        overflow:hidden;
        
      }
    `,
  ];

  render() {
    return html`<slot>
        oi eu sou o goku
    </slot>
    
    `;
  }
}
customElements.define("app-quadro1", Quadro1);
