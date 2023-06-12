const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const element = document.querySelector(".gallery")
// const newItem = document.createElement("li")
// newItem.textContent = images[0]
// const newItem1 = document.createElement("li")
// const newItem2 = document.createElement("li")
// element.append(newItem, newItem1, newItem2)
// // element.insertAdjacentHTML()
// console.log(element)

images.map((images) => {
  const itemEl = document.createElement('li');
  
  console.log(itemEl)
})