const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".infobox p").textContent = product.productdisplayname;
  document.querySelector("h1").textContent = product.productdisplayname;
  document.querySelector(".buy h2").textContent = product.productdisplayname;
  document.querySelector(".buybox .brand").textContent = product.brandname;
  document.querySelector(".buybox .kategori").textContent = product.articletype;
  // document.querySelector(".size").textContent = product.sizefitdesc;
  document.querySelector(".infobox .color").textContent = product.basecolour;
  document.querySelector(".infobox .id").textContent = product.id;
  document.querySelector(".buybox .price").textContent = product.price + ",-";
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}
