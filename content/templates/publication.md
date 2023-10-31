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
# 必选，string 类型，图片**名字**。不用填写路径，对应的图片应当放置在 /public/images/publication 目录下。也可以使用以 http 开头的完整绝对路径。
image: image.jpg
# 以下四个字段均为可选，string 类型，指定了论文的链接、视频、代码和网站，如果没有则不显示。
paper: https://google.com
video: https://google.com
code: https://google.com
website: https://google.com
---