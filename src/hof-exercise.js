/**********/
// EXAMPLES
/**********/

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/

// prices: (items: [{price: number}]) -> [number]
const prices = (items) => {
  var priceList = [];
  for (const item of items) {
    priceList.push(item.price);
  }
  return priceList;
};

// sum: (numbers: [number]) -> number
const sum = (numbers) => {
  let result = 0;
  for (const x of numbers) {
    result += x;
  }
  return result;
}; 

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = (items) => {
  var taxableList = [];
  for (const item of items) {
    if (item.taxable) {
      taxableList.push(item);
    }
  }
  return taxableList;
};

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) => {
  var taxAmounts = [];
  for (var price of prices) {
    taxAmounts.push((price * tax));
  }
  return taxAmounts;
}; 

// baseSum: (items: [{price: number}]) -> number
const baseSum = items => sum(prices(items));

// taxSum: (items: [{price: number, taxable: boolean}], tax: number) -> number
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};
