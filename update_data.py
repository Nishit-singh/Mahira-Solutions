import re
import sys

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Add category 'id-cards'
category_str = """
  {
    id: 'id-cards',
    title: 'ID Cards',
    vertical: BusinessVertical.PRINTING,
    description: 'High-quality ID cards for all purposes.',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=800',
  },"""

# Insert category at the beginning of CATEGORIES array
content = re.sub(r'export const CATEGORIES: Category\[\] = \[', f'export const CATEGORIES: Category[] = [{category_str}', content, count=1)

id_cards = [
  "Visiting Card", "Business ID Card", "Student ID Card",
  "Club Card", "Membership Card", "Health Card",
  "Loyalty Card", "Hotel Key Card", "Wedding Card",
  "Transparent Card", "Rainbow Card", "Silver Glitter Card",
  "Gold Glitter Card", "Emboss Card", "Gold Foil & Spot UV ID Card",
  "White Inkjet Card", "White Thermal Card", "Inkjet Chip Card",
  "White Thermal PVC RFID Card", "Both Side Printed RFID Card",
  "Jumbo Size ID Cards"
]

rename_map = {
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
}

# Update existing cards
for old_name, new_name in rename_map.items():
    # Fix category
    pattern1 = rf"(name:\s*'{old_name}',[\s\S]*?)category:\s*'[^']+',"
    content = re.sub(pattern1, rf"\1category: 'id-cards',", content, count=1)
    
    # Update name
    pattern2 = rf"name:\s*'{old_name}',(\s*shortDescription:)"
    content = re.sub(pattern2, rf"name: '{new_name}',\1", content, count=1)


missing_products = [name for name in id_cards if name not in rename_map.values()]

new_products_str = ""
for name in missing_products:
    id_value = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    new_products_str += f"""
  {{
    id: '{id_value}',
    name: '{name}',
    shortDescription: 'Premium {name}',
    fullDescription: 'High-quality {name} with specialized features.',
    vertical: BusinessVertical.PRINTING,
    category: 'id-cards',
    imageUrl: 'https://images.unsplash.com/photo-1544531896-b8471c77871c?auto=format&fit=crop&q=80&w=600',
    badges: ['PREMIUM'],
    specs: [
      {{ label: 'Material', value: 'PVC' }},
      {{ label: 'Finish', value: 'Custom' }},
      {{ label: 'Size', value: 'CR80' }}
    ],
    applications: ['Identity', 'Access', 'Events']
  }},"""

# Insert new products before the end of PRODUCTS array
# Since finding the end is hard, let's insert it right after rainbow-card
content = re.sub(r"(id:\s*'rainbow-card'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\})", rf"\1,{new_products_str}", content, count=1)

with open('data.ts', 'w') as f:
    f.write(content)

print("Success")
