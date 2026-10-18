import urllib.request
import re

urls = ['https://www.nishorama.com/', 'https://www.nishorama.com/cdn/shop/t/231/assets/cust-header.css']
for url in urls:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https://[^\s"\'\(\)]+?\.(?:png|jpg|webp)', html)
        print(url, 'total links:', len(matches))
        for m in sorted(set(matches)):
            m_low = m.lower()
            if any(k in m_low for k in ['ishq', 'aabh', 'navratri', 'cutout', 'foreground', 'model', 'banner', 'desktop']):
                print('  ', m)
    except Exception as e:
        print('Error:', e)
