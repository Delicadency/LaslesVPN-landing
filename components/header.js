import "./header-nav.js";

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
    <div>${logo}</div>
    <header-nav></header-nav>
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
