fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  //fanger vores template
  console.log(cat);
  const template = document.querySelector("#kategori-template").content;

  //Cloner den
  const clone = template.cloneNode(true);

  //Ændrer dens indhold
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `produktliste.html?category=${cat.category}`;

  //Appender
  document.querySelector(".kategori-gruppe ol").appendChild(clone);
}
