---
# Picture 模板，展示在 Gallery 页面下。
# 文件名不应当重复。

# 必选，图片标题。
title: 图片标题
# 可选，图片副标题
subtitle: 图片副标题
description: 图片描述，支持 markdown。
# 必选，string 类型，图片**名字**。不用填写路径，对应的图片应当放置在 /public/images/gallery 目录下。也可以使用以 http 开头的完整绝对路径。
image: image.jpg
# 可选，string 类型，格式为 YYYY-MM-DD HH:MM:SS，指定了图片的时间，会在 Gallery 中从新到旧排序。如果没有，则默认 parse 文件名中的日期。该字段的优先级高于文件名中的日期。
date: 2022-03-05 12:00:00

---