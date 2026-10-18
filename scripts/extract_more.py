import re
import json

with open(r'C:\Users\hariv\.gemini\antigravity-ide\brain\c4a59876-94cb-417b-8dd6-69e10c11d9e1\.system_generated\steps\9\content.md', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect category circles
cat_idx = text.find('shopify-section-template--29613230948724__cust_category')
cat_end = text.find('shopify-section-template--29613230948724__featured_collection_Azxkk3')
cat_html = text[cat_idx:cat_end]

# Inspect stories
story_idx = text.find('shopify-section-sections--29613230686580__story_section')
story_end = text.find('shopify-section-template--29613230948724__cust_hero')
story_html = text[story_idx:story_end]

# Inspect footer
footer_idx = text.find('shopify-section-sections--29613230653812__cust_footer_7KB8AP')
footer_html = text[footer_idx:]

with open(r'd:\taanvi demo\scripts\cat_and_footer.txt', 'w', encoding='utf-8') as f_out:
    f_out.write("=== CATEGORY CIRCLES HTML ===\n" + cat_html + "\n\n")
    f_out.write("=== STORY HTML ===\n" + story_html + "\n\n")
    f_out.write("=== FOOTER HTML ===\n" + footer_html[:15000] + "\n\n")

print("Written cat_and_footer.txt successfully!")
