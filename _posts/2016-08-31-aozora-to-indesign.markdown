---
title: 青空文庫作品導入 InDesign
date: 2016-08-31 11:20:00 +08:00
tags:
- 青空文庫
- InDesign
comments: true
excerpt: 將「青空文庫」中的作品導入 InDesign 並保留假名標音（ふりがな）
layout: post
---

[青空文庫](http://www.aozora.gr.jp/){:target="_blank"}中有大量的日文公版書。可以直接在線閱讀或使用其 Web App 獲得不錯的閱讀體驗，但如果想要自己編輯可能就會有些麻煩。這裏記錄一下將其導入 InDesign 中的方法。

以《鼻》爲例。首先找到其「図書カード」頁面，一般在文章底部，或使用 Google 檢索。

在「ファイルのダウンロード」部分下載第一個「テキストファイル(ルビあり)」。

需要注意的是壓縮包中 txt 文檔是 Shift-JIS 編碼的，所以使用內建的文字編輯器打開可能會無法正常顯示。

這裏使用的是 Windwos 上的 Notepad++。

![1.png](https://ooo.0o0.ooo/2016/08/31/57c656a22455b.png)

可以看到裏面有特別標記的「假名標示」（ふりがな、ルビ、Ruby）。

使用下面的正則表達式將「假名標示」替換爲 Adobe InDesign 的標記格式：

查找 `｜?([一-龠]+)《(.+?)》` 替換爲 `<cr:1><crstr:\2>\1<cr:><crstr:>`

![2.png](https://ooo.0o0.ooo/2016/08/31/57c656a1bbfd4.png)

像這樣：

![3.png](https://ooo.0o0.ooo/2016/08/31/57c656a22ddb5.png)

有些文章會有「外字」，可以使用[這個](http://www.kabipan.com/computer/mobi/aozora_kanji.html){:target="_blank"}工具進行變換。

或者使用正則表達式查找 `※［＃(.+?)、第(.)水準(.)-(.+?)-(.+?)］` 替換爲 `<\3-\4-\5>`。這樣就只留下 JIS 的文字碼。

所以畢竟一篇文章不會有很多外字，自己手動查找並參照字碼表替換也可以。參考下面的文字碼表：

[JIS X 0213漢字一覧](https://ja.wikipedia.org/wiki/JIS_X_0213%E6%BC%A2%E5%AD%97%E4%B8%80%E8%A6%A7%E3%81%AE1%E9%9D%A2){:target="_blank"}

[JIS第4水準漢字一覧表](http://www13.plala.or.jp/bigdata/jis_4.html){:target="_blank"}

[JISX0213 InfoCenter](http://www.jca.apc.org/~earthian/aozora/0213.html){:target="_blank"}

最後，在文本最上方加入編碼和平台：
`<SJIS-WIN>` 或 `<SJIS-MAC>`

![4.png](https://ooo.0o0.ooo/2016/08/31/57c656a2542a2.png)

（如果最上面的編碼和平台和實際的檔案不對應的話，就可能導致 InDesign 無法正確置入。）

這樣就可以在 InDesin 中置入文字了。

![5.png](https://ooo.0o0.ooo/2016/08/31/57c656a1c2bf3.png)

或者直接使用[這個腳本](http://sysys.blog.shinobi.jp/Entry/34/){:target="_blank"}（[備用下載](https://asset.dorawei.xyz/20160831-aozora-to-indesign/ruby.zip){:target="_blank"}） :P

#Enjoy.