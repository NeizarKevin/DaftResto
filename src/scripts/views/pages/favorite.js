import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const favorite = {
  async render() {
    return `
      <div class="loader-container" id="loader-container">
        <div id="loader"></div>
      </div> 
      <section class="content" id="content" tabindex="0">
      <div class="card">
          <h1 class="card__label">Your Favorite Restaurant</h1>
          <div class="lists" id="lists"></div>
      </div>
      </section> 
        `;
  },

  async afterRender() {
    const list = await FavoriteRestaurantDB.getAllRestaurant();
    const restaurantContainer = document.querySelector('#lists');
    const mainContainer = document.querySelector('#hero');
    list.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
    mainContainer.style.display = 'block';

    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default favorite;
