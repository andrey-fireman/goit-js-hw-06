const title = document.querySelectorAll('.item');
console.log("Number of categories:", title.length)

title.forEach(function (item) {
    console.log("Category:", item.children[0].textContent, "Elements:", item.children[1].children.length)
})