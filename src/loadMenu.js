function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const menuHeader = document.createElement("h2");
  menuHeader.innerHTML = "Menu";
  menu.appendChild(menuHeader);

  const menuItem1 = createMenuItem(
    "Pizza",
    "A pan of dough with tomato sauce and cheese on top, served with your choice of toppings",
    "$5.99"
  );

  const menuItem2 = createMenuItem(
    "Burger",
    "Burger served with hame a briche bun, comes with onions, mustard, ketchup, and mayo.",
    "$3.99"
  );

  const menuItem3 = createMenuItem(
    "chicken tenders",
    "Fried chicken tenders coated with homemade seasoning, comes in with 4 and a side of fries",
    "$3.99"
  );

  const menuItem4 = createMenuItem(
    "steak",
    "A5 wagyu steak cooked to your liking, seasoned with salt and pepper",
    "$399.99"
  );
  const beverages = document.createElement("div");
  beverages.classList.add("bevs");
  const beveragesHeader = document.createElement("h3");
  beveragesHeader.innerHTML = "Beverages";
  beverages.appendChild(beveragesHeader);

  const drinksList = document.createElement("ul");
  drinksList.appendChild(createDrink("coke"));
  drinksList.appendChild(createDrink("Sprite"));
  drinksList.appendChild(createDrink("Dr.pepper"));
  beverages.appendChild(drinksList)

  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(menu);
  main.appendChild(menuItem1);
  main.appendChild(menuItem2);
  main.appendChild(menuItem3);
  main.appendChild(menuItem4);
  main.appendChild(beverages);
}
function createMenuItem(name, description, cost) {
  const menuItem = document.createElement("div");
  const menuItemHeader = document.createElement("h3");
  menuItemHeader.innerHTML = name;
  var para = document.createElement("p");
  para.innerHTML = description;
  var price = document.createElement("p");
  price.innerHTML = cost;
  menuItem.appendChild(menuItemHeader);
  menuItem.appendChild(para);
  menuItem.appendChild(price);
  return menuItem;
}
function createDrink(name) {
  const drink = document.createElement("li");
  drink.innerHTML = name;
  return drink;
}
export default createMenu;
