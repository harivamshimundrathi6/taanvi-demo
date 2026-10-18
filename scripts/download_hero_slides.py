import urllib.request
import os

files = [
    ("https://cdn.shopify.com/s/files/1/0964/1073/0868/files/NAVRATRI_1.png?v=1790749616", "d:/taanvi demo/public/images/banners/hero_navratri_desktop.png"),
    ("https://cdn.shopify.com/s/files/1/0964/1073/0868/files/HERO_BANNER_mob_-_falguni.png?v=1792060051", "d:/taanvi demo/public/images/banners/hero_navratri_mobile.png"),
    ("https://cdn.shopify.com/s/files/1/0964/1073/0868/files/ISHQ_1.png?v=1790750714", "d:/taanvi demo/public/images/banners/hero_ishq_desktop.png"),
    ("https://cdn.shopify.com/s/files/1/0964/1073/0868/files/AABH_1.png?v=1790750694", "d:/taanvi demo/public/images/banners/hero_aabh_desktop.png")
]

for url, target in files:
    print(f"Downloading {url} -> {target}")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    try:
        with urllib.request.urlopen(req) as resp, open(target, 'wb') as f:
            f.write(resp.read())
        print(f"Success! {os.path.getsize(target)} bytes")
    except Exception as e:
        print(f"Failed: {e}")
