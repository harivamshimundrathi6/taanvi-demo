import re
import json

with open(r'C:\Users\hariv\.gemini\antigravity-ide\brain\c4a59876-94cb-417b-8dd6-69e10c11d9e1\.system_generated\steps\9\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract all unique products from the document
# Patterns:
# <h3 class="card__heading ..."><a href="/products/..." ...>Title</a></h3>
# Product card has images, prices, titles, badges

product_matches = re.findall(
    r'<li[^>]*class="[^"]*grid__item[^"]*"[^>]*>(.*?)</li>',
    text,
    re.DOTALL
)

print(f"Total product cards found in markup: {len(product_matches)}")

products_by_id = {}

for card in product_matches:
    # URL and Title
    url_match = re.search(r'href="(/products/[^"?#]+)"', card)
    if not url_match:
        continue
    url = url_match.group(1)
    slug = url.replace('/products/', '')
    
    # Title
    title_match = re.search(r'<h3[^>]*class="[^"]*card__heading[^"]*"[^>]*>.*?<a[^>]*>(.*?)</a>', card, re.DOTALL)
    title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip() if title_match else slug.replace('-', ' ').title()
    
    # Images
    images = re.findall(r'<img[^>]+src="([^"]+)"', card)
    # clean protocol relative URLs
    cleaned_imgs = []
    for img in images:
        if 'cdn/shop/files' in img or 'cdn.shopify.com' in img:
            full = "https:" + img if img.startswith('//') else img
            # remove width parameter if any for full res or keep width=700
            full = re.sub(r'&width=\d+', '&width=800', full)
            if full not in cleaned_imgs:
                cleaned_imgs.append(full)
    
    # Prices
    price_matches = re.findall(r'(\$\d+\.?\d*|₹\s*[\d,]+|\bRs\.\s*[\d,]+)', card)
    # Filter out $0.00
    valid_prices = [p for p in price_matches if p not in ('$0.00', '$0', '₹0', '₹ 0')]
    price = valid_prices[0] if valid_prices else "$45.00"
    
    # Badges (like Sold Out, New In, etc)
    badge = None
    if "sold out" in card.lower() or "badge--sold-out" in card:
        badge = "Sold Out"
    elif "sale" in card.lower():
        badge = "Sale"
    elif "new in" in card.lower():
        badge = "New In"
    
    # Category / Type inference
    category = "Kurtis"
    lower_t = (title + " " + slug).lower()
    if "pant" in lower_t or "bottom" in lower_t:
        category = "Bottoms"
    elif "top" in lower_t or "halter" in lower_t or "bralette" in lower_t:
        category = "Tops"
    elif "dress" in lower_t:
        category = "Dresses"
    elif "set" in lower_t or "co-ord" in lower_t:
        category = "Sets"
    elif "skirt" in lower_t:
        category = "Bottoms"
    elif "men" in lower_t or "kurta" in lower_t:
        category = "Nisho Men"
    
    if slug not in products_by_id:
        products_by_id[slug] = {
            "id": slug,
            "slug": slug,
            "title": title,
            "category": category,
            "price": price,
            "originalPrice": f"${int(float(price.replace('$', '')) * 1.25)}.00" if price.startswith('$') else None,
            "images": cleaned_imgs[:4],
            "badge": badge,
            "inStock": badge != "Sold Out",
            "colors": ["Ivory", "Black", "Rust", "Indigo"] if "dabu" in slug or "corset" in slug else ["Classic"],
            "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
            "description": f"Bold and raw ethnic elegance. The {title} features our signature handcrafted detailing, premium breathable fabric, and flattering structure crafted to perfection.",
            "details": [
                "Handcrafted luxury finish",
                "Pure breathable cotton / jacquard blend",
                "Structured silhouette with custom boning",
                "Dry clean or gentle hand wash separately"
            ]
        }

print(f"Unique products extracted: {len(products_by_id)}")

# Save to ts data file
with open(r'd:\taanvi demo\scripts\products_data.json', 'w', encoding='utf-8') as f_out:
    json.dump(list(products_by_id.values()), f_out, indent=2)

print("Exported products_data.json successfully!")
