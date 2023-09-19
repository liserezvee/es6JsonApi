// const products = [
//   { id: 1, name: "laptop", price: 45000 },
//   //   { id: 2, name: "mobile", price: 80000 },
//   //   { id: 3, name: "watch", price: 25000 },
//   //   { id: 4, name: "tablet", price: 25000 },
// ];
// console.log(products);
// const stingified = JSON.stringify(products);
// console.log(stingified);

const shop = {
  owener: "Vikram Rathore",
  address: {
    street: "via nizza",
    city: "Torino",
    country: "bd",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObject = JSON.parse(shopJson);
console.log(shopObject);
