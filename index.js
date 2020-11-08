const listItems = document.querySelector(".list-items");
const total = document.querySelector(".total");

console.log(listItems);
let products = [
  {
    id: 0,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1
  },
  {
    id: 1,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 2,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 3,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 4,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 5,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 6,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 7,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 8,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
  {
    id: 9,
    name: "shoe",
    imageUrl: "asset/shoe.jpeg",
    quantity: 0,
    price:1

  },
];
const renderProduct = (products) => {
  console.log("render", products);
  let items = "";
  const totalPrice = products.reduce((prev, next) => prev + next.price*next.quantity, 0);
  total.innerHTML = `<p class="total-price">Total Price : ${totalPrice}$</p>`;
  products.forEach(
    (product) =>
      (items += `
      <li class='item' data-id="${product.id}">
      <div class="item-container">
      <img src="${product.imageUrl}"/>
      <p class="product-name">${product.name}</p>
      <div class="add-sub">
      <p class="subtract">-</p>
      <p class="product">${product.quantity}</p>
      <p class="add">+</p>
      </div>
      <p class="product-name">${product.price}$</p>
      </div>
      </li>
      `)
  );
  listItems.innerHTML = items;
  items = "";
};
renderProduct(products);

//functions
const addItem = (event) => {
  const id = parseInt(
    event.target.parentNode.parentNode.parentNode.getAttribute("data-id")
  );
  if (event.target.getAttribute("class") !== "add") {
    return;
  }
  const quant = products[id].quantity;
  products = products.map((product) => {
    if (id === product.id) {
      return {
        ...product,
        quantity: quant + 1,
      };
    }
    return product;
  });
  console.log(products);
  renderProduct(products);
};
const removeItem = (event) => {
  const id = parseInt(
    event.target.parentNode.parentNode.parentNode.getAttribute("data-id")
  );
  console.log(event.target.getAttribute("class"));
  if (event.target.getAttribute("class") !== "subtract") {
    return;
  }
  let quant = products[id].quantity;
  if (quant <= 0) {
    quant = 1;
  }
  products = products.map((product) => {
    if (id === product.id) {
      return {
        ...product,
        quantity: quant - 1,
      };
    }
    return product;
  });
  console.log(products);
  renderProduct(products);
};
listItems.addEventListener("click", addItem);
listItems.addEventListener("click", removeItem);
