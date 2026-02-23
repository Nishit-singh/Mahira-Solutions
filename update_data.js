const fs = require('fs');
const file = fs.readFileSync('data.ts', 'utf8');

let newFile = file;

// 1. Add category 'id-cards'
const categoryString = `
  {
    id: 'id-cards',
    title: 'ID Cards',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality ID cards for all purposes.',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=800',
  },`;

newFile = newFile.replace(/export const CATEGORIES: Category\[\] = \[/, `export const CATEGORIES: Category[] = [${categoryString}`);

// 2. We need to categorize specific products.
const idCards = [
  "Visiting Card",
  "Business ID Card",
  "Student ID Card",
  "Club Card",
  "Membership Card",
  "Health Card",
  "Loyalty Card",
  "Hotel Key Card",
  "Wedding Card",
  "Transparent Card",
  "Rainbow Card",
  "Silver Glitter Card",
  "Gold Glitter Card",
  "Emboss Card",
  "Gold Foil & Spot UV ID Card",
  "White Inkjet Card",
  "White Thermal Card",
  "Inkjet Chip Card",
  "White Thermal PVC RFID Card",
  "Both Side Printed RFID Card",
  "Jumbo Size ID Cards"
];

// Helper to find existing product and update properties
// Actually, let's just parse the PRODUCTS array from the file.
// Since it's TypeScript, we can regex replace the category for existing products
// And rename the existing products to singular form.

let productsStr = newFile.match(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];/)[1];

const renameMap = {
  'Visiting Cards': 'Visiting Card',
  'Business Cards': 'Business ID Card',
  'Student ID Cards': 'Student ID Card',
  'Club Cards': 'Club Card',
  'Membership Cards': 'Membership Card',
  'Health Cards': 'Health Card',
  'Loyalty Cards': 'Loyalty Card',
  'Hotel Key Cards': 'Hotel Key Card',
  'Wedding Cards': 'Wedding Card',
  'Rainbow Card': 'Rainbow Card',
};

for (const [oldName, newName] of Object.entries(renameMap)) {
  // Regex to match the product object block with the specific name
  const regex = new RegExp(`name:\\s*'${oldName}',([\\s\\S]*?)category:\\s*'[^']+',`, 'g');
  productsStr = productsStr.replace(regex, `name: '${newName}',$1category: 'id-cards',`);
}

// 3. Add the missing products
const existingNames = Object.values(renameMap);
const missingProducts = idCards.filter(name => !existingNames.includes(name));

const categoryImages = [
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
];

let newProductsStr = '';
missingProducts.forEach((name, i) => {
  const idValue = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  newProductsStr += `
  {
    id: '${idValue}',
    name: '${name}',
    shortDescription: 'Premium ${name}',
    fullDescription: 'High-quality ${name} with specialized features and durable finish.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: '${categoryImages[i % categoryImages.length]}',
    badges: ['PREMIUM', 'NEW'],
    specs: [
      { label: 'Material', value: 'PVC / Core' },
      { label: 'Finish', value: 'Custom' },
      { label: 'Size', value: 'Standard Size CR80' }
    ],
    applications: ['Corporate Identity', 'Access Control', 'Special Events']
  },`;
});

productsStr = productsStr.trim().replace(/\]$/, '') + newProductsStr;
newFile = newFile.replace(/export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];/, `export const PRODUCTS: Product[] = [\n${productsStr}\n];`);

fs.writeFileSync('data.ts', newFile);
console.log('data.ts updated!');
