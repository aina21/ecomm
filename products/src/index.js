import faker from "faker";

let products = "";

for (let i = 0; i < 100; i++) {
  const name = faker.commerce.productName();
  products += `<li>${name}</li>`;
}

document.querySelector("#dev-prod").innerHTML = products;
