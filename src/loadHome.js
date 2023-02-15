function createGreeting() {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");
  const title = document.createElement("h2");
  title.textContent = "Good Eats";
  greeting.appendChild(title);

  const para = document.createElement("p");
  para.innerHTML = "Here at Good Eats, we pide in makinging the best food.";
  (" We have a wide variety to choose from. from vegan options to meat");

  greeting.appendChild(para);
  return greeting;
}
function createHours() {
  const hours = document.createElement("div");
  hours.classList.add("hours");

  const hoursHeader = document.createElement("h3");
  hoursHeader.innerHTML = "Hours";

  const list = document.createElement("ul");
  for (let i = 0; i < 7; i++) {
    var weekday = document.createElement("li");
    switch (i) {
      case 0:
        weekday.innerHTML = "Sunday";
        break;
      case 1:
        weekday.innerHTML = "Monday";
        break;
      case 2:
        weekday.innerHTML = "Tuesday";
        break;
      case 3:
        weekday.innerHTML = "Wednesday";
        break;
      case 4:
        weekday.innerHTML = "Thursday";
        break;
      case 5:
        weekday.innerHTML = "Friday";
        break;
      case 6:
        weekday.innerHTML = "Saturday";
        break;
    }

    list.appendChild(weekday);
  }
  hours.appendChild(hoursHeader);
  hours.appendChild(list);
  return hours;
}
function createLocation() {
  const location = document.createElement("div");
  location.classList.add("location");
  const locationHeader = document.createElement("h3");
  locationHeader.innerHTML = "Location";

  const para = document.createElement("p");
  para.innerHTML = "mains street 1233, arkasnsa 72209";

  location.appendChild(locationHeader);
  location.appendChild(para);
  return location;
}
function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createGreeting());
  main.appendChild(createHours());
  main.appendChild(createLocation());
}
export default loadHome;
