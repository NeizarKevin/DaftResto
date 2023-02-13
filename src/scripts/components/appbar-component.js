class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
    <div class="logo">
      <a href="/">DaftResto</a>
    </div>
    <div class="menu">
      <ul>
        <li class="nav_item"><a href="#/home">Home</a></li>
        <li class="nav_item"><a href="#/favorite">Favorite</a></li>
        <li class="nav_item">
          <a target="_blank" href="https://github.com/NeizarKevin" rel="noopener">About Us</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="hamburger">
    <button class="button_menu" id="menu_resp" aria-label="button to open side menu">☰</button>
    <a href="/">DaftResto</a>
    <div class="nav_logo">&nbsp;</div>
  </div>

  <div class="hero" id="hero">
    <div class="hero_inner">
      <p class="hero_title">Daft Resto</p>
      <p class="hero_tagline">
        Discover new restaurants. Easy search by location, cuisine and rating.
      </p>
      <form class="form-search" id="form-search">
        <input class="search" type="text" placeholder="Search Restaurant..." />
        <button class="btnSearch" type="submit"><i class="fa fa-search"></i></button>
      </form>
    </div>
  </div>
        `;
  }
}

customElements.define('appbar-component', Appbar);
