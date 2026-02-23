import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add Lanyards category
lanyards_cat = """
  {
    id: 'lanyards',
    title: 'Lanyards',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality lanyards for IDs and keys.',
    imageUrl: 'https://images.unsplash.com/photo-1626609235264-164478207d27?auto=format&fit=crop&q=80&w=800',
  },"""

# Insert category at the beginning of CATEGORIES array
content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{lanyards_cat}', content, count=1)

# 2. Update existing products
# Engraving Lanyard
content = re.sub(
    r"(name:\s*'Engraving Lanyard',[\s\S]*?category:\s*)'[^']+',",
    r"\1'lanyards',",
    content, count=1
)

# Fish Hook Lanyards -> Fish Hook / Oval Hook Lanyard
content = re.sub(
    r"name:\s*'Fish Hook Lanyards'(,[\s\S]*?category:\s*)'[^']+',",
    r"name: 'Fish Hook / Oval Hook Lanyard'\1'lanyards',",
    content, count=1
)

# Dog Hook Lanyard -> Dog Hook / Lever Hook Lanyard
content = re.sub(
    r"name:\s*'Dog Hook Lanyard'(,[\s\S]*?category:\s*)'[^']+',",
    r"name: 'Dog Hook / Lever Hook Lanyard'\1'lanyards',",
    content, count=1
)

# 3. Add new ones
new_lanyards = [
    "Plastic Button Lanyard",
    "Push Button Lanyard",
    "Printed Lanyard (16mm & 20mm)"
]

new_products_str = ""
for name in new_lanyards:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Premium {name}',
    fullDescription: 'High-quality {name} for secure ID display.',
    vertical: BusinessVertical.PRINTING,
    category: 'lanyards',
    imageUrl: 'https://images.unsplash.com/photo-1611175694989-48705251390d?auto=format&fit=crop&q=80&w=600',
    badges: ['DURABLE', 'PREMIUM'],
    specs: [
      {{ label: 'Material', value: 'Polyester / Nylon' }},
      {{ label: 'Clip', value: 'Standard' }},
      {{ label: 'Width', value: '16mm / 20mm' }}
    ],
    applications: ['Corporate Identity', 'Events', 'Schools']
  }},"""

# Insert new lanyards after engraving-lanyard
content = re.sub(r"(id:\s*'engraving-lanyard'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
