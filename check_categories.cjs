const fs = require('fs');
const data = fs.readFileSync('data.ts', 'utf8');

const productsSection = data.match(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];/)[1];
const regex = /id:\s*'([^']+)'[\s\S]*?vertical:\s*BusinessVertical\.(METAL|PRINTING)[\s\S]*?category:\s*'([^']+)'/g;

const CATEGORIES = [
  { id: 'id-cards', vertical: 'PRINTING' },
  { id: 'lanyards', vertical: 'PRINTING' },
  { id: 'id-card-holders-accessories', vertical: 'PRINTING' },
  { id: 'personalized-merchandise-gift-products', vertical: 'PRINTING' },
  { id: 'phone-skin-printing', vertical: 'PRINTING' },
  { id: 'backlight-printing-solution', vertical: 'PRINTING' },
  { id: 'dtf-raw-material', vertical: 'PRINTING' },
  { id: 'dtf-machines', vertical: 'PRINTING' },
  { id: 'dtf-printing-services', vertical: 'PRINTING' },
  { id: 'metal-cnc', vertical: 'METAL' },
  { id: 'metal-fab', vertical: 'METAL' }
];

let match;
const badProducts = [];
while ((match = regex.exec(productsSection)) !== null) {
  const [_, id, vertical, categoryId] = match;
  const categoryDef = CATEGORIES.find(c => c.id === categoryId);
  if (!categoryDef) {
    badProducts.push(`${id}: category ${categoryId} does not exist`);
  } else if (categoryDef.vertical !== vertical) {
    badProducts.push(`${id}: category ${categoryId} is ${categoryDef.vertical} but product is ${vertical}`);
  }
}

console.log('Misconfigured Products:', badProducts);
