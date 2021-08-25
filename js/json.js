// javascript object notation.
// JSON.
const user = { id: 11, name: 'khan' };
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);

const shop = {
    name: 'alom store',
    address: 'india',
    value: 300000,
    product: ['laptop', 'mobile', 'iphone', 'pepsi'],
    isExpensive: false
};
const stringified2 = JSON.stringify(shop);
// console.log(shop);
console.log(stringified2);
const converted = JSON.parse(stringified2);
console.log(converted.address);

