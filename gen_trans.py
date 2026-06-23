# -*- coding: utf-8 -*-
"""生成翻译映射 JSON 文件"""
import json

trans = {}
with open(r'C:\Users\Administrator\.qclaw\workspace-w3c1e6dui5lw6zik\fmhy-ch\trans_pairs.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        parts = line.split(' => ', 1)
        if len(parts) == 2:
            trans[parts[0]] = parts[1]

with open(r'C:\Users\Administrator\.qclaw\workspace-w3c1e6dui5lw6zik\fmhy-ch\trans_map.json', 'w', encoding='utf-8') as f:
    json.dump(trans, f, ensure_ascii=False, indent=2)

print(f"生成 {len(trans)} 条翻译映射")
