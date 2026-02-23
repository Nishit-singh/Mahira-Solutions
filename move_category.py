import re

with open('data.ts', 'r') as f:
    content = f.read()

cat_match = re.search(r'export const CATEGORIES: Category\[\] = \[([\s\S]*?)\];', content)
if cat_match:
    cat_inner = cat_match.group(1)
    
    # Extract each category object
    cat_objs = re.findall(r'(\{[\s\S]*?\})', cat_inner)
    
    # Find the requested category and remove it from the list
    personal_cat = next((c for c in cat_objs if "'personalized-merchandise-gift-products'" in c), None)
    
    if personal_cat:
        cat_objs.remove(personal_cat)
        
        # Find index of 'id-card-holders-accessories'
        insert_idx = next(i for i, c in enumerate(cat_objs) if "'id-card-holders-accessories'" in c) + 1
        
        # Insert
        cat_objs.insert(insert_idx, personal_cat)
        
        # Rebuild
        new_cat_inner = ",\n  ".join(cat_objs)
        if new_cat_inner:
             new_cat_inner = "\n  " + new_cat_inner + ",\n"
             
        new_cat_str = f"export const CATEGORIES: Category[] = [{new_cat_inner}];"
        
        content = content[:cat_match.start()] + new_cat_str + content[cat_match.end():]
        
        with open('data.ts', 'w') as f:
            f.write(content)
        
        print("Updated categories order in data.ts")
    else:
        print("Could not find personalized merchandise category to move.")
else:
    print("Could not find CATEGORIES block.")
