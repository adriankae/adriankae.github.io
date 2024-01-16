class HeaderComponent extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      // Style for the component, including sticky header
      const style = document.createElement('style');
      style.textContent = `
          /* Styles for your sticky header component */
          header {
              position: sticky;
              top: 0;
              z-index: 1000; /* Ensure the header is above other content */
              background-color: #fff; /* Background color, can be adjusted */
              /* Add other styles for your header here */
          }

          #header-menu {
            float: center;
            font-size: 12pt;
            /* width: 70%;
            height: 100%; */
            margin: auto;
          }

          #header-menu ul {
            text-align: center;
            float: center;
            margin: none;
            background: #FFFFFF;
          }

          #header-menu li {
            display: inline-block;
            padding: none;
            margin: none;
          }

          #header-menu li a, #header-menu li span{
            display: inline-block;
            padding: 0em 1.5em;
            text-decoration: none;
            font-weight: 600;
            text-transform: lowercase;
            line-height: 60px;
          }

          #header-menu li a{

            color: #000000;
          }
  
          #header-menu li:hover a, #header-menu li span{
            background: #FFF;
            color: #333333;
            text-decoration: none;
          }
      `;

      // HTML structure for the component
      const html = document.createElement('div');
      html.innerHTML = `
          <header>
              <nav id="header-menu">
                  <ul>
                      <li class="active"><a href="https://adriankae.github.io/">home.</a></li>
                      <li><a href="https://adriankae.github.io/">about.</a></li>
                      <li><a href="https://adriankae.github.io/pages/portfolio.html">portfolio.</a></li>
                      <li><a href="https://adriankae.github.io/contact.html">contact.</a></li>
                  </ul>
              </nav>
          </header>
      `;

      // Append the style and HTML to the shadow root
      this.shadowRoot.append(style, html);
  }
}

// Define the custom element
customElements.define('header-component', HeaderComponent);
