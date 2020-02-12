var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
var findNameOfTallestMountain = function (arrayOfMountains) {
    var tallestMountainHeight = 0;
    var nameOfTallestMountain = "";
    arrayOfMountains.forEach(function (mountain) {
        if (mountain.height > tallestMountainHeight) {
            tallestMountainHeight - mountain.height;
            nameOfTallestMountain = mountain.name;
        }
    });
    return nameOfTallestMountain;
};
var result = findNameOfTallestMountain(mountains);
console.log(result);
var products = [
    { name: "Hermes", price: 15950 },
    { name: "Christian Louboutin", price: 695 },
    { name: "True Religion Jeans", price: 998 }
];
var calcAverageProductPrice = function (arrayOfProducts) {
    var productName = "";
    var totalPrice = 0;
    arrayOfProducts.forEach(function (product) {
        totalPrice += product.price;
    });
    return totalPrice / 3;
};
console.log(calcAverageProductPrice(products));
var inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
var calcInventoryValue = function (arrayOfInventoryItems) {
    var totalPrice = 0;
    arrayOfInventoryItems.forEach(function (item) {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
};
console.log(calcInventoryValue(inventory));
