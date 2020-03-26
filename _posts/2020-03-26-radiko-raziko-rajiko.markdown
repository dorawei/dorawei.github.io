---
title: 解鎖 radiko — 用 raziko 和 rajiko 隨時隨地聽廣播
date: 2020-03-26 20:16:00 +08:00
tags:
- radiko
- 電台
- Radio
- 區域限制
- Apps & Extensions
comments: true
excerpt: 利用 radiko 可以很方便地收聽日本電台節目，但它的區域限制嚴重到，只要 IP 不在日本去打開網站就直接給你一個空白頁面看，手機 App 每次都要先用
  GPS 去判斷位置，不給權限就直接關掉。之前還想過用僞裝 GPS 去騙過 App，但如果手機未 root 操作起來就會很麻煩。不過在網上意外找到一款叫「raziko」的神
  App，只要安裝就可以直接使用。而電腦端則亦可在 Chrome 或 Firefox 等瀏覽器上安裝「rajiko」擴充，方便解鎖任何區域電台還可錄音和下載。
---

> radiko（日語：ラジコ）是日本一家網絡電台平台，由電通與日本多家廣播電台合資成立的「株式會社radiko」經營，於2010年3月開始運行，以線上串流的方式同步播出NHK廣播和日本全國各地的民營廣播電台（部分民放未參加），並提供線上隨選重聽服務。截至2018年2月1日，共有93家電台加入了radiko。用戶可以通過電腦、手機應用程式等收聽radiko轉播的電台節目。
>
> radiko對免費用戶採取了地域限制措施，除了日經廣播電台的兩套頻率以及放送大學電台廣播外，免費用戶只能聽到當地的電台的節目，用戶需付費購買「radiko premium」服務才可以收聽絕大多數radiko加盟台的節目。日本國外用戶無法使用radiko服務。除此之外，部分節目（如體育賽事、部分經紀公司藝人出演的節目、廣告等）可能會因版權問題而被radiko屏蔽。

正如上述來自[維基百科](https://zh.wikipedia.org/zh-hk/Radiko){:target="_blank"}的介紹，利用 radiko 可以很方便地收聽日本電台節目，但它的區域限制嚴重到，只要 IP 不在日本去打開網站就直接給你一個空白頁面看，手機 App 每次都要先用 GPS 去判斷位置，不給權限就直接關掉。之前還想過用僞裝 GPS 去騙過 App，但如果手機未 root 操作起來就會很麻煩。不過在網上意外找到一款叫「raziko」的神 App，只要安裝就可以直接使用。而電腦端則亦可在 Chrome 或 FireFox 等瀏覽器上安裝「rajiko」擴充，方便解鎖任何區域電台還可錄音和下載。

# 在 android 上用 raziko

raziko 大概是第三方開發的 App，在 radiko 的官方 App 支援之前就具備解鎖區域限制和錄音等功能，但因爲被官方要求於2016年下架 Play 商店。不過在網上有一些文章介紹搭配舊版本的話還可以正常使用，實測安裝 raziko 1.2.0267 和 radiko 5.0.8 可以正常收聽。在網上搜尋可以找到很多地方下載特定版本的 apk 檔案。

![Google搜尋raziko](https://wdlxdg.bn.files.1drv.com/y4mI5rqkm-x0y2_KXVuhHtGGBI3SuArRClouKgQMTHlXQL7wyfGw0w1gvw26v1FtbhoWMVialSc7Eok06YRd5xOs0PHp9oPUIG6iUagHVxqFDJucu6yshd3PmCNKjtJ_LlmOEE5nMwyY7M1Oa7g2sFDzNqUIeT74k0ezs1UBS8BPdcfgGB1d-rGAUBTpDuhv0ES3Xm9AIizzcYarulriROIFQ?width=617&height=945&cropmode=none)


雖然不用打開 radiko 的官方 App 但 raziko 需要它安裝在手機才能使用。打開 raziko 之後沒有在設定裏面找到網上說的更改地區的選項，但預設就是東京地區所以我常聽的電台可以直接點開。（如果想要收聽其他地區可以試下裝 1.1.x 版本並在飛航模式下打開，也許可以出現地區選項）需要注意的是下面的錯誤如果點關閉就直接退出了，但如果點下手機的返回按鍵便可以正常播放。

<figure>
	<img src="https://s9lxdg.bn.files.1drv.com/y4m_kVTmAgXLyK3G_hukXNCfcD8yV_c9pdhyCA6LXd-pfc56YT3Qv9DuxCU-IRrqwB5BMzPyaXPXiQu4MNT9svdFE4hQjcjq_JDuYuNXpfwB-KWNbFrEBbKnlByuntS8eBbZxEGmyzu4HZ8mMZqQxCctDcylVyeW3E-zIAqu0Pw-J0mSZEgBL31HUs0Q_vgQZSS55ydWiXQOFtNngrri94bKg?width=577&height=883&cropmode=none"  alt="出現這種錯誤直接按下返回就OK了">
	<figcaption>出現這種錯誤直接按下返回就OK了</figcaption>
</figure>

<figure>
	<img src="https://utkm6w.bn.files.1drv.com/y4mMlm4sh43cDuC17y8sS1_fuhEHYfHtr7N3cKJhfaiBR_rWJRPcVLYFEDxQntUQ04wVhzcQfHa_Xmn-kf6pIwJOoEgJkysQPOS8tw105C15N9LjRAVkKFGTbiLw3ZyPP7TPRmOtx3A-BJ2a3arnHq3lTabLeAI5CEs2ljriEhkTYQplqKU7-lXKd1uC8Ned86he6BhehFe4Y7PLXTMtvoOsw?width=577&height=883&cropmode=none"  alt="返回後可以選擇電台，按下ON——">
	<figcaption>返回後可以選擇電台，按下ON——</figcaption>
</figure>


# 在電腦上用 rajiko

直接在商店搜索 rajiko 安裝到瀏覽器就可以用了。點開圖示可以選擇收聽的地區，預設爲東京。在不同電台頁面也會出現不同下載或錄製的選項，方便保存到本地日後回聽。

![電腦上使用rajiko](https://wtlxdg.bn.files.1drv.com/y4mVEjggrxWzsjxcdaIsbx975faofX6o_QG4yD9OPPQ2nKPh_R_JkT1T6uFaxgIkVZArUmO-jOUw8iaeiaDKMK0oKyM3IFTE2NcE65XUkBr2HxeQbybTgXSYBUfkmWM45mnnypdLkv0JKDPlg-waTPYaxUAMaKWBrQlU8MClcYflxrMOUuxjSOa62UsB0r87mGyNjtVwwzsih1DjriwbYzOyQ?width=1920&height=983&cropmode=none)

以上∎ 
