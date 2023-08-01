import { LitElement, html, css } from "lit";

export class HomePage extends LitElement {
  render() {
    return html` 
      <hero-section></hero-section>
      <sobre-section></sobre-section>
      <portfolio-section id="portfolio"></portfolio-section>
      <contato-section id="contato"></contato-section>`;
  }
}
customElements.define("home-page", HomePage);
