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

正如上述來自[維基百科](https://zh.wikipedia.org/zh-hk/Radiko){:target="_blank"}的介紹，利用 radiko 可以很方便地收聽日本電台節目，但它的區域限制嚴重到，只要 IP 不在日本去打開網站就直接給你一個空白頁面看，手機 App 每次都要先用 GPS 去判斷位置，不給權限就直接關掉。之前還想過用僞裝 GPS 去騙過 App，但如果手機未 root 操作起來就會很麻煩。不過在網上意外找到一款叫「raziko」的神 App，只要安裝就可以直接使用。而電腦端則亦可在 Chrome 或 FireFox 等瀏覽器上安裝「rajiko」擴充，方便解鎖任何區域電台還可錄音和下載。這樣一來就算在台灣或香港等日本海外地區也可以免 VPN 隨時隨地收聽日本廣播了。

# 在 android 上用 raziko

raziko 大概是第三方開發的 App，在 radiko 的官方 App 支援之前就具備解鎖區域限制和錄音等功能，但因爲被官方要求於2016年下架 Play 商店。不過在網上有一些文章介紹搭配舊版本的話還可以正常使用，實測安裝 raziko 1.2.0267 和 radiko 5.0.8 可以正常收聽。在網上搜尋可以找到很多地方下載特定版本的 apk 檔案。

![Google搜尋raziko](https://img.dorawei.xyz/20200326-Radiko/radiko-1.png)


雖然不用打開 radiko 的官方 App 但 raziko 需要它安裝在手機才能使用。打開 raziko 之後沒有在設定裏面找到網上說的更改地區的選項，但預設就是東京地區所以我常聽的電台可以直接點開。（如果想要收聽其他地區可以試下裝 1.1.x 版本並在飛航模式下打開，也許可以出現地區選項）需要注意的是下面的錯誤如果點關閉就直接退出了，但如果點下手機的返回按鍵便可以正常播放。

<figure>
	<img src="https://img.dorawei.xyz/20200326-Radiko/radiko-2.png"  alt="出現這種錯誤直接按下返回就OK了">
	<figcaption>出現這種錯誤直接按下返回就OK了</figcaption>
</figure>

<figure>
	<img src="https://img.dorawei.xyz/20200326-Radiko/radiko-3.png"  alt="返回後可以選擇電台，按下ON——">
	<figcaption>返回後可以選擇電台，按下ON——</figcaption>
</figure>


# 在電腦上用 rajiko

直接在商店搜索 rajiko 安裝到瀏覽器即可前往 radiko.jp 享受無限制的電台節目了。點開圖示可以選擇收聽的地區，預設爲東京。在不同電台頁面也會出現不同下載或錄製的選項，方便保存到本地日後回聽。

![電腦上使用rajiko](https://img.dorawei.xyz/20200326-Radiko/radiko-4.png)

# raziko 不能用

（2021年3月5日更新）

貌似在2021年2月 raziko 的開發者更新了 App，導致舊版本會出現被強制要求更新，但因爲這款 App 早就被 Google Play 下架，於是沒有在 Play 商店安裝過的人是更新不到的。

打開 App 便會提醒 「バージョン 1.1.356以降に更新してください」然後直接跳轉到 Play 商店。

## 解決方法1

如果不幸 raziko 不能正常使用了，可以用類似電腦版的方法，找一個可以安裝擴充的瀏覽器（比如[Kiwi](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser){:target="_blank"}），安裝上面提到的 rajiko 直接使用電腦版打開 radiko.jp 網站，就可以用瀏覽器收聽了。

![Kiwi Browser上使用擴充收聽](https://img.dorawei.xyz/20200326-Radiko/kiwi-tfm.png)

Tips：可以同時安裝 Custom UserAgent String 將 radiko.jp 網站設定爲電腦版瀏覽器，便可省去手動勾選「電腦版網站」的麻煩了。

## 解決方法2

（2021年4月19日更新）

另一個辦法是清除 App 的全部資料再屏蔽 www.googletagmanager.com 這個網站。大概 raziko 在運行後會透過 Google Tag Manager 獲取有無更新的訊息，所以想辦法阻止其連線到 www.googletagmanager.com 就不會有強制更新。

這樣有一個小問題，App 會提示沒有網絡連線，這時按 OK 會自動退出，但返回或按一下其他地方就可以關閉提示正常使用。

## 在 android 上開啓模擬位置

（2022年3月更新）
Raziko 不能正常使用的場合，還可以使用模擬位置來騙過官方 Radiko app：

- 開啓「開發者選項」
- 安裝模擬位置 app 如 Fake GPS
- 在「開發者選項」下的「選擇模擬位置應用程式」中選擇上一步安裝的app。
- 在 Fake GPS 中選擇一個位置，如東京，點擊右下的按鈕開啓。

![在 Fake GPS 中選擇位置](https://img.dorawei.xyz/20200326-Radiko/fake_gps.png)


之後打開 Radiko app 就可以正常收聽模擬位置的電台了，比如選擇東京時：

![radiko android app 東京放送局](https://img.dorawei.xyz/20200326-Radiko/radiko_app_tokyo.png)

使用 radiko.jp for Android 5.0.8 在 android 11 和 12 系統上測試可用，其他版本和環境可能存在差異。


以上∎ 
