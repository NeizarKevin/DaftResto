class skipContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <a href="#list" class="skip-content">Skip to Content</a>
        `;
  }
}

customElements.define('skipcontent-component', skipContent);
