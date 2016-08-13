---
title: "免費中文 Web Font 解決方案"
date: 2016-08-13 21:58:00 +08:00
tags:
- Web Font
comments: true
excerpt: "分享一些免費的中文 Web Font 解決方案。"
layout: post
---

在 2016 年的今天，英文的 Web Font 服務已在網上遍地開花，從提供各種開源字體的免費 [Google Fonts](https://fonts.google.com/){:target="_blank"} 到各種專業字厰提供的服務，在網站中使用英文 Web Font 已經簡便到了一行`@import`CSS 代碼。

那中文 Web Font 又如何呢？

由於中文字型的檔案大小一般都在數 MB 的水平，所以不能像英文那樣可以直接載入整個 Web Font 字型檔案。幸運的是現在的動態組字（Dynamic Subsetting）技術已經可以根據網頁的內容動態產生相應的字型檔案——去除不必要的字符從而使檔案大小降低至幾百甚至幾十 KB 的水平。

但由於中文字體的開發及提供服務的成本較大，大部分的中文 Web Font 服務都是按照 PV（Page View）數來收費的。

但對像本站這樣的個人網站來說，這筆費用還是不小的。下面就和大家分享一些免費且好用的中文 Web Font 解決方案。

# FontSpider（字蛛）

托管在 Github 上的開源 Web Font 壓縮機，可以透過分析 HTML 和 CSS  檔案本地產生僅含所需字符的字型檔案。

適用於不常變動的靜態網站。

地址：<https://github.com/aui/font-spider>{:target="_blank"}

# Google Font Early Access

Google Font Early Access 中提供 cwTeX 黑體、仿宋、明體、楷體及圓體五種繁體中文 Web Font，以及思源黑體系列。但 Google Font 並不提供動態組字功能，而是壓縮的完整字型。比如思源黑體約 2.5 MB，所以可能會導致過長的轉入時間。

地址：<https://www.google.com/fonts/earlyaccess>{:target="_blank"}

# TypeSqure

由日本最大的字型廠商 Morisawa 提供的 Web Font 服務。包含 Morisawa 的日文字型及文鼎的中文字型。

免費可選一個網域和一個字型。每月一萬PV。提供動態組字功能。比如本站所用標題字體爲 TypeSqure 提供的 KaiMin Tsuki Heavy，載入這個頁面所需的字型單個檔案大小僅 18 KB。

地址：<http://typesquare.com/zh_tw/>{:target="_blank"}

# Adobe Typekit

由 Adobe 提供的 Web Font 服務。免費可選最多兩套字型。每月2.5萬PV。提供動態組字功能，比如本站所用正文字體爲 Typekit 提供的思源黑體，載入這個頁面所需的字型單個檔案大小僅 140 KB。

免費方案包含思源黑體系列和日文平成系列字體。

地址：<https://typekit.com/>{:target="_blank"}

#Enjoy.