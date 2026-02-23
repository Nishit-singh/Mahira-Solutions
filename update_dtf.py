import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category
cat_str = """
  {
    id: 'dtf-printing-services',
    title: 'DTF Printing Services',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality DTF printing and heat press applications.',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=800',
  },"""

content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{cat_str}', content, count=1)

# 2. Add the products
products = [
    "Direct To Film Printing",
    "Custom DTF Printing",
    "Heat Press Application - T-Shirt",
    "Heat Press Application - Jeans",
    "Heat Press Application - Hoodie",
    "Heat Press Application - Cap",
    "Heat Press Application - Bag",
    "Heat Press Application - Umbrella"
]

new_products_str = ""
for name in products:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Premium {name}',
    fullDescription: 'High-quality {name} for custom apparel and accessories.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-printing-services',
    imageUrl: 'https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'CUSTOM'],
    specs: [
      {{ label: 'Type', value: 'DTF Printing' }},
      {{ label: 'Application', value: 'Heat Press' }},
      {{ label: 'Quality', value: 'High' }}
    ],
    applications: ['Apparel', 'Accessories', 'Custom Gifts']
  }},"""

content = re.sub(r"(id:\s*'max-torque-shaft'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
