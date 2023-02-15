function createnavBar() {
  const navBar = document.createElement("div");
  navBar.classList.add("navbar");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("homeBtn");
  homeBtn.innerText = "home";
  navBar.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menuBtn");
  menuBtn.innerText = "menu";
  navBar.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contactBtn");
  contactBtn.innerText = "contact";
  navBar.appendChild(contactBtn);

  return navBar;
}

function createLogo() {
  const logo = document.createElement("img");
  logo.src = "/Users/alexestrada/repos/restaurant/src/restaurant-logo.png";
  logo.classList.add('logo');
  return logo;
}
function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}

function loadPage() {
  const content = document.querySelector(".content");

  const header = document.createElement("div");
  header.classList.add("header");
  header.appendChild(createLogo());
  header.appendChild(createnavBar());

  content.appendChild(header)
  content.appendChild(createMain());
}
export default loadPage;
