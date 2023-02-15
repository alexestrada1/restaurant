import loadHome from "./loadHome";
import createMenu from "./loadMenu";
import loadPage from "./loadPage";
import createContactPage from "./contact";

init();

function addNavEvents(){
  const homebtn = document.querySelector('.homeBtn');
  const menubtn = document.querySelector('.menuBtn');
  const contactbtn = document.querySelector('.contactBtn');


  homebtn.addEventListener('click',loadHome);
  menubtn.addEventListener('click',createMenu);
  contactbtn.addEventListener('click',createContactPage);

  
}
function init(){
  loadPage();
  loadHome();
  addNavEvents();
}