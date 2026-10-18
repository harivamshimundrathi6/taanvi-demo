import urllib.request
import os
import json
import time

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://row.nishorama.com/'
}

def download_file(url, target_path):
    if os.path.exists(target_path) and os.path.getsize(target_path) > 1000:
        print(f"Already exists: {target_path}")
        return True
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            data = response.read()
            if len(data) > 500:
                with open(target_path, 'wb') as f:
                    f.write(data)
                print(f"Downloaded ({len(data)} bytes): {target_path}")
                return True
            else:
                print(f"File too small ({len(data)} bytes) for {url}")
                return False
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

# 1. Category Images
categories = [
    ("tops", "https://row.nishorama.com/cdn/shop/files/TOPS_a987ef69-63f5-459d-9bba-74a6e23e1050.jpg?v=1790258778&width=600"),
    ("sleeveless", "https://row.nishorama.com/cdn/shop/files/SLEEVLESS.jpg?v=1790258778&width=600"),
    ("deep-back", "https://row.nishorama.com/cdn/shop/files/KURTI_TOP.jpg?v=1790258779&width=600"),
    ("corset", "https://row.nishorama.com/cdn/shop/files/CORSET.jpg?v=1790258779&width=600"),
    ("dresses", "https://row.nishorama.com/cdn/shop/files/DRESSES.jpg?v=1790258778&width=600"),
    ("sets", "https://row.nishorama.com/cdn/shop/files/SETSjpg.jpg?v=1790258778&width=600"),
    ("short-kurti", "https://row.nishorama.com/cdn/shop/files/KURTI_TOP_1.jpg?v=1790258778&width=600"),
    ("pants", "https://row.nishorama.com/cdn/shop/files/PANTS.jpg?v=1790258779&width=600"),
    ("accessories", "https://row.nishorama.com/cdn/shop/files/ACCESSORIES.jpg?v=1790258779&width=600"),
    ("long-kurti", "https://row.nishorama.com/cdn/shop/files/LONG_KURTI.jpg?v=1790258778&width=600"),
    ("skirt", "https://row.nishorama.com/cdn/shop/files/SKIRT.jpg?v=1790258778&width=600"),
    ("bottoms", "https://row.nishorama.com/cdn/shop/files/BOTTOMS.jpg?v=1790258778&width=600")
]

print("--- DOWNLOADING CATEGORY IMAGES ---")
for slug, url in categories:
    dest = os.path.join(r"d:\taanvi demo\public\images\categories", f"{slug}.jpg")
    download_file(url, dest)

# 2. Hero Banners
banners = [
    ("main_hero", "https://row.nishorama.com/cdn/shop/files/main_bannerrr.jpg?v=1790751224"),
    ("navratri_launch", "https://row.nishorama.com/cdn/shop/files/Navratri_launch.jpg?v=1790755270"),
    ("most_wanted", "https://row.nishorama.com/cdn/shop/files/Most_Wanted.jpg?v=1790755318"),
    ("festive", "https://row.nishorama.com/cdn/shop/files/Festive.jpg?v=1790755350"),
    ("curated_tops", "https://row.nishorama.com/cdn/shop/files/Curated_Tops.jpg?v=1790755393"),
    ("curated_sets", "https://row.nishorama.com/cdn/shop/files/Curated_topss.jpg?v=1790755436")
]

print("--- DOWNLOADING BANNERS ---")
for name, url in banners:
    dest = os.path.join(r"d:\taanvi demo\public\images\banners", f"{name}.jpg")
    download_file(url, dest)

# 3. Product images in products.ts
with open(r"d:\taanvi demo\scripts\products_data.json", "r", encoding="utf-8") as f:
    products = json.load(f)

print("--- DOWNLOADING PRODUCT IMAGES ---")
for p in products:
    p_id = p["id"]
    for idx, img_url in enumerate(p["images"]):
        dest = os.path.join(r"d:\taanvi demo\public\images\products", f"{p_id}_{idx}.jpg")
        download_file(img_url, dest)

print("All asset downloads completed!")
