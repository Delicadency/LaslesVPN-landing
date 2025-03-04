import "./button.js"

const template = `
<style>
section{
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: fit-content;
  gap: 40px;
}
article{
  display:flex;
  flex-direction: column;
  gap:20px;
}
h1{
  font-size: 50px;
  line-height: 70px;
  color: #0B132A;
  font-weight: 600;
  margin: 0;
}
strong{
  font-weight: 700;
}
p{
  font-size: 16px;
  color: #4F5665;
  line-height: 30px;
  padding-bottom: 30px;
}
span{
  font-weight: 600;
}
  img {
  width: 550px;
  height: fit-content;
  padding-bottom: 10px;
}
  </style>

<section>
  <article>
<h1>Want anything to be easy with <strong>LaslesVPN.</strong></h1>
<p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
  <button-component variant="red-squared">Get Started</button-component>
</article>
<img src="/images/illustration-hero.png" alt="Simple illustration of a guy who is searching solutions browsing WEB on his laptop">
</section>
`;

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }
}
customElements.define("hero-component", Hero);
