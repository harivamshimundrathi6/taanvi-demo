with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find linked CSS files
css_files = set(re.findall(r'href=[\'"]([^\'"]+?\.css[^\'"]*)[\'"]', html))
for c in sorted(css_files):
    if 'header' in c.lower() or 'cust' in c.lower():
        print(c)
