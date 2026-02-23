const fs = require('fs');
const data = fs.readFileSync('data.ts', 'utf8');

const productsStr = data.match(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];/)[1];
const it = productsStr.matchAll(/id:\s*'([^']+)'/g);

const ids = [];
let m;
while (!(m = it.next()).done) {
  ids.push(m.value[1]);
}

const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
console.log('Duplicate IDs found in products:', duplicates);
