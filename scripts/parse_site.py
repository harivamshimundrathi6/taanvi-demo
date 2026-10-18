import re
import json

with open(r'C:\Users\hariv\.gemini\antigravity-ide\brain\c4a59876-94cb-417b-8dd6-69e10c11d9e1\.system_generated\steps\9\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract all sections and their contents
sections = [
    ("header", "shopify-section-sections--29613230686580__header", "shopify-section-sections--29613230686580__story_section"),
    ("story_section", "shopify-section-sections--29613230686580__story_section", "shopify-section-template--29613230948724__cust_hero"),
    ("hero_banner", "shopify-section-template--29613230948724__cust_hero", "shopify-section-template--29613230948724__cust_category"),
    ("category_circles", "shopify-section-template--29613230948724__cust_category", "shopify-section-template--29613230948724__featured_collection_Azxkk3"),
    ("featured_coll_1", "shopify-section-template--29613230948724__featured_collection_Azxkk3", "shopify-section-template--29613230948724__cust_home_banner_EzGDQ7"),
    ("home_banner_1", "shopify-section-template--29613230948724__cust_home_banner_EzGDQ7", "shopify-section-template--29613230948724__featured_collection\""),
    ("featured_coll_2", "shopify-section-template--29613230948724__featured_collection\"", "shopify-section-template--29613230948724__cust_home_banner_j3zVLW"),
    ("home_banner_2", "shopify-section-template--29613230948724__cust_home_banner_j3zVLW", "shopify-section-template--29613230948724__featured_collection_dUNUCH"),
    ("featured_coll_3", "shopify-section-template--29613230948724__featured_collection_dUNUCH", "shopify-section-template--29613230948724__cust_home_banner_8ryxar"),
    ("home_banner_3", "shopify-section-template--29613230948724__cust_home_banner_8ryxar", "shopify-section-template--29613230948724__featured_collection_9Uzpzq"),
    ("featured_coll_4", "shopify-section-template--29613230948724__featured_collection_9Uzpzq", "shopify-section-template--29613230948724__cust_home_banner_9dJE9E"),
    ("home_banner_4", "shopify-section-template--29613230948724__cust_home_banner_9dJE9E", "shopify-section-template--29613230948724__featured_collection_iG4wQe"),
    ("featured_coll_5", "shopify-section-template--29613230948724__featured_collection_iG4wQe", "shopify-section-template--29613230948724__cust_home_banner_xpjTwr"),
    ("home_banner_5", "shopify-section-template--29613230948724__cust_home_banner_xpjTwr", "shopify-section-sections--29613230653812__cust_footer_7KB8AP"),
    ("footer", "shopify-section-sections--29613230653812__cust_footer_7KB8AP", None)
]

data = {}
for name, start_tag, end_tag in sections:
    s_idx = text.find(start_tag)
    e_idx = text.find(end_tag) if end_tag else len(text)
    if s_idx != -1 and e_idx != -1:
        data[name] = text[s_idx:e_idx]
    else:
        print(f"Warning: {name} not found! ({s_idx}, {e_idx})")

# Let's extract details from each section
report = {}

# 1. Header
hdr = data.get("header", "")
# Find announcements
announcements = re.findall(r'<p[^>]*class="[^"]*announcement[^"]*"[^>]*>(.*?)</p>', hdr, re.DOTALL | re.IGNORECASE)
if not announcements:
    # search any marquee or notification
    announcements = re.findall(r'<div[^>]*class="[^"]*announcement[^"]*"[^>]*>(.*?)</div>', hdr, re.DOTALL | re.IGNORECASE)

# Menu items
menu_items = re.findall(r'<a[^>]+href="([^"]+)"[^>]*class="[^"]*header__menu-item[^"]*"[^>]*>\s*<span[^>]*>(.*?)</span>', hdr, re.DOTALL)
drawer_menu_items = re.findall(r'<a[^>]+href="([^"]+)"[^>]*class="[^"]*menu-drawer__menu-item[^"]*"[^>]*>(.*?)</a>', hdr, re.DOTALL)

report["header"] = {
    "announcements_count": len(announcements),
    "announcements_sample": [re.sub(r'<[^>]+>', '', a).strip() for a in announcements[:10]],
    "menu_items": [(href, name.strip()) for href, name in menu_items],
    "drawer_menu_items_count": len(drawer_menu_items)
}

# 2. Story Section (Insta story like circles)
story = data.get("story_section", "")
story_items = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>.*?<img[^>]+src="([^"]+)".*?<p[^>]*>(.*?)</p>', story, re.DOTALL)
if not story_items:
    story_items = re.findall(r'<img[^>]+src="([^"]+)".*?<span>(.*?)</span>', story, re.DOTALL)
