---
# People 模板。
# 文件名应该不重复，将会被作为该人员的一个独特 ID。这个 ID 会用于在 Publication 页面链接到对应人员。推荐使用年级后两位 + 姓名全拼的方式，如 22zhangsan.md。

# 必选，string 类型。主要标题。展示在 / 之前。
name: 姓名
# 可选，string 类型，通常为英文翻译。若有，则会和 name 一起展示，展示在 / 之后。
nameAlt: 次要姓名，通常为英文翻译
# 必选，string 类型，图片**名字**。不用填写路径，对应的图片应当放置在 /public/images/people 目录下。也可以使用以 http 开头的完整绝对路径。
image: image.jpg
# 必选，enum 类型：'phd' | 'master' | 'undergraduate' | 'visiting' | 'staff' | 'alumni'
category: phd
# 可选，number 类型，年级。
year: 2022
# 可选，string 类型，文字描述，会展示在名字的下方。如果不填写。则会默认填入 Master Student、PhD Student 等默认描述。
description: 描述文本。
# 下面四个字段都是可选的 string 类型。若填写，则会在描述下方用对应的 icon 展示相应链接。
github: https://github.com/username
homepage: https://example.com
email: example@live.com
---