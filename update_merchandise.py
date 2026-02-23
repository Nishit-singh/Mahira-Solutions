import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category
cat_str = """
  {
    id: 'personalized-merchandise-gift-products',
    title: 'Personalized Merchandise & Gift Products',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality personalized merchandise and custom gift products.',
    imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
  },"""

# Insert category before 'phone-skin-printing' or just at the end of the list.
# The user wants it "inside the existing 'Printing' section". 
# All categories we added so far have `vertical: BusinessVertical.PRINTING`.
# I will append this category at the very end of the CATEGORIES array.
# Or wait, let's just append it to the end of the categories array.
cat_match = re.search(r'export const CATEGORIES: Category\[\] = \[([\s\S]*?)\];', content)
if cat_match:
    cat_inner = cat_match.group(1).rstrip()
    if cat_inner.endswith(','):
         new_cat_inner = cat_inner + cat_str
    else:
         new_cat_inner = cat_inner + "," + cat_str
         
    new_cat_str = f"export const CATEGORIES: Category[] = [\n{new_cat_inner}\n];"
    content = content[:cat_match.start()] + new_cat_str + content[cat_match.end():]

# 2. Add the products
products = [
    "Travel Bags",
    "Personalised Name Hangings",
    "Customised Pure Cotton T-Shirts",
    "Customised Paper Gift Bags",
    "Doms Stationery Suitcase",
    "Sequence Hoodies",
    "Sequins Tees (Pure Cotton)",
    "Hoodies",
    "Passport Covers & Luggage Tags",
    "Neck Pillows, Eye Mask & Luggage Tag Set",
    "Gift Tags",
    "Wooden Luggage Tags",
    "Stainless Steel Lunchboxes",
    "Kids School Name Slips",
    "Customised Gift Hampers",
    "Ceramic Mugs",
    "Personalized Stationery Hampers",
    "Engraved Pencils",
    "Complete Personalized Art Kit",
    "Personalised Birthday Hampers",
    "Duffel Bags",
    "5 Slot Watch Organiser",
    "Stainless Steel Coffee Mugs",
    "Three Section Plate Set",
    "Round Meal Set",
    "Waterproof Labels",
    "Hankies",
    "Bag Tags / Luggage Tags",
    "Hair Brush",
    "Aprons",
    "Personalised Felt Organiser",
    "DIY Fridge Magnets"
]

new_products_str = ""
for name in products:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Custom {name}',
    fullDescription: 'High-quality personalized {name} perfect for gifting and corporate merchandise.',
    vertical: BusinessVertical.PRINTING,
    category: 'personalized-merchandise-gift-products',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PERSONALIZED', 'CUSTOM'],
    specs: [
      {{ label: 'Type', value: 'Merchandise' }},
      {{ label: 'Customization', value: 'Available' }}
    ],
    applications: ['Gifting', 'Corporate Merch', 'Events']
  }},"""

# Append to the very end of PRODUCTS array
# We find export const PRODUCTS: Product[] = [ ... ];
prod_match = re.search(r'export const PRODUCTS: Product\[\] = \[([\s\S]*?)\];', content)
if prod_match:
    prod_inner = prod_match.group(1).rstrip()
    if prod_inner.endswith(','):
         new_prod_inner = prod_inner + new_products_str
    else:
         new_prod_inner = prod_inner + "," + new_products_str
         
    new_prod_str = f"export const PRODUCTS: Product[] = [\n{new_prod_inner}\n];"
    content = content[:prod_match.start()] + new_prod_str + content[prod_match.end():]

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
