import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category
cat_str = """
  {
    id: 'dtf-raw-material',
    title: 'DTF Raw Material',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality raw materials for DTF printing.',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=800',
  },"""

content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{cat_str}', content, count=1)

# 2. Add the products
products = [
    "DTF Matt Film",
    "High Density DTF Ink",
    "DTF Powder",
    "Vinyl Rolls",
    "Blank Cotton T-Shirts"
]

new_products_str = ""
for name in products:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Premium {name}',
    fullDescription: 'High-quality {name} for professional DTF applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-raw-material',
    imageUrl: 'https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=600',
    badges: ['RAW MATERIAL', 'HIGHT QUALITY'],
    specs: [
      {{ label: 'Type', value: 'DTF Supply' }},
      {{ label: 'Grade', value: 'Premium' }},
      {{ label: 'Use', value: 'Commercial' }}
    ],
    applications: ['Apparel Printing', 'Custom Merchandise', 'Factory Production']
  }},"""

# Insert new products after Heat Press Machine (16x24 - Double Bed)
# the id for that one was heat-press-machine-16x24-double-bed
content = re.sub(r"(id:\s*'heat-press-machine-16x24-double-bed'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
