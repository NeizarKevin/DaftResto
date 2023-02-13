import 'regenerator-runtime'; /* for async await transpile */

import '../styles/navbar.css';
import '../styles/hero.css';
import '../styles/drawer.css';
import '../styles/footer.css';
import '../styles/skipcontent.css';
import '../styles/loader.css';
import '../styles/detail.css';
import '../styles/list.css';
import '../styles/card.css';
import '../styles/main.css';
import '../styles/responsive.css';

import './components/appbar-component';
import './components/hero-component';
import './components/drawer-component';
import './components/footer-component';
import './components/skipcontent-component';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu_resp'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
