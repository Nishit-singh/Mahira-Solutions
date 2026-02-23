const fs = require('fs');
const data = fs.readFileSync('data.ts', 'utf8');

const productsStr = data.match(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];/)[1];

const badSpecs = [];

// A quick hack: see if any product doesn't have a 'specs:' key
const prodBlockRegex = /{\s*id:\s*'([^']+)'([\s\S]*?)(?=,\s*{\s*id:|\s*\]\s*$)/g;
let match;
while ((match = prodBlockRegex.exec(productsStr)) !== null) {
  const id = match[1];
  const block = match[2];
  if (!block.includes('specs:')) {
    badSpecs.push(id);
  }
}

console.log('Products missing specs entirely:', badSpecs);
