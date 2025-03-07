class InfoBarIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    const iconName = this.getAttribute("name") || "icon-location";
    const response = await fetch(`./images/${iconName}.svg`);
    const svg = await response.text();

    this.shadowRoot.innerHTML = `
<style>
svg{
  width: 55px;
  height: 55px
}
  </style>
  ${svg}
`;
  }
}
customElements.define("info-bar-icon", InfoBarIcon);
