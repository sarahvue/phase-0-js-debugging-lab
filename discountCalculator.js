function calculateDiscountedPrice(quantity, pricePerItem) {
  debugger;
  let totalPrice = 0;

  for (let i = 0; i < quantity; i++) {
    debugger;
    totalPrice += pricePerItem;
  }
  debugger;
  if (quantity >= 10) {
    totalPrice *= 0.9;
  }

  return totalPrice;
}

console.log(calculateDiscountedPrice(10, 5));

module.exports = calculateDiscountedPrice;
