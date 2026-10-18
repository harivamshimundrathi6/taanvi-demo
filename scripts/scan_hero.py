with open('scripts/row_nishorama.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
matches = set(re.findall(r'//cdn\.shopify\.com/s/files/[^"\'<>\s]+', text))
for m in sorted(matches):
    m_low = m.lower()
    if any(k in m_low for k in ['ishq', 'aabh', 'navratri', 'falguni', 'slide', 'hero', 'banner']):
        print(m)
