const products = [
  {
    name: "Garrafa de Gás 3kg",
    type: "Tutigas",
    bottle: "3kg",
    price: "€14,00",
    tag: "",
    image: "3kg.png"
  },
  {
    name: "Garrafa de Gás 11kg",
    type: "Carburacao",
    bottle: "11kg",
    price: "€28,20",
    tag: "",
    image: "Garrafa-11kg.jpg"
  },
  {
    name: "Garrafa de Gás 13kg",
    type: "Butano",
    bottle: "13kg",
    price: "€29,90",
    tag: "",
    image: "Garrafa-13kg.jpg"
  },
  {
    name: "Garrafa de Gás XLITE 18kg",
    type: "XLITE",
    bottle: "XLITE 18kg",
    price: "€29,90",
    tag: "",
    image: "18kg.png"
  },
  {
    name: "Garrafa de Gás 45kg",
    type: "Propano",
    bottle: "45kg",
    price: "€96,00",
    tag: "",
    image: "Garrafa-45kg.jpg"
  }
];

const priceTable = [
  { product: "Garrafa de Gás 3kg", type: "Tutigas", bottle: "3kg", price: "€14,00" },
  { product: "Garrafa de Gás 11kg", type: "Carburacao", bottle: "11kg", price: "€28,20" },
  { product: "Garrafa de Gás 13kg", type: "Butano", bottle: "13kg", price: "€29,90" },
  { product: "Garrafa de Gás XLITE 18kg", type: "XLITE", bottle: "XLITE 18kg", price: "€29,90" },
  { product: "Garrafa de Gás 45kg", type: "Propano", bottle: "45kg", price: "€96,00" }
];

const productGrid = document.querySelector('#product-grid');
const priceTableBody = document.querySelector('#price-table-body');
const yearEl = document.querySelector('#year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (productGrid) {
  productGrid.innerHTML = products
    .map(
      (item) => `
        <article class="product-card">
          <div class="product-image-wrap">
            <img class="product-image" src="${item.image}" alt="${item.name}" />
          </div>
          ${item.tag ? `<span class="tag">${item.tag}</span>` : ''}
          <h3>${item.name}</h3>
          <p>${item.type} • ${item.bottle}</p>
          <div class="product-meta">
            <div class="product-price">${item.price}<small>/ unidade</small></div>
            <a class="product-btn" href="https://wa.me/351965553543" target="_blank" rel="noreferrer">Pedir</a>
          </div>
        </article>
      `
    )
    .join('');
}

if (priceTableBody) {
  priceTableBody.innerHTML = priceTable
    .map(
      (item) => `
        <tr>
          <td>${item.product}</td>
          <td>${item.type}</td>
          <td>${item.bottle}</td>
          <td>${item.price}</td>
        </tr>
      `
    )
    .join('');
}
