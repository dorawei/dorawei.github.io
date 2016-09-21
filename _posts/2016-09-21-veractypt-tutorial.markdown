---
title: 使用 VeraCrypt 加密
date: 2016-09-21 12:40:00 +08:00
tags:
- VeraCrypt
- Tools
- Encryption
comments: true
excerpt: 免費開源加密工具 VeraCrypt 的使用教學。
layout: post
---

[VeraCrypt](https://veracrypt.codeplex.com/){:target='_blank'}是一個免費開源的加密工具，是前知名加密工具 [TrueCrypt](https://en.wikipedia.org/wiki/TrueCrypt){:target='_blank'}的衍生版本。由於 TrueCrypt 以未知原因被中斷維護[^1]，越來越多的人開始尋找[替代品](http://www.howtogeek.com/203708/3-alternatives-to-the-now-defunct-truecrypt-for-your-encryption-needs/){:target='_blank'}，VeraCrypt 便是其中較受歡迎的一個。

# 下載

請前往官方[下載頁面](https://veracrypt.codeplex.com/wikipage?title=Downloads){:target='_blank'}選擇相應系統進行下載。

**注意**：Mac 用戶在安裝前必須安裝 2.3 或以上版本的 [OSXFUSE](https://osxfuse.github.io/)並**啓用 MACFuse compatibility mode**。

# 使用

## 建立加密容器（加密卷）[^2]

如果把你的整個磁碟（硬盤、硬碟）比作房屋、一個分區比作一個房間的話，加密容器（Encrypted file container，或稱「加密卷」）相當於在一個房間中放置一個具有密碼鎖保護的保險箱。需要密碼才可以存取裏面的東西。

當你運行 VeraCrypt 後，點擊位於左下的「Create Volume」，進入創建嚮導。

![Create Volume](https://ooo.0o0.ooo/2016/09/21/57e216ec12cd1.jpg)


第一個選項便是「Create an encrypted file container」（建立加密檔案容器），點擊「Next」進入下一步。

![Create an encrypted file container](https://ooo.0o0.ooo/2016/09/21/57e217826fb9a.jpg)


這時候會出現兩個選項，第一個是「標準 VeraCrypt 加密卷」（Standard VeraCrypt volume），第二個是「隱藏 VeraCrypt 加密卷」（Hidden VeraCrypt volume）。

第一個就相當於只是一個標準的保險箱，密碼正確就可以存取裏面的內容。而二個「隱藏 VeraCrypt 加密卷」就像是在保險箱之中再藏一個小的保險箱，並使用和「表箱」不同的密碼，只有輸入和「裏箱」對應的密碼才可以存取「裏箱」之中的內容。

這種加密方式適用於被「強迫」交出密碼或打開的時候，可以在「表箱」放一些看起來是「機密」的文件以掩人耳目，而眞正的「機密」則隱藏在「裏箱」之中。

這裏我們選擇「標準 VeraCrypt 加密卷」（Standard VeraCrypt volume），「下一步」（Next）。

![standard volume](https://ooo.0o0.ooo/2016/09/21/57e21a977911b.jpg)

接下來便是選擇存放「加密卷」（Encrypted file container）的位置。

![select file](https://ooo.0o0.ooo/2016/09/21/57e21b539e825.jpg)

就像保存其它文件一樣，選擇一個位置，並起一個名字。（可以沒有或任意的後綴／擴展名）然後「保存」（Save）。

![specify path and file name](https://ooo.0o0.ooo/2016/09/21/57e21bb15d59b.jpg)

確認無誤後就可以「下一步」（Next）了。

![check and next](https://ooo.0o0.ooo/2016/09/21/57e21c395f5f6.jpg)

接下來選擇加密方式。

默認的 [AES](https://zh.wikipedia.org/zh-hant/%E9%AB%98%E7%BA%A7%E5%8A%A0%E5%AF%86%E6%A0%87%E5%87%86){:target='_blank'}-256 是最常見的[加密算法](https://veracrypt.codeplex.com/wikipage?title=Encryption%20Algorithms){:target='_blank'}，在下拉菜單中也可以選擇其它方式或是嵌套多種算法，當然越複雜越安全而時間也會越長。

下面的 [Hash 算法](https://veracrypt.codeplex.com/wikipage?title=Hash%20Algorithms){:target='_blank'}一般採用預設就可以。然後「下一步」（Next）。

![encryption options](https://ooo.0o0.ooo/2016/09/21/57e21c7e3d8c7.jpg)

設定加密卷的大小。照之前的比喻，如果一個分區是一個房間的話，那現在就要給這個新建的「保險箱」（加密卷）設定大小。房間中放置的保險箱當然不能超過房間的大小，所以爲這個加密卷分配的大小也不能超過所在分區的大小。

![set volume size](https://ooo.0o0.ooo/2016/09/21/57e24669e5562.jpg)

終於到了最重要的一步，設定密碼。VeraCrypt 建議設定 20 位以上的密碼。而且可以使用某個檔案作爲密鑰（key file）。當然越複雜越安全而時間也會越長。（所以安全性與便利性不可兩得 :P）

![set password](https://ooo.0o0.ooo/2016/09/21/57e247573b1af.jpg)

在接下來的窗口中，隨（胡）機（亂）地晃動鼠標（滑鼠），直到下面的進度條變滿爲止。這是爲了收集指針的運動從而產生隋機數據以增強密鑰的加密強。

![collect randomness](https://ooo.0o0.ooo/2016/09/21/57e2491c1b1f7.jpg)

完成後點擊「格式化」（Format）等待創建完成即可。

![successfully created](https://ooo.0o0.ooo/2016/09/21/57e24947baed9.jpg)

完成後會出現成功的提示，點擊「OK」即可。然後點擊「退出」（Exit）便完成了加密容器（加密卷）的創建。

![created](https://ooo.0o0.ooo/2016/09/21/57e24a1369465.jpg)

## 掛載加密卷

在一開始運行 VeraCrypt 的介面上，最明顯的地方是一列的盤符（drive letter），這些便是用來掛載（mount）加密容器或是加密分區的地方。也就是說把加密卷作爲一個虛擬的分區掛載，從而進行檔案的存取。

![select drive](https://ooo.0o0.ooo/2016/09/21/57e24bb56bcec.jpg)

選擇好後便可以「選擇檔案」（Select File）來掛載了。

![select file](https://ooo.0o0.ooo/2016/09/21/57e24c1f7fc12.jpg)

選擇加密卷並打開。

![select and open](https://ooo.0o0.ooo/2016/09/21/57e24c33e2f54.jpg)

然後點擊「掛載」（Mount）。

![click mount](https://ooo.0o0.ooo/2016/09/21/57e24ca12ffe1.jpg)

這時會提示輸入密碼。如果有密鑰檔案（keyfile）的話也要同時選上「Use keyfiles」並選擇相應的檔案。

![input password](https://ooo.0o0.ooo/2016/09/21/57e24d4ac9c85.jpg）

PRF 算法預設的「自動偵測」（autodetection）即可（SHA-512 是VeraCrypt 使用的預設 PRF 算法）。然後「OK」就可以了。

![confirm and OK](https://ooo.0o0.ooo/2016/09/21/57e24d744f832.jpg)

這樣就掛載完成了（當然密碼正確的話）。

![mounted](https://ooo.0o0.ooo/2016/09/21/57e24e704432d.jpg)

現在就有了盤符爲 M 的一個虛擬磁盤。雖然在使用上和眞正的磁盤沒什麼區別，但其中的全部內容都是被加密的。而新文件在寫入其中的同時即被即時加密（be encrypted on the fly）。

當讀取其中的檔案時，比如播放一個影片，VeraCrypt 會把其臨時解密到記憶體（RAM，內存）中。

**注意**：一旦成功掛載加密卷後，便不需再次輸入密碼。

![virtual disk](https://ooo.0o0.ooo/2016/09/21/57e250c6e053e.jpg)

所以當不再需要時要記得將其「解除掛載」（Dismount）。

![dismount](https://ooo.0o0.ooo/2016/09/21/57e25172ab087.jpg)

## 關於隱藏加密卷

建立隱藏加密卷的步驟和標準加密卷大致相同，只是要在設定完「表卷」後還要再設定「裏卷」。

掛載時，如果輸入「表卷」的密碼（或密鑰檔案）便進入的是「表卷」，如果輸入「裏卷」的密碼（或密鑰檔案）便進入的是「裏卷」。

## 加密磁盤分區（非系統所在分區）

加密磁盤分區和和創建加密容器時的步驟差不多，只是在進入「創建嚮導」時選擇「加密非系統分區」（Encrypt a non-system partition/drive）。當然也有標準和隱藏兩種模式。

### 標準模式

在選擇標準模式後，會出現如下兩種選項：

![two-modes in standard partition encryption](https://ooo.0o0.ooo/2016/09/21/57e2542e9c3ee.png)

上面的是建立加密卷並格式化分區（即清除所有文件），而第二種模式則是加密現有的文件並創建加密卷，但時間會很長。

**注意**：除標準模式第二種加密現有的文件並創建加密卷外，其它模式下的「格式化」（Format）均會使所有資料丢失，請做好備份。

在格式化前需注意，如果想要儲存大於 4 GB 的檔案，需要把磁盤格式改爲「NTFS」。請在「Large files?」時選擇「Yes」。

### 隱藏模式

隱藏模式下會讓用戶選擇「Normal Mode」還是「Direct Mode」。

一般選「Normal Mode」即可，因爲「Direct Mode」是在一個已經建立好的加密卷中直接建立一個隱藏加密卷。

在「Normal Mode」下首先是設定表面的加密卷，如果在「Large files?」處選擇「Yes」的話，VeraCrypt 會警告用戶在外部加密容器使用「FAT」（即不支援存放大於 4 GB 檔案）會有利於在隱藏卷中存於大文件云云，所以如果沒有必要就不要更改些處的設定了。

#Have fun.

----

參見：

[VeraCrypt 官方文檔（英文）](https://veracrypt.codeplex.com/documentation){:target='_blank'}

----

[^1]: The development of TrueCrypt was ended in 5/2014 after Microsoft terminated support of Windows XP.[TrueCrypt](http://truecrypt.sourceforge.net/){:target='_blank'}

[^2]: [Beginner's Tutorial - VeraCrypt Documentation](https://veracrypt.codeplex.com/wikipage?title=Beginner%27s%20Tutorial){:target='_blank'}

