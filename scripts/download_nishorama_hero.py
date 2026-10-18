import urllib.request
import os

files = [
    ("https://www.nishorama.com/cdn/shop/files/NAVRATRI_1.png?v=1790749616", "d:/taanvi demo/public/images/banners/hero_navratri_desktop.png"),
    ("https://www.nishorama.com/cdn/shop/files/HERO_BANNER_mob_-_falguni.png?v=1792060051", "d:/taanvi demo/public/images/banners/hero_navratri_mobile.png"),
    ("https://www.nishorama.com/cdn/shop/files/ISHQ_1.png?v=1790750714", "d:/taanvi demo/public/images/banners/hero_ishq_desktop.png"),
    ("https://www.nishorama.com/cdn/shop/files/AABH_1.png?v=1790750694", "d:/taanvi demo/public/images/banners/hero_aabh_desktop.png")
]

opener = urllib.request.build_opener(urllib.request.HTTPRedirectHandler)
opener.addheaders = [
    ('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'),
    ('Referer', 'https://www.nishorama.com/'),
    ('Accept', 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8')
]

for url, dest in files:
    try:
        req = urllib.request.Request(url)
        with opener.open(req) as response:
            content = response.read()
            # Check if image
            if content.startswith(b'\x89PNG') or content.startswith(b'\xff\xd8') or b'JFIF' in content[:20] or content.startswith(b'RIFF'):
                with open(dest, 'wb') as f:
                    f.write(content)
                print(f"Downloaded valid image {dest}: {len(content)} bytes")
            else:
                print(f"Non-image response for {url}: {content[:150]}")
    except Exception as e:
        print(f"Failed {url}: {e}")
