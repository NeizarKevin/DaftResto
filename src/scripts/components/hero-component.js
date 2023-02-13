class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero_inner">
                <p class="hero_title">Daft Resto</p>
                <p class="hero_tagline">Discover new restaurants. Easy search by location, cuisine and rating.</p>
                <input class="search" type="text" placeholder="Find your favorite restaurant..."/>
                <button class="btnSearch" type="submit">Search</button>
            </div>
        </div>
        `;
  }
}

customElements.define('hero-component', Hero);
