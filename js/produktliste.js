const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder funktionen showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi

  const copy = template.cloneNode(true);

  //ændre indholdet
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price + ",-";
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".udsalg").textContent = product.discount + "%";
  copy.querySelector(".articletype").textContent = product.articletype;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  if (product.soldout) {
    copy.querySelector(".produktliste div").classList.add("udsolgt");
    copy.querySelector(".skilt").classList.remove("hide");
  }
  if (product.discount) {
    copy.querySelector(".udsalgspris").classList.add("procent");
    copy.querySelector(".procent").classList.remove("hide");
  }
  copy.querySelector(".read-more").setAttribute("href", `produkt.html?id=${product.id}`);
  // append
  document.querySelector("main").appendChild(copy);
}

/*          <div class="flex produktliste">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Nike sahara">
                        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                        <p>T-shirts</p>
                        <hr>
                        <p>Nike</p>
                        <p>DKK 895,-</p>
                        <p><a href="produkt.html">Læs mere</a></p>
                    </div> */

/*{
  "id": 1165,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2013,
  "usagetype": "Sports",
  "productdisplayname": "Mean Team India Cricket Jersey",
  "price": 2495,
  "discount": 45,
  "brandname": "Nike",
  "soldout": 0
} */
