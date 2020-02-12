interface Mountain {
  name: string;
  height: number;
}

interface Product {
  name: string;
  price: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

let findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string => {
  let tallestMountainHeight: number = 0;
  let nameOfTallestMountain: string = "";
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallestMountainHeight) {
      tallestMountainHeight - mountain.height;
      nameOfTallestMountain = mountain.name;
    }
  });
  return nameOfTallestMountain;
};

let result = findNameOfTallestMountain(mountains);
console.log(result);

let products: Product[] = [
  { name: "Hermes", price: 15950 },
  { name: "Christian Louboutin", price: 695 },
  { name: "True Religion Jeans", price: 998 }
];

let calcAverageProductPrice = (arrayOfProducts: Product[]): number => {
  let productName: string = "";
  let totalPrice: number = 0;
  arrayOfProducts.forEach(product => {
    totalPrice += product.price;
  });

  return totalPrice / 3;
};
console.log(calcAverageProductPrice(products));

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 }
];

let calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
  let totalPrice = 0;
  arrayOfInventoryItems.forEach(item => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};
console.log (calcInventoryValue(inventory));

