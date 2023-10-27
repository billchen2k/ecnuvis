---
# Publication 模板。
# 文件名格式：YYYYMMDD_slug.md。整个文件名将会作为该论文的 ID，用于在 URL 的 # 之后。例如 230505_gvqa.md 将会具有 URL /publication#230505_gvqa。
# 必选，论文标题
title: Title of the Paper
# 必选，string[] 类型，按先后顺序指定了论文的作者。
authors:
  - "Author 1"
  - "Author 2"
  - "@authorid"
# 可选，string 类型，格式为 YYYY-MM-DD HH:MM:SS，指定了论文的时间，会在论文列表从新到旧排序。如果没有，则默认 parse 文件名中的日期。该字段的优先级高于文件名中的日期。
date: 2022-03-05 12:00:00
# 必选，string 类型。主要标题。展示在 / 之前。
name: 姓名
# 可选，string 类型，通常为英文翻译。若有，则会和 name 一起展示，展示在 / 之后。
nameAlt: 次要姓名，通常为英文翻译
# 必选，string 类型，图片**名字**。不用填写路径，对应的图片应当放置在 /public/images/people 目录下，否则会找不到。
image: image.jpg
# 必选，enum 类型：'phd' | 'master' | 'undergraduate' | 'visiting' | 'staff' | 'alumni'
category: phd
# 可选，number 类型，年级。
grade: 2022
# 可选，string 类型，文字描述，会展示在名字的下方。如果不填写。则会默认填入 Master Student、PhD Student 等默认描述。
description: 描述文本。
# 下面四个字段都是可选的 string 类型。若填写，则会在描述下方用对应的 icon 展示相应链接。
github: https://github.com/username
homepage: https://example.com
email: example@live.com
---