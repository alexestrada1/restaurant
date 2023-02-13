function createGreeting() {
  const greeting = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = "Good Eats";
  greeting.appendChild(title);

  const para = document.createElement("p");
  para.innerHTML = "Here at Good Eats, we pide in makinging the best food.";
  (" We have a wide variety to choose from. from vegan options to meat");

  greeting.appendChild(para);
  return greeting;
}
function loadHome(){
    const main = document.querySelector('.main')
    main.textContent = ''
    main.appendChild(createGreeting());
}
export default loadHome;
