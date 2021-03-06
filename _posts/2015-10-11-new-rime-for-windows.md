---
title: 新版 Windows Rime 輸入法
date: 2015-10-11 00:00:00 +08:00
tags:
- Rime
- IME
- Windows
comments: true
excerpt: New Rime for Windows.
layout: post
---

**2019-12-21更新**：RIME 小狼毫已支援 Windows 10 可直接去[官網](https://rime.im/){:target="_blank"}下載使用。

**2017-06-06更新**：現在在 Windows 10 上使用的是 [PRIME](https://github.com/osfans/PRIME/releases){:target="_blank"}。

新版的小狼毫終於釋出了，採用 Google Input Tools 作爲前端框架。有望解決之前小狼毫在 Windows 8 和以上版本中的相容性問題。

![Notice from developer](https://ooo.0o0.ooo/2016/08/16/57b2eec225e63.png)

下載地址：

> 散裝的 rime with gits
https://bintray.com/lotem/rime/rime-gits/0

## 安裝 ##

下載之後解壓縮，並確保檔案所在資料夾路徑中沒有空格和英文以外字符。(使用者名稱中含有可能也會導致安裝失敗)

![](https://ooo.0o0.ooo/2016/08/16/57b2eec1ee4fd.png)

以管理員身份執行 install.bat, 當提示登錄檔等時選擇是，等待Google Input Tools服務啓動，安裝完成。

![](https://ooo.0o0.ooo/2016/08/16/57b2eec2534ae.png)

這時輸入法選單中便會多出一個名爲Input Tools的輸入法。選擇即可使用了。

![](https://ooo.0o0.ooo/2016/08/16/57b2eec23aaec.png)

## 使用介面 ##

可能由於是Alpha測試版，一般在右下角的輸入法狀態欄上只有一個ㄓ的圖示，點擊之後可有選擇A(English)和ㄓ(Rime)，並且切換到英文再切換回中文之後，狀態欄會變成類似Google拼音的樣式，多出中英和全形半形等切換按鈕。
但有時在Windows 10中這樣做會導致一些應用程式崩潰(不如Chrome, Notepad++等)。

![一般狀態欄](https://ooo.0o0.ooo/2016/08/16/57b2eec1e8699.png)
![Google拼音式狀態欄](https://ooo.0o0.ooo/2016/08/16/57b2eec1ee4fd.png)

打字時的介面像 Mac OS 和 Linux 上的輸入法，採用嵌入式設計，個人很喜歡:D

![打字時介面](https://ooo.0o0.ooo/2016/08/16/57b2eec243d78.png)

## 使用注音和其他輸入方案 ##

Rime輸入法最著名的功能便是其支援包括倉頡、注音、粵拼等各種各樣的輸入方案了。但是在Alpha測試版中並沒有「重新部署」功能，想要自定義輸入方案只能在安裝前就設定好了（因爲安裝之後會進行一次部署）。

以注音輸入方案爲例：

在下載的檔案的data\rime中找到default.yaml, 修改其中的方案爲自己想要的，在這裏改爲倉頡、倉頡快打和注音、注音・臺灣正體等。這樣再安裝就可以了。

![設定輸入方案](https://ooo.0o0.ooo/2016/08/16/57b2eec2137ba.png)

如果已經安裝想要更改設定的，可以先以管理員身份執行uninstall.bat, 然後去C:\users\username\appdata\roaming\rime\ (這相當於之前版本的「用戶文件夾」)把裏面的資料清空。然後再次進行安裝就可以了。

![方案選單](https://ooo.0o0.ooo/2016/08/16/57b2eec25c851.png)

## 已知問題 ##

有時在輸入法狀態欄切換圖示之後會導致程式崩潰

仍然無法在Metro Ul中使用

在某些程式，如Chrome中，打字時候選欄不跟隨

## 畢竟這只是Alpha測試版 ##

所以會有很多Bug，但日常使用應該足夠了(只要不去觸發崩潰的bug...)

Happy typing :D
