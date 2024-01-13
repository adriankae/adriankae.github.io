class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .copyright
        {
            overflow: hidden;
            padding: 6em 0em;
            text-align: center;
            background: #fff;
        }


        .copyright p
        {
            letter-spacing: 1px;
            font-size: 0.90em;
            color: #000;
        }

        #contact li{
          display: inline-block;
          text-align: center;
          margin: auto;
          background: #fff;
          padding: 0em 0.3em;
        }


        .copyright a
        {
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
                    <a href="https://www.linkedin.com/in/käsdorf" class="fa fa-linkedin">

                    </a>
                </li>

            </ul>
            <p>
                <center>Copyright © 2024 | Adrian Käsdorf | All rights reserved</center>
            </p>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