report["story_section"] = {
    "count": len(story_items),
    "sample": story_items[:8]
}

# 3. Hero Banner
hero = data.get("hero_banner", "")
hero_imgs = re.findall(r'<img[^>]+src="([^"]+)"[^>]*>', hero)
hero_links = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>', hero)
report["hero_banner"] = {
    "images": hero_imgs,
    "links": hero_links
}

# 4. Category Section
cat = data.get("category_circles", "")
cat_cards = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>.*?<img[^>]+src="([^"]+)".*?<span[^>]*>(.*?)</span>', cat, re.DOTALL)
if not cat_cards:
    cat_cards = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>.*?<img[^>]+src="([^"]+)".*?<p[^>]*>(.*?)</p>', cat, re.DOTALL)
report["categories"] = cat_cards

# 5. Products in featured collections
def extract_products(html):
    # heading
    heading_match = re.search(r'<h2[^>]*class="[^"]*title[^"]*"[^>]*>(.*?)</h2>', html, re.DOTALL)
    heading = re.sub(r'<[^>]+>', '', heading_match.group(1)).strip() if heading_match else "Featured"
    
    # products
    cards = re.findall(r'<li[^>]*class="[^"]*grid__item[^"]*"[^>]*>(.*?)</li>', html, re.DOTALL)
    products = []
    for c in cards:
        # title
        t_match = re.search(r'<h3[^>]*class="[^"]*card__heading[^"]*"[^>]*>.*?<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>', c, re.DOTALL)
        # image primary & secondary
        imgs = re.findall(r'<img[^>]+src="([^"]+)"', c)
        # price
        prices = re.findall(r'(\$\d+\.?\d*|₹\s*[\d,]+|\bRs\.\s*[\d,]+)', c)
        if t_match:
            products.append({
                "url": t_match.group(1).strip(),
                "title": re.sub(r'<[^>]+>', '', t_match.group(2)).strip(),
                "images": imgs[:2],
                "prices": list(set(prices))
            })
    return {"heading": heading, "count": len(products), "products": products[:6]}

report["feat1"] = extract_products(data.get("featured_coll_1", ""))
report["feat2"] = extract_products(data.get("featured_coll_2", ""))
report["feat3"] = extract_products(data.get("featured_coll_3", ""))
report["feat4"] = extract_products(data.get("featured_coll_4", ""))
report["feat5"] = extract_products(data.get("featured_coll_5", ""))

# Banners
report["banner1"] = re.findall(r'<img[^>]+src="([^"]+)"', data.get("home_banner_1", ""))
report["banner2"] = re.findall(r'<img[^>]+src="([^"]+)"', data.get("home_banner_2", ""))
report["banner3"] = re.findall(r'<img[^>]+src="([^"]+)"', data.get("home_banner_3", ""))
report["banner4"] = re.findall(r'<img[^>]+src="([^"]+)"', data.get("home_banner_4", ""))
report["banner5"] = re.findall(r'<img[^>]+src="([^"]+)"', data.get("home_banner_5", ""))

with open(r'd:\taanvi demo\scripts\extracted_report.json', 'w', encoding='utf-8') as out:
    json.dump(report, out, indent=2)

print("Extraction done! File written to d:\\taanvi demo\\scripts\\extracted_report.json")
