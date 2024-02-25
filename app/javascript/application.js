// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import { activateScrollAnimation } from 'custom/scrolling_animation'
import 'custom/title_animation'
import { navbarScroll } from 'custom/navbar'

document.addEventListener("turbo:load", (event) => {
  // should probably add some extra logic to only readd
  // listeners on certain pages. maybe have each fragment have an id
  // and query for it before reinitializing
  console.log("reloaded")
  activateScrollAnimation();
  window.onscroll = navbarScroll;
});