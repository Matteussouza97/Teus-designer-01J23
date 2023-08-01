import { LitElement, html, css } from "lit";

export class SobrePage extends LitElement {
   

    render() {
        return html`
        <sobre-section></sobre-section>`;
    }
}
customElements.define("sobre-page", SobrePage);
