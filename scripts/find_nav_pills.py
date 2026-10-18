with open('d:/taanvi demo/scripts/row_nishorama.html', 'r', encoding='utf-8') as f:
    html = f.read()

import re

# find .nav-links in html
for m in re.finditer(r'\.nav-links\s*\{[^}]*\}', html):
    print("Found .nav-links:", m.group(0))

for m in re.finditer(r'\.nav-links\s+li[^{]*\{[^}]*\}', html):
    print("Found .nav-links li:", m.group(0))

for m in re.finditer(r'\.nav-links\s+a[^{]*\{[^}]*\}', html):
    print("Found .nav-links a:", m.group(0))
