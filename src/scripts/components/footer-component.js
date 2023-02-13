class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer">
            <div class="footer_content">
                <p>Copyright &#169; 2023, Neizar Kevin</p>
            </div>
        </footer>
        `;
  }
}

customElements.define('footer-component', Footer);
