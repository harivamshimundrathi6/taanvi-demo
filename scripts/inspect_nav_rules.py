with open("d:/taanvi demo/scripts/cust-header.css", "r", encoding="utf-8") as f:
    css = f.read()

import re

# find .nav-links rules
for m in re.finditer(r'(\.nav-links[^{]*\{[^}]*\})', css):
    print("Match:", m.group(1))

for m in re.finditer(r'(\.cust-header-[^{]*\{[^}]*\})', css):
    print("Header rule:", m.group(1)[:120])
