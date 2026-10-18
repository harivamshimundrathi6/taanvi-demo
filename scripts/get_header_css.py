import urllib.request

url = "https://www.nishorama.com/cdn/shop/t/231/assets/cust-header.css?v=47102525373085104801787547952"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
try:
    with urllib.request.urlopen(req) as resp:
        css = resp.read().decode('utf-8', errors='ignore')
        with open("d:/taanvi demo/scripts/cust-header.css", "w", encoding="utf-8") as f:
            f.write(css)
        print("Downloaded cust-header.css, len:", len(css))
        # Look for nav-links or capsule styling
        for line in css.splitlines():
            if 'nav-links' in line or 'border-radius' in line or 'pill' in line or 'transparent' in line:
                print("CSS LINE:", line[:150])
except Exception as e:
    print("Error:", e)
