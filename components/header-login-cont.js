import "./button.js";

const template = `
<style>
div{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}
a{
  font-size: 16px;
  font-weight: 600;
  color: #0B132A;
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
<div>
  <a href="#">Sign In</a>
  <button-component class="white-rounded">Sign Up</button-component>
</div>
`;

class LogInContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }
}
customElements.define("login-container", LogInContainer);
