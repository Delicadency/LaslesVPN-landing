import "./header-nav.js";
import "./header-login-cont.js";

const response = await fetch("./images/logo.svg");
const logo = await response.text();
const template = `
    <style>
    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0;
    height: 50px;
}
    </style>
    <header>
    <a href="/#">${logo}</a>
    <header-nav></header-nav>
    <login-container></login-container>
    </header>
    `;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    this.shadowRoot.innerHTML = template;
  }
}
customElements.define("header-component", HeaderComponent);
