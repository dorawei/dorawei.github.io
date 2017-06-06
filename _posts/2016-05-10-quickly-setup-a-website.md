---
title: "建立網站：用 Github Pages 免費託管"
date: 2016-05-10 03:08:56 +08:00
tags:
- Web
- Domain
- Hosting
excerpt: 使用 Github Pages 建立項目或個人網站。
comments: true
layout: post
---

~~_Namecheap又在大促，.xyz域名只要0.44刀！_~~（現在沒有了。）
於是便有了這個新的域名，索性寫一篇文章好了，說不定可以對誰有所幫助。

（更新於2017年6月6日）

**解決方案：Namecheap促銷的首年域名+Github Pages**

# 免費的托管——Github Pages

介紹就不說了，簡而言之一個很好的頁面托管服務。優點是快速免費，缺點就是只能是靜態頁面。想要跑什麼只能去買VPS了。

雖然是靜態頁面，但能幹的事情還是很多的。

先進入[Github](https://github.com)去註冊一個賬戶吧。

![github-home.png](https://ooo.0o0.ooo/2016/05/09/573087a6c8718.png)

然後可以看到歡迎介面。

![github-2-welcome.png](https://ooo.0o0.ooo/2016/05/09/573098886678f.png)

在右面可以看到 New repository的按鈕。點它新建一個repository。

Repository name必須是「你的用戶名.github.io」比如我這裏就是dorawei.github.io，這個就是自己主要網站的repository了。

![github-3-create.png](https://ooo.0o0.ooo/2016/05/09/5730988864570.png)

完成後就會有如何開始的步驟。我們選「Set up in desktop」就會到客戶端的下載頁面。

![github-4.png](https://ooo.0o0.ooo/2016/05/09/5730988860685.png)

接下來，去下載一個客戶端，比如Windows版的。

![github-5-windows-dl.png](https://ooo.0o0.ooo/2016/05/09/57309888db36b.png)

安裝完用你的Github賬戶登入，按提示完成設定。（一般都是你的用戶名，郵箱地址什麼的）選一個本地用來存放各repository的位置。

![github-6-win-login.png](https://ooo.0o0.ooo/2016/05/09/57309888293ba.png)

接下來把你的「你的用戶名.github.io」克隆（clone）到你的電腦即可。

![github-7-clone.png](https://ooo.0o0.ooo/2016/05/09/5730988852f21.png)

打開你最常用的文字編輯器，寫一個index.html，放到「你的用戶名.github.io」裏，接下來就可以發佈了。

![index.png](https://ooo.0o0.ooo/2016/05/09/5730995b5dc18.png)

你需要爲這次的commit寫一個概述，描述可以省略。

![github-publish-2.png](https://ooo.0o0.ooo/2016/05/09/5730998fd9f02.png)

發佈（Publish）！

![github-publish-3.png](https://ooo.0o0.ooo/2016/05/09/573099ebae9fd.png)

OK，等其同步完成就可以去`http://你的用戶名.github.io/`查看了。

至此你的免費網站就完成了，以後每次更新就commit然後sync就可以了。

但是如果你肯多花幾十美分的話，就可以搞一個心儀的域名了。

# <strike>超</strike>便宜的域名

Namecheap經常會搞一些活動，比如最近的Star Wars活動中.xyz域名只要0.44美元，而其它也有好多0.88美元的域名，撿合適的註冊吧。結算可以用Paypal，還是很方便的。（你問一年後怎麼辦，有人推薦轉入Namesilo :P）

選擇域名。

加入購物車。

![namecheap-2-cart.png](https://ooo.0o0.ooo/2016/05/09/57309a427f9f0.png)

結算。對了，SSL證書雖然很便宜，但你用Github pages應該是安裝不了的還是別浪費錢了。

![namecheap-5-confirm.png](https://ooo.0o0.ooo/2016/05/09/57309a71b0a6a.png)

OK，可以去Dashboard設定DNS了。

如果你不想要www，那就直接加@（根域名）的A紀錄到192.30.252.153和192.30.252.154。把它已有的redirect刪掉。
然後再把www重定向（redirect）到根域名。

![namecheap-setting-1.png](https://ooo.0o0.ooo/2016/05/09/57309a9245b71.png)
![namecheap-setting-2.png](https://ooo.0o0.ooo/2016/05/09/57309ae3911cc.png)

在「你的用戶名.github.io」中添加一個名爲「CNAME」（全部大寫）的文件。裏面寫上你的域名，不要加http://或https://也不要加/。

![cname.png](https://ooo.0o0.ooo/2016/05/09/57309b2fa8249.png)

可能需要等一會才會生效，然後你就可以用自己的域名來訪問你的網站了。

![webpage-done.png](https://ooo.0o0.ooo/2016/05/09/57309b4c1c6e9.png)

#Have fun.
