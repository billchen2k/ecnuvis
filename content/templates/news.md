---
# news 模板
# 文件名格式：YYYYMMDD_slug.md。其中，每年的新闻中 slug 不应当重复。如果新闻有内容，该 slug 和新闻的年份将作为新闻详情的 url（如 /news/2023/slug）
#
# 必选，string 类型。主要标题。展示在 / 之前。
title: 新闻标题
# 可选，string 类型。次要标题，通常为翻译，展示在 / 之后。
titleAlt: News Title in English
# 可选，string 类型，描述文字，展示在新闻内容之下。
description: 描述文字
# 可选，string 类型，次要描述文字，通常为英文翻译，展示在描述文字之下。
descriptionAlt: Description in English
# 可选，string 类型，新闻的日期。格式为 YYYY-MM-DD HH:MM:SS，指定了新闻的时间。如果没有，则默认 parse
date: 2022-03-05 12:00:00
---
<!-- 可选，新闻内容。若有，则该新闻可点击。 -->