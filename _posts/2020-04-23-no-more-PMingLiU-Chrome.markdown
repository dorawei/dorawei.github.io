---
title: 不要再回退到新細明體了—Chrome 字體設定
date: 2020-04-23 18:41:00 +08:00
tags:
- 字體
- Windows
- Chro
comments: true
---

在顯示語言設定爲英文時，中文到底是回退到新細明體還是明瞭體或微軟正黑體似乎是一個有點玄學的問題，不過多次實驗之後發現其實也有規律可循。

明明之前會按照日文（目測 Meiryo）再中文字體（目測 MS Jhenghei）的順序回退的 Windows 上的 Chrome 突然有一天就開始把全部漢字回退到新細明體，於是便出現了 Arial 的英文加新細明體漢字和 Meiryo 的假名混在一起的詭異畫面。

# Chrome UI 語言設定

後來發現 Chrome 的字體回退機制似乎由設定中的語言順序來決定，爲了防止回退到新細明體，在顯示語言設定爲英文的前提下，可以將日文調整至中文之前，即——英文>日文>中文。

# 自定義字體

安裝 Advanced Font Settings 之後可以按語言設定字體，包括 Sans 和 Serif 及等寬字體等。推薦將日文和簡繁中文設定爲同一系列字體以統一顯示風格，如思源和其衍生系列。現在 Sans 部分全部設定爲了 [Glow Sans](https://github.com/welai/glow-sans){:target="_blank"}

語言列表中的簡繁中文分別爲 Simplified Han 和 Traditional Han。

# Google 和其他網站

Google 會根據你當前所在地區來貼心的調整字體顯示（回退），如果使用日本 IP 話就算設定爲中文貌似也會先用 Meiryo 體再回退到正黑，就算有些違和感但起碼也都是 Sans Serif。但如果 IP 爲中文地區則會悲慘地全部回退到新細明體，如果顯示語言也是中文的話中文或日文的結果頁面會美不勝收 = =

除了 Google 外有些網站甚至會把“新細明體”寫到它們的 CSS 裏面……這時候就需要用擴充去覆蓋網頁的 CSS 設定了。一直用的 [Stylebot](https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha?hl=en){:target="_blank"}感覺還很方便，可以直接選取頁面上的元素然後編輯樣式。

比如針對貼心的 Google 就在使用時把發現所有出現新細明體的地方全都選出來，再換上[Glow Sans](https://github.com/welai/glow-sans){:target="_blank"}之後終於清爽了。

[這是](https://img.dorawei.xyz/20200423-no-more-PMingLiU-Chrome/stylebot-google-bak.txt){:target="_blank"}一份截至今天給 Google 添加的替換字體 CSS 的備份，但因爲 Google 很多地方都用一些類似隨機生成的 ID 等，可能之後會失效也說不定。

# 最後
NSimSun 都比 PMingLiU 好看∎