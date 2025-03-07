const template = `


`;

class InfoBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }
}
customElements.define("info-bar-component", InfoBar);
