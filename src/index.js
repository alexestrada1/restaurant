import loadHome from "./loadHome";
import createMenu from "./loadMenu";
import loadPage from "./loadPage";

init();

function addNavEvents(){
  const homebtn = document.querySelector('.homeBtn');
  const menubtn = document.querySelector('.menuBtn');

  homebtn.addEventListener('click',loadHome);
  menubtn.addEventListener('click',createMenu);
}
function init(){
  loadPage();
  loadHome();
  addNavEvents();
}