import re

file_path = "src/data/products.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

def convert_price_match(match):
    prefix = match.group(1)
    val = float(match.group(2))
    suffix = match.group(3)
    inr_raw = int(round(val * 50))
    inr = (inr_raw // 100) * 100 - 1 if inr_raw % 100 >= 50 else (inr_raw // 100) * 100 + 49
    if inr < 999:
        inr = 999
    # chr(8377) is ₹
    return prefix + chr(8377) + f"{inr:,}" + suffix

new_content = re.sub(r'(price:\s*")\$([0-9]+(?:\.[0-9]+)?)(")', convert_price_match, content)
new_content = re.sub(r'(originalPrice:\s*")\$([0-9]+(?:\.[0-9]+)?)(")', convert_price_match, new_content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("SUCCESS")
