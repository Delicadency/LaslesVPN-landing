const template = (variant, href, textContent) => `
<style>
  a {
    display: inline-block;
    text-decoration: none;
    font-size: 16px; 
  }
  a.white-rounded {
    padding: 13px 45px;
    font-weight: 600;
    color: #F53855;
    background-color: #ffffff;
    border: solid 1px #F53855;
    border-radius: 50px;
    transition: all 0.3s ease, transform 0.2s ease;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }

  a.white-rounded:hover {
    background-color: #F53855;
    color: #ffffff;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  a.white-rounded:active {
    background-color: #D12F45;
    color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: scale(0.95);
  }

  a.red-squared {
    padding: 18px 78px;
    font-weight: 700;
    color: #ffffff;
    background-color: #F53855;
    border-radius: 10px;
    transition: all 0.3s ease, transform 0.2s ease;
    box-shadow: 0 20px 20px rgba(245, 56, 56, 0.3);
  }

  a.red-squared:hover {
    color: #F53855;
    border: solid 1px #F53855;
    background-color: #ffffff;
    transform: scale(1.05);
  }

  a.red-squared:active {
    background-color: rgba(0, 0, 0, 0.15);
    color: #D12F45;
    box-shadow: 0 5px 10px rgba(245, 56, 56, 0.4);
    transform: scale(0.95);
  }
</style>
<a class="${variant}" href="${href}">${textContent}</a>
`;

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const variant = this.getAttribute("variant") || "white-rounded";
    const href = this.getAttribute("href") || "#";
    const textContent = this.textContent || "";
    this.shadowRoot.innerHTML = template(variant, href, textContent);
  }
}

customElements.define("button-component", Button);
