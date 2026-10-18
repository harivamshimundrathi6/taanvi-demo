import urllib.request
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

BASE_CDN = "https://cdn.shopify.com/s/files/1/0964/1073/0868/files/"

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

banners = [
    ("main_hero", "main_bannerrr.jpg?v=1790751224"),
    ("navratri_launch", "Navratri_launch.jpg?v=1790755270"),
    ("most_wanted", "Most_Wanted.jpg?v=1790755318"),
    ("festive", "Festive.jpg?v=1790755350"),
    ("curated_tops", "Curated_Tops.jpg?v=1790755393"),
    ("curated_sets", "Curated_topss.jpg?v=1790755436")
]

print("Starting clean download of categories...")
for slug, filename in categories:
    url = BASE_CDN + filename
    dest = os.path.join(r"d:\taanvi demo\public\images\categories", f"{slug}.jpg")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            # Verify JPEG/PNG magic bytes
            if data[:2] == b'\xff\xd8' or data[:4] == b'\x89PNG':
                with open(dest, 'wb') as f:
                    f.write(data)
                print(f"[CAT OK] {slug}.jpg ({len(data)} bytes, valid image)")
            else:
                print(f"[CAT INVALID] {slug} received non-image data: {data[:50]}")
    except Exception as e:
        print(f"[CAT ERROR] {slug}: {e}")

print("Starting clean download of banners...")
for name, filename in banners:
    url = BASE_CDN + filename
    dest = os.path.join(r"d:\taanvi demo\public\images\banners", f"{name}.jpg")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            if data[:2] == b'\xff\xd8' or data[:4] == b'\x89PNG':
                with open(dest, 'wb') as f:
                    f.write(data)
                print(f"[BANNER OK] {name}.jpg ({len(data)} bytes, valid image)")
            else:
                print(f"[BANNER INVALID] {name} received non-image data: {data[:50]}")
    except Exception as e:
        print(f"[BANNER ERROR] {name}: {e}")

print("All downloads finished!")
