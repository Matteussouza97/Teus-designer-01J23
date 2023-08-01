import { LitElement, html, css } from "lit";
// import { nav } from "../../main";

export class Navbar extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        width: 100%;

        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;

        box-sizing: border-box;
        z-index: 100;

        mix-blend-mode: difference;
        color: white;

        transition: top 1s;
      }
      img {
        width: 80px;
        height: 80px;
      }

      feather-icon {
        cursor: pointer;
        pointer-events: auto;
      }
    `,
  ];

  render() {
    return html`
      <img src="alogo.svg" />
      <feather-icon
        icon="menu"
        width="25"
        height="25"
        color="black"
      ></feather-icon>
    `;
  }
}
customElements.define("app-navbar", Navbar);
