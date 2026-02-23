const fs = require('fs');
const data = fs.readFileSync('data.ts', 'utf8');

const productsStr = data.match(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];/)[1];
const it = productsStr.matchAll(/id:\s*'([^']+)'[\s\S]*?applications:\s*\[([\s\S]*?)\]/g);

const badIds = [];
let m;
while (!(m = it.next()).done) {
  const [_, id, apps] = m.value;
  if (!apps.trim()) {
      badIds.push(id);
  }
}

console.log('Products missing applications:', badIds);
