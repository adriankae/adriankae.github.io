class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* nav {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        */
        #header-menu{
        	float: center;
          font-size: 12pt;
        	/* width: 70%;
        	height: 100%; */
        	margin: auto;
        }

        #header-menu ul{
        	text-align: center;
        	float: center;
        	margin: none;
        	background: #FFFFFF;
        }

        #header-menu li{
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

      </style>
      <header>
        <nav id="header-menu">
          <ul>
              <li class="active"><a href=https://adriankae.github.io/>home.</a></li>
              <!-- <li><a href=#>about.</a></li>
              <li><a href=#>cv.</a></li> -->
              <li><a href=https://adriankae.github.io/html/box_breathing.html>boxbreathing.</a></li>
              <!-- <li><a href=#>portfolio.</a></li>
              <li><a href=#>contact.</a></li> -->
              <li><a href=https://adriankae.github.io/html/touren.html>bergtouren.</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
