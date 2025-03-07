const navData = [
  { name: "About", href: "./#" },
  { name: "Features", href: "./#" },
  { name: "Pricing", href: "./#" },
  { name: "Testimonials", href: "./#" },
  { name: "Help", href: "./#" },
];

const template = `
<style>
nav {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-direction: row;
}
a {
  color: #4F5665;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease-in;
}
a::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: #F53838;
  transition: width 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
a:hover {
  color: #F53838;
}
a:hover::after {
  width: 100%;
}
</style>
<nav>
${navData.map((item) => `<a href="${item.href}">${item.name}</a>`).join(" ")}
</nav>
`;

class HeaderNavComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }
}
customElements.define("header-nav", HeaderNavComponent);
