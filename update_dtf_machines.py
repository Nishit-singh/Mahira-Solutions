import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category
cat_str = """
  {
    id: 'dtf-machines',
    title: 'DTF Machines',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality DTF printers and heat press machines.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  },"""

content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{cat_str}', content, count=1)

# 2. Add the products
products = [
    "A3 DTF Printer (2 Head)",
    "DTF Printer (4 Head Epson i3200)",
    "Heat Press Machine (16x24 - New Auto Up)",
    "Heat Press Machine (16x24 - Double Bed)"
]

new_products_str = ""
for name in products:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Industrial {name}',
    fullDescription: 'High-performance {name} for professional printing businesses.',
    vertical: BusinessVertical.PRINTING,
    category: 'dtf-machines',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    badges: ['INDUSTRIAL', 'MACHINE'],
    specs: [
      {{ label: 'Type', value: 'DTF Equipment' }},
      {{ label: 'Grade', value: 'Professional' }},
      {{ label: 'Build', value: 'Heavy Duty' }}
    ],
    applications: ['Commercial Printing', 'Apparel Mfg', 'Custom Merchandise']
  }},"""

# Insert new products after Heat Press Application - Umbrella
content = re.sub(r"(id:\s*'heat-press-application-umbrella'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
