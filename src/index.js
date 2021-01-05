import defaultObject from './hof-exercise';

const { calculateTotalDeclarative, prices } = defaultObject;

const items = [
    {price: 100, taxable: true},
    {price: 1000, taxable: false},
    {price: 250, taxable: true}
];

const tax = 7.25;

var x = calculateTotalDeclarative;

var z = x(items, tax);

console.log(z);

