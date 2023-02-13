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
function createMain(){
    const main = document.createElement('main');
    main.classList.add('main')
    return main;
}

function loadPage() {
  const content = document.querySelector(".content");
  content.appendChild(createnavBar());
  content.appendChild(createMain());
}
export default loadPage;
