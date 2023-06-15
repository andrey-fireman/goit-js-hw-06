const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const items = document.getElementById("ingredients")

// const element = document.createElement("li")
// element.textContent = ingredients[0]

// const element1 = document.createElement("li")
// element1.textContent = ingredients[1]

// const element2 = document.createElement("li")
// element2.textContent = ingredients[2]

// const element3 = document.createElement("li")
// element3.textContent = ingredients[3]

// const element4 = document.createElement("li")
// element4.textContent = ingredients[4]

// const element5 = document.createElement("li")
// element5.textContent = ingredients[5]
// items.append(element, element1, element2, element3, element4, element5)
// items.classList.add("item")
// console.log(items)
const items = document.getElementById("ingredients")


const ingredient1 = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
})

items.append(...ingredient1)