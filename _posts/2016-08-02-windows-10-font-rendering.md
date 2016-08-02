---
title: "Windows 10 字體渲染"
date: 2016-08-02 15:30:00 Z
layout: post
tags:
- Windows
- notes
- MacType
- Chrome
- font rendering
excerpt: Windows 的字體渲染永遠是個難題。
comments: true
---
不久前 Chrome 穩定版更新到了 52，正式去掉了禁用 DirectWrite 的 flag 選項，這使得 MacType 變得對 Chrome 無效。

在退回 51 版的同時，了解到新的 Beta 版 MacType 以及針對 Windows 10 DirectWrite 的補丁。

那就開始折騰下吧：

首先去[這裏](http://www.su2lin.com/mactype-beta-dev_20160216-release/)下載新的 Beta 版 MacType，再去[這裏](http://silight.hatenablog.jp/entry/MacTypePatch)下載補丁，按照說明（有英文版）安裝好後，Windows 10上的渲染就會變得可以了。

測試在註冊表中的 FontSubstitutes 中將 PMingLiu、MingLiu、NSimSun、SimSun映射至 Microsoft Jhenghei 後終於可以擺脫新細明體。

但重啓後出現 MacType 失效的情況。

![MacType 失效](https://ooo.0o0.ooo/2016/08/02/57a0c28508a5e.png)

選擇「註冊表加載模式」後再更改 FontSubstitutes 沒有問題（至少目前來說）。

安裝日文字體後出現異常的中日文回退。

![異常的中日文回退 Meiryo UI Bold](https://ooo.0o0.ooo/2016/08/02/57a0c2270c7f0.jpg)
![異常的中日文回退 Meiryo UI Bold](https://ooo.0o0.ooo/2016/08/02/57a0c226e4849.jpg)

重啓後問題消失。

![異常的中日文回退問題消失](https://ooo.0o0.ooo/2016/08/02/57a0c2b092388.png)

目前看起來都還不錯。

![目前看起來還不錯](https://ooo.0o0.ooo/2016/08/02/57a0c2e450a1c.png)

![不再fallback到 PMingLiU了，謝天謝地](https://ooo.0o0.ooo/2016/08/02/57a0c31352a8b.png)

導出的註冊表[下載](https://dorawei.xyz/assets/files/20160802/trail-seems good-reg.7z)

#希望不要再突然變差

