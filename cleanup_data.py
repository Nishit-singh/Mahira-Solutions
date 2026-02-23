import re

with open('data.ts', 'r') as f:
    content = f.read()

# 1. Remove keychain-lanyard from PRODUCTS
# We find the object starting with id: 'keychain-lanyard' and ending with applications: [...] \n  },
content = re.sub(
    r"\s*\{\s*id:\s*'keychain-lanyard'[\s\S]*?applications:\s*\[[^\]]+\]\n\s*\},?",
    "",
    content
)

# 2. Extract and rewrite the CATEGORIES array
cat_match = re.search(r'export const CATEGORIES: Category\[\] = \[([\s\S]*?)\];', content)
if cat_match:
    cat_inner = cat_match.group(1)
    
    # Let's cleanly extract each category object.
    # They look like { ... },
    cat_objs = re.findall(r'(\{[\s\S]*?\})', cat_inner)
    
    # Filter out franchise-smart-cards and franchise-holders
    filtered_cats = []
    for cat in cat_objs:
        if "'franchise-smart-cards'" not in cat and "'franchise-holders'" not in cat:
            filtered_cats.append(cat)
            
    # Define the desired order of category IDs
    order = [
        'id-cards',
        'lanyards',
        'id-card-holders-accessories',
        'phone-skin-printing'
    ]
    
    def get_id(cat_str):
        m = re.search(r"id:\s*'([^']+)'", cat_str)
        return m.group(1) if m else ""
    
    def sort_key(cat_str):
        cid = get_id(cat_str)
        try:
            return order.index(cid)
        except ValueError:
            return len(order) + 1 # Put at the end
            
    sorted_cats = sorted(filtered_cats, key=sort_key)
    
    # Rebuild the categories string
    new_cat_inner = ",\n  ".join(sorted_cats)
    if new_cat_inner:
         new_cat_inner = "\n  " + new_cat_inner + "\n"
         
    new_cat_str = f"export const CATEGORIES: Category[] = [{new_cat_inner}];"
    
    content = content[:cat_match.start()] + new_cat_str + content[cat_match.end():]

with open('data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
