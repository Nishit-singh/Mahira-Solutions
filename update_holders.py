import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category
cat_str = """
  {
    id: 'id-card-holders-accessories',
    title: 'ID Card Holders & Accessories',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality ID card holders and accessories.',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=800',
  },"""

content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{cat_str}', content, count=1)

# 2. Add the 11 products
# Wait, let's actually JUST DO IT.
products = [
    "ID Card Holder",
    "Horizontal Metal ID Card Holder",
    "Aluminum ID Card Holder",
    "Long Pushbutton Aluminum Holder",
    "Plastic Holder",
    "Plastic Button",
    "Two Card Tray",
    "Visiting Card Stand",
    "Lamination Pouch",
    "A4 Document Lamination Machine",
    "Desktop ID Card Print Solution"
]

# I will RE-WRITE the franchise-holders items to match the first 4 if they exist, to avoid bloating.
# But it's safer to just add them and remove the old ones? NO. Do NOT remove products.
# So I'll just add the ones that don't match.

existing_to_rename = {
    "Jumbo Metal ID Holder": "ID Card Holder",
    "Horizontal Metal ID Holder": "Horizontal Metal ID Card Holder",
    "Push Button Metal ID Holder": "Aluminum ID Card Holder",
}

for old, new in existing_to_rename.items():
    content = re.sub(rf"name:\s*'{old}',", f"name: '{new}',", content, count=1)
    # also change category to id-card-holders-accessories
    content = re.sub(rf"(name:\s*'{new}',[\s\S]*?category:\s*)'[^']+',", rf"\1'id-card-holders-accessories',", content, count=1)

missing = [p for p in products if p not in existing_to_rename.values()]

new_products_str = ""
for name in missing:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Premium {name}',
    fullDescription: 'High-quality {name} for industrial and corporate needs.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-card-holders-accessories',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      {{ label: 'Material', value: 'Standard' }},
      {{ label: 'Durability', value: 'High' }},
      {{ label: 'Quality', value: 'Premium' }}
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  }},"""

# Insert new products after printed-lanyard-16mm-20mm
content = re.sub(r"(id:\s*'printed-lanyard-16mm-20mm'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
