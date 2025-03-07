import "./info-bar-icon.js";

const data = [
    {iconName: "icon-user", strong: "90+", p: "Users"},
    {iconName: "icon-location", strong: "30+", p: "Locations"},
    {iconName: "icon-server", strong: "50+", p: "Servers"},
];

const template = `
<style>
  .info-bar-container {
    display: flex; 
    flex-direction: row; 
    gap: 37px;
  }
  .info-bar-item {
    display: flex; 
    flex-direction: column; 
    gap: 5px;
    text-align: center;
  }
</style>

<div class="info-bar-container">
  ${data.map(item => `
    <div style="display: flex; flex-direction: column; align-items: center;">
      <info-bar-icon name="${item.iconName}"></info-bar-icon>
      <div class="info-bar-item">
        <strong>${item.strong}</strong>
        <p>${item.p}</p>
      </div>
    </div>
  `).join('')}
</div>
`;

class InfoBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }
}

customElements.define("info-bar-component", InfoBar);
