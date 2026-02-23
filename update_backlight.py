import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category
cat_str = """
  {
    id: 'backlight-printing-solution',
    title: 'Backlight Printing Solution',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality backlight printing solutions and machines.',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=800',
  },"""

content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{cat_str}', content, count=1)

# 2. Add the products
products = [
    "Backlight Printing Solution",
    "Epson i3200-A1 Backlight Printer",
    "Manual Lamination Machine",
    "Auto Lamination Machine",
    "Backlight Film Roll",
    "Water Base Dye Ink"
]

new_products_str = ""
for name in products:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Premium {name}',
    fullDescription: 'High-quality {name} for professional backlight printing applications.',
    vertical: BusinessVertical.PRINTING,
    category: 'backlight-printing-solution',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM', 'BACKLIGHT'],
    specs: [
      {{ label: 'Type', value: 'Printing Solution' }},
      {{ label: 'Grade', value: 'Professional' }},
      {{ label: 'Quality', value: 'High' }}
    ],
    applications: ['Signage', 'Displays', 'Commercial Printing']
  }},"""

# Insert new products after Blank Cotton T-Shirts
content = re.sub(r"(id:\s*'blank-cotton-t-shirts'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
