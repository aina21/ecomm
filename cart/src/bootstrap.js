import faker from "faker";
const totalItems = faker.random.number({ min: 10, max: 20 });

const results = `<div>You have ${totalItems} items in your cart</div>`;

document.querySelector("#dev-cart").innerHTML = results;
