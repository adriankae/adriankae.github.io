class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .copyright {
            display: flex; /* Flex container */
            flex-direction: column; /* Children are stacked vertically */
            justify-content: center; /* Center children vertically */
            align-items: center; /* Center children horizontally */
            overflow: hidden;
            padding: 6em 0em;
            text-align: center;
            background: #fff;
        }

        .copyright p {
            letter-spacing: 1px;
            font-size: 0.90em;
            color: #000;
        }

        #contact {
            list-style-type: none; /* Removes bullet points */
            padding: 0; /* Removes default padding */
            display: flex; /* Flex container */
            justify-content: center; /* Center items horizontally */
        }

        #contact li {
            display: inline-block;
            margin: 0 0.3em; /* Adjusted for better spacing */
        }

        .copyright a {
            text-decoration: none;
            color: #000;
        }
      </style>
      <footer>
        <div class="copyright">
            <ul id="contact">
                <li>
                    <a href="https://twitter.com/adrianjazzdorf" class="fa fa-twitter"></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/käsdorf" class="fa fa-linkedin"></a>
                </li>
            </ul>
            <p>Copyright © 2024 | Adrian Käsdorf | All rights reserved</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
