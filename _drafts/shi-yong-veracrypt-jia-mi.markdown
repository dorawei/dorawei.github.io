---
title: 使用 VeraCrypt 加密
date: 2016-09-21 12:40:00 +08:00
tags:
- VeraCrypt
- encryption
layout: post
---

[VeraCrypt](https://veracrypt.codeplex.com/){:target='_blank'}是一個免費開源的加密工具，是前知名加密工具 [TrueCrypt](https://en.wikipedia.org/wiki/TrueCrypt){:target='_blank'}的衍生版本。由於 TrueCrypt 以未知原因被中斷維護[^1]，越來越多的人開始尋找[替代品](http://www.howtogeek.com/203708/3-alternatives-to-the-now-defunct-truecrypt-for-your-encryption-needs/){:target='_blank'}，VeraCrypt 便是其中較受歡迎的一個。

# 下載

請前往官方[下載頁面](https://veracrypt.codeplex.com/wikipage?title=Downloads){:target='_blank'}選擇相應系統進行下載。

**注意**：Mac 用戶在安裝前必須安裝 2.3 或以上版本的 [OSXFUSE](https://osxfuse.github.io/)並**啓用 MACFuse compatibility mode**。

# 使用

## 建立加密容器[^2]

如果把你的整個磁碟（硬盤、硬碟）比作房屋、一個分區比作一個房間的話，加密容器（Encrypted file container）相當於在一個房間中放置一個具有密碼鎖保護的保險箱。需要密碼才可以存取裏面的東西。

當你運行 VeraCrypt 後，點擊位於左下的「Create Volume」，進入創建嚮導。

![Create Volume](https://ooo.0o0.ooo/2016/09/21/57e216ec12cd1.jpg)


第一個選項便是「Create an encrypted file container」（建立加密檔案容器），點擊「Next」進入下一步。

！[Create an encrypted file container](https://ooo.0o0.ooo/2016/09/21/57e217826fb9a.jpg)


這時候會出現兩個選項，第一個是「標準 VeraCrypt 加密卷」（Standard VeraCrypt volume），第二個是「隱藏 VeraCrypt 加密卷」（Hidden VeraCrypt volume）。

第一個就相當於只是一個標準的保險箱，密碼正確就可以存取裏面的內容。而二個「隱藏 VeraCrypt 加密卷」就像是在保險箱之中再藏一個小的保險箱，並使用和「表箱」不同的密碼，只有輸入和「裏箱」對應的密碼才可以存取「裏箱」之中的內容。

這種加密方式適用於被「強迫」交出密碼或打開的時候，可以在「表箱」放一些看起來是「機密」的文件以掩人耳目，而眞正的「機密」則隱藏在「裏箱」之中。

這裏我們選擇「標準 VeraCrypt 加密卷」（Standard VeraCrypt volume），「下一步」（Next）。

![standard volume](https://ooo.0o0.ooo/2016/09/21/57e21a977911b.jpg)


[^1]: 

    > The development of TrueCrypt was ended in 5/2014 after Microsoft terminated support of Windows XP.

    - [http://truecrypt.sourceforge.net/]

[^2]: [Beginner's Tutorial - VeraCrypt Documentation](https://veracrypt.codeplex.com/wikipage?title=Beginner%27s%20Tutorial){:target='_blank'}