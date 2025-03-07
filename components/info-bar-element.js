import "./info-bar-icon";

const template = ``;

class InfoBarElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }
}
customElements.define("info-bar-element", InfoBarElement);
