# -*- coding: utf-8 -*-
"""FMHY reading.md 翻译脚本 - 读取翻译对文件，应用到源文件"""
import json, sys

# 读取翻译映射
with open(r'C:\Users\Administrator\.qclaw\workspace-w3c1e6dui5lw6zik\fmhy-ch\trans_map.json', 'r', encoding='utf-8') as f:
    trans = json.load(f)

# 按长度降序排列（长词组优先匹配）
keys_sorted = sorted(trans.keys(), key=len, reverse=True)

# 读取源文件
with open(r'C:\Users\Administrator\.qclaw\workspace-w3c1e6dui5lw6zik\fmhy-ch\docs\reading.md', 'r', encoding='utf-8') as f:
    content = f.read()

# 逐个替换
for eng in keys_sorted:
    chn = trans[eng]
    content = content.replace(eng, chn)

# 写回
with open(r'C:\Users\Administrator\.qclaw\workspace-w3c1e6dui5lw6zik\fmhy-ch\docs\reading.md', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"翻译完成！")
