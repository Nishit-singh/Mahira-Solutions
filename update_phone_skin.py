import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category
cat_str = """
  {
    id: 'phone-skin-printing',
    title: 'Phone Skin Printing',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality phone skin printing solutions.',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=800',
  },"""

content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{cat_str}', content, count=1)

# 2. Add the products
products = [
    "Bharti Phone Skin Printer",
    "Phone Skin Film Cutter",
    "Phone Skin Printing Kit"
]

new_products_str = ""
for name in products:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Premium {name}',
    fullDescription: 'High-quality {name} for professional phone skin and customization businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'phone-skin-printing',
    imageUrl: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOMIZATION'],
    specs: [
      {{ label: 'Type', value: 'Phone Skin Equipment' }},
      {{ label: 'Grade', value: 'Professional' }},
      {{ label: 'Quality', value: 'High' }}
    ],
    applications: ['Mobile Shops', 'Customization Kiosks', 'Electronics']
  }},"""

# Insert new products after Water Base Dye Ink
content = re.sub(r"(id:\s*'water-base-dye-ink'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
