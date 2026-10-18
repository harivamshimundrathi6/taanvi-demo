import urllib.request
import os
import json
import time

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

BASE_CDN = "https://cdn.shopify.com/s/files/1/0964/1073/0868/files/"

def download_file(filename_with_query, target_path):
    url = BASE_CDN + filename_with_query
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as response:
            data = response.read()
            if len(data) > 1000:
                with open(target_path, 'wb') as f:
                    f.write(data)
                print(f"OK ({len(data)} B): {os.path.basename(target_path)}")
                return True
            else:
                print(f"Small file ({len(data)} B): {target_path}")
                return False
    except Exception as e:
        print(f"Error {filename_with_query}: {e}")
        return False

# Categories
categories = [
    ("tops", "TOPS_a987ef69-63f5-459d-9bba-74a6e23e1050.jpg?v=1790258778"),
    ("sleeveless", "SLEEVLESS.jpg?v=1790258778"),
    ("deep-back", "KURTI_TOP.jpg?v=1790258779"),
    ("corset", "CORSET.jpg?v=1790258779"),
    ("dresses", "DRESSES.jpg?v=1790258778"),
    ("sets", "SETSjpg.jpg?v=1790258778"),
    ("short-kurti", "KURTI_TOP_1.jpg?v=1790258778"),
    ("pants", "PANTS.jpg?v=1790258779"),
    ("accessories", "ACCESSORIES.jpg?v=1790258779"),
    ("long-kurti", "LONG_KURTI.jpg?v=1790258778"),
    ("skirt", "SKIRT.jpg?v=1790258778"),
    ("bottoms", "BOTTOMS.jpg?v=1790258778")
]

print("=== DOWNLOADING CATEGORIES ===")
for slug, filename in categories:
    dest = os.path.join(r"d:\taanvi demo\public\images\categories", f"{slug}.jpg")
    download_file(filename, dest)

# Banners
banners = [
    ("main_hero", "main_bannerrr.jpg?v=1790751224"),
    ("navratri_launch", "Navratri_launch.jpg?v=1790755270"),
    ("most_wanted", "Most_Wanted.jpg?v=1790755318"),
    ("festive", "Festive.jpg?v=1790755350"),
    ("curated_tops", "Curated_Tops.jpg?v=1790755393"),
    ("curated_sets", "Curated_topss.jpg?v=1790755436")
]

print("=== DOWNLOADING BANNERS ===")
for name, filename in banners:
    dest = os.path.join(r"d:\taanvi demo\public\images\banners", f"{name}.jpg")
    download_file(filename, dest)

print("Finished downloading categories and banners!")
