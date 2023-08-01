import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  render() {
    return html` 
        <hero-section></hero-section>
      <sobre-section></sobre-section>
      <portfolio-section></portfolio-section>
      <contato-section></contato-section>`;
  }
}
customElements.define("home-page", HomePage);
