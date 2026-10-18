with open("d:/taanvi demo/scripts/cust-header.css", "r", encoding="utf-8") as f:
    css = f.read()

import re

# Find header rules in first 3000 chars
print(css[:3000])
