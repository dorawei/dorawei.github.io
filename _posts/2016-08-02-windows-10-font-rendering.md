---
title: Windows 10 Font Rendering
date: 2016-08-02 15:30:00 Z
tags:
- Windows
- notes
- MacType
- Chrome
- font rendering
excerpt: Windows 的字體渲染永遠是個難題。
comments: true
layout: post
---

不久前 Chrome 穩定版更新到了 52，正式去掉了禁用 DirectWrite 的 flag 選項，這使得 MacType 變得對 Chrome 無效。

在退回 51 版的同時，了解到新的 Beta 版 MacType 以及針對 Windows 10 DirectWrite 的補丁。

那就開始折騰下吧：

首先去[這裏](http://www.su2lin.com/mactype-beta-dev_20160216-release/){:target="_blank"}下載新的 Beta 版 MacType，再去[這裏](http://silight.hatenablog.jp/entry/MacTypePatch){:target="_blank"}下載補丁，按照說明（有英文版）安裝好後，Windows 10上的渲染就會變得可以了。

測試在註冊表中的 FontSubstitutes 中將 PMingLiu、MingLiu、NSimSun、SimSun映射至 Microsoft Jhenghei 後終於可以擺脫新細明體。

但重啓後出現 MacType 失效的情況。

<figure>
	<img src="https://ooo.0o0.ooo/2016/08/02/57a0c28508a5e.png">
	<figcaption>MacType 失效</figcaption>
</figure>

選擇「註冊表加載模式」後再更改 FontSubstitutes 沒有問題（至少目前來說）。

安裝日文字體後出現異常的中日文回退。

<figure class="half">
	<img src="https://ooo.0o0.ooo/2016/08/02/57a0c2270c7f0.jpg">
	<img src="https://ooo.0o0.ooo/2016/08/02/57a0c226e4849.jpg">
	<figcaption>異常的中日文回退 Meiryo UI Bold</figcaption>
</figure>

重啓後問題消失。

<figure>
	<img src="https://ooo.0o0.ooo/2016/08/07/57a757eb196f1.png">
	<figcaption>異常的中日文回退問題消失</figcaption>
</figure>

<figure>
	<img src="https://ooo.0o0.ooo/2016/08/07/57a757ffd366c.png">
	<figcaption>目前看起來還不錯</figcaption>
</figure>

<figure>
	<img src="https://ooo.0o0.ooo/2016/08/07/57a75849bfda0.png">
	<figcaption>不再fallback到 PMingLiU了，謝天謝地</figcaption>
</figure>

導出的註冊表[下載](https://dorawei.xyz/assets/files/20160802/trail-seems good-reg.7z){:target="_blank"} 

#希望不要再突然變差

