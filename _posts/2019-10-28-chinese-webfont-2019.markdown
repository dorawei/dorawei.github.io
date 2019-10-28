---
title: 中文 Web Font in 2019 — 進化的 Google Fonts 和全新的 Adobe Fonts
date: 2019-10-28 15:29:00 +08:00
tags:
- Web Font
- Web
- Adobe
- Google Fonts
comments:
- true
excerpt: Google Fonts 爲中文引入切片字體，Typekit 更名爲 Adobe Fonts。中文網頁使用 Web Font 比起3年前變得更加簡單，選擇也更加豐富。
---

# Google Fonts 和中文切片字體

三年前寫這篇[免費中文 Web Font 解決方案](https://dorawei.xyz/free-chinese-web-font/){:target="_blank"}時 Google Fonts 還在提供整個的字體檔案：
>但 Google Font 並不提供動態組字功能，而是壓縮的完整字型。比如思源黑體約 2.5 MB，所以可能會導致過長的轉入時間。

但是自 2017 年開始，Google Fonts [提出了](https://twitter.com/googlefonts/status/900374191576293376?lang=en){:target="_blank"}切片字體來提升中日韓網絡字體的載入速度，並在 Early Access 中釋出了第一款中文切片字體——Noto Sans SC（思源黑體），如今思源黑體的所有版本都已經從 Early Access 中畢業，可以在 [Google Fonts](https://fonts.google.com){:target="_blank"} 中選用。

## 切片字體的工作原理

在[這篇文章](https://developers.googleblog.com/2018/09/google-fonts-launches-japanese-support.html){:target="_blank"}中，Google Fonts 團隊介紹了日文切片字體如何實現更快的加載速度。

中日韓字體的相同特性是字體中要包含大量的字符，一個標準的日文字體要包含9,354個文字（7,014個漢字），繁體中文常用的 [Big5 編碼](https://zh.wikipedia.org/wiki/大五碼){:target="_blank"}（大五碼）包含13,060個漢字，而泛中日韓（Pan-CJK）字體中最有名的[思源黑體](https://blog.typekit.com/alternate/source-han-sans-cht/){:target="_blank"}總共有65,535個字符，每個字體檔案更是高達15～20MB。

但我們日常使用時並不會用到這麼多字！Google Fonts 的團隊通過機器學習對數百萬的網頁內容進行分析，統計不同漢字在網頁上出現的頻率。比如日文字體，他們將最常用的3,000個字符分割成20個切片，再將剩餘字符分割，最終得到100個左右的切片。藉助現代瀏覽器的 HTTP/2 技術，可以同時傳輸多個資源，大大節省了下載字體的時間。而 CSS 中的 unicode-range 則可以確保只有網頁上出現這個文字時才下載對應的字體切片。這樣就可以不用因爲幾乎永遠都用不到的生僻字去下載過多的字體檔案了。Google Fonts 說使用切片後日文字體用戶可以比以前少下載80%的檔案。

下圖是關於日文和韓文字數和頻率的圖表，來自[ Google Developers Blog](https://developers.googleblog.com/2018/09/google-fonts-launches-japanese-support.html){:target="_blank"}

![日文和韓文字數和頻率的圖表](https://i.loli.net/2019/10/27/idSJlpknm5s8boU.png)

## 切片字體的限制

但並不是所有的瀏覽器都支援切片網絡字體，爲了更好的壓縮字體檔案，Google Fonts 只提供 woff2 格式，如果用戶使用 IE 瀏覽器的話就會因爲不支援而回退到系統字體。好在那些瀏覽器的使用量只有[不到5%](https://caniuse.com/#feat=woff2){:target="_blank"}。

## 2019年 Google Fonts 中的切片字體
~~9102~~2019年的今天，[Google Fonts](https://fonts.google.com){:target="_blank"} 中已經有了數量可觀的中文字體，比如思源黑體和思源宋體的簡體和繁體版本的全部字重都可以直接使用。（香港版本只有思源黑體提供）

簡體中文中更是收錄了多種風格的免費字體，雖然質量可能堪憂= =

之前在 Early Access 中的 cwTexQ 系列字體已經找不到了，可能被下線了。

日文中的字體相比繁體中文的思源要豐富一些，但由於字符集較小直接使用可能會導致某些字缺字（比如「你」「啊」等）。

# Typekit 更新爲 Adobe Fonts

2018年10月，Typekit宣佈更名爲 [Adobe Fonts](https://fonts.adobe.com/){:target="_blank"}，同時去除了更多的限制，使得免費用戶也可以更好的使用 Web Fonts。

Adobe Fonts 不再有字體數量和PV限制，即便是免費用戶也可以無限制使用包括思源黑體和思源宋體全版本在內的網絡字體服務。

同時如果加入 Creative Cloud 計劃便可以使用所有付費字體。Adobe Fonts 中收錄了豐富的日文字體和更豐富的英文字體。當然直接使用日文字體可能會導致某些字缺字（比如「你」「啊」等）。

## 貂明朝

免費提供的字體在之前更新了[貂明朝](https://fonts.adobe.com/){:target="_blank"}，深受廣大設計師喜愛。而且較粗的橫畫在網頁上也會有出色的顯示效果。（但是要注意缺字）

![貂明朝字體樣例](https://i.loli.net/2019/10/27/W8z9tMl1A5ovKX3.png)

## CJK 版本的思源字體

中文字體新加入了 CJK 版本的思源黑體和思源宋體，適合會同時出現簡繁中文的網頁。之前的各地區子集版不會包含其他子集的字符，比如使用 TW 版則不能正常顯示簡化字。

但同時 CJK 版本的字體保留了 locl 特性，可以根據網頁設定而顯示對應地區的字形。

比如選用了 KR 版本的思源字體時，在以下情形會出現不同的顯示效果。

- 網頁設定語言時會按照網頁設定顯示，比如網頁中有 `<html lang="zh-HK">`，這時會顯示香港字形。
- 網頁沒有設定時會按照用戶瀏覽器或系統設定顯示，

   當瀏覽器或系統語言地區不是中日韓時，會顯示 KR 字形。

   當瀏覽器或系統語言為中日韓時，會顯示對應字形，如使用設定爲日文的手機查看網頁時，會顯示爲 JP 字形。但使用設定為簡體中文 (zh-CN) 的用戶會看到 CN 字形。

這樣對於適配各地區標準可謂相當便利。
但同時也會導致很多用戶看到的不是自己想要的字形效果…</br>（╯' - ')╯︵ ┻━┻

# Google Fonts 的 Noto CJK 還是 Adobe Fonts 的思源？

Google 和 Adobe 同時提供思源黑體和宋體（Google Fonts 上叫做 Noto 系列），該選哪個用呢？

## 字體載入體驗兩家相近

在 Google Fonts 推出切片字體之前，Adobe Fonts (Typekit) 的動態組字功能絕對是最好的選擇，動態組字會生成只包含當前網頁用到的字的字體，KB 級別的加載搖搖領先當時 MB 級別的 Google Fonts。

但現在 Google Fonts 利用字體切片同樣可以實現快速加載，值得一提的是 Google Fonts 是在中國大陸可以正常使用的少數 Google 服務之一，由於來自中國大陸的請求會被解析到北京，所以 Google Fonts 在中國的的載入速度甚至遠遠快過 Adobe Fonts。

## Google Fonts 目前只提供地區字集

Google Fonts 的中文切片字體目前貌似沒有真正的泛中日韓版本，簡體中文版可能會包含繁體中文，但由於沒有像 Adobe Fonts 那樣保留 locl 功能，無論設定如何都只會顯示 CN 標準的字形。

而思源黑體的 HK 和 TW 版本雖然在 CSS 中保留了簡化字的 unicode-range，但實際上還是缺失很多簡化字，目測他們用來生成切片的源字體就是非完整版本。

## Adobe Fonts 使用之前需要建立帳號並登入

Google Fonts 的字體使用是只需加入一行 CSS 連結即可，但 Adobe Fonts 需要首先建立並登入方可使用。且 Adobe Fonts 是通過 JavaScript 進行字體加載的。在網絡環境較差的情形下可能會比 CSS 耗費更多時間。

## 結論
綜上，如果只是使用單一地區子集，可以直接在 Google Fonts 獲取 CSS，加入自己的網頁即可方便使用。

如果需要更多的字符支援，目前只有 Adobe Fonts 可以實現。

但是兩家的服務還是存在一些限制，也許最好的解決方案是自己來做切片字體（笑）。