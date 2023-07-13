import faker from "faker";

export const mount = (el) => {
  let products = "";

  for (let i = 0; i < 100; i++) {
    const name = faker.commerce.productName();
    products += `<li>${name}</li>`;
  }

  el.innerHTML = products;
  document.body.appendChild(el);
};

if (
  process.env.NODE_ENV === "development" &&
  process.env.APP_ENV === "dev-products"
) {
  const devRoot = document.createElement("div", { id: "dev-root" });
  // If we're running in standalone mode, immediately mount our app
  mount(devRoot);
}
