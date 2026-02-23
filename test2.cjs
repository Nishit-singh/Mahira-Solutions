const fs = require('fs');
const data = fs.readFileSync('data.ts', 'utf8');
const productsStr = data.match(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];/)[1];

const ids = [];
const regex = /id:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(productsStr)) !== null) {
  ids.push(match[1]);
}

const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
if (duplicates.length > 0) {
  console.log('Duplicates:', duplicates);
} else {
  console.log('No duplicates found in', ids.length, 'products');
}

const engraved = ids.filter(i => i.includes('engraved'));
console.log('Engraved IDs:', engraved);

