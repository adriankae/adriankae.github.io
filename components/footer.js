class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 6em 0em;
            background: #fff;
        }

        #contact {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: center;
        }

        #contact li {
            margin: 0 0.3em;
        }

        #contact li a {
            text-decoration: none;
            color: #000;
            display: block;
        }

        #contact li a:hover, #contact li a:focus {
            color: #333333;
            text-decoration: none;
        }

        p {
            letter-spacing: 1px;
            font-size: 0.90em;
            color: #000;
            margin: 0;
        }
      </style>
      <footer>
        <div>
          <ul id="contact">
            <li><a href="https://twitter.com/adrianjazzdorf" class="fa fa-twitter"></a></li>
            <li><a href="https://www.linkedin.com/in/käsdorf" class="fa fa-linkedin"></a></li>
          </ul>
          <p>Copyright © 2024 | Adrian Käsdorf | All rights reserved</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
