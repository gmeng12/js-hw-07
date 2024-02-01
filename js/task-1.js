const categoryList = document.getElementById('categories');
const categoryItem = categoryList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryElem = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElem}`);
});