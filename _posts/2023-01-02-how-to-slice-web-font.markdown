---
title: 如何製作中文切片 Web Font
date: 2023-01-02 21:56:00 +08:00
tags:
- Web Font
comments: true
excerpt: Google Fonts 沒有收錄的開放中文字體也有很多，自己動手製作切片式 Web Font，將更多中文字體帶入網頁。
---

之前[這篇文章](https://dorawei.xyz/chinese-webfont-2019/){:target="_blank"}中介紹了 Google Fonts 使用切片字體的方式來提升中日韓 Web Font 載入體驗，現在分享一種使用任意字體自行製作切片式 Web Font 的方案。

# 更多開放中文字體

最近幾年有越來越多的開放字體釋出，包括 Fontworks, Morisawa 等專業字體廠商將部分商用字體以開放原始碼形式在 Github 和 Google Fonts 提供，也有更多設計師和愛好者加入到其中，帶來更多原創及衍生作品。

比如思源系列就有多種風格的衍生版本，Klee One 等人氣日文字體也有人將其補全中文缺字、甚至製作了地區字形變體。也有一些設計師近來直接以開放字體形式釋出字體作品。

但並不是每一款開放字體都會被 Google Fonts 收錄，更不用提思源等的衍生版本。如果想要使用這些字體作爲 Web Font，可以仿照 Google Fonts 的方式自行製作切片字體並部署到諸如 Cloudflare Pages, Vercel 這樣的平臺。


# 工具和使用方法

依照特定字符生成 woff2 字體字集的工具有多種，比如 [fonttools](https://github.com/fonttools/fonttools){:target="_blank"} 和專門針對 Web Font 的 [Glyphhanger](https://github.com/zachleat/glyphhanger){:target="_blank"}、字蛛等。

本文使用 [Glyphhanger](https://github.com/zachleat/glyphhanger){:target="_blank"} 爲例進行簡單說明。

首先，在 command-line 中使用以下命令安裝 glyphhanger：

`npm install -g glyphhanger`

由於 glyphhanger 依賴 fonttools 的 pyftsubset，所以在使用之前，還需要先安裝 [fonttools](https://github.com/fonttools/fonttools){:target="_blank"}：

`pip install fonttools`

我們需要產生 woff2 格式的 WebFont，所以還需要安裝 brotli：

`pip install brotli`

如果想使用 glyphhanger 的 --flavor=woff --with-zopfli 選項，還需要安裝 zopfli (`pip install zopfli`)。不過這篇文章中我們只使用 woff2。

安裝完畢之後，我們就可以使用 glyphhanger 的白名單功能來切割字體了。使用以下命令將字體切割爲特定字符的子集：

`glyphhanger --whitelist=ABCD --subset=*.ttf`

這個命令會將字體切割並只保留 A、B、C、D 四個字符。

例如，使用該命令將 LatoLatin-Regular.ttf 切割為 LatoLatin-Regular-subset.ttf（原本 145.06 KB，現在 4.42 KB），LatoLatin-Regular-subset.zopfli.woff（原本 145.06 KB，現在 2.84 KB）和 LatoLatin-Regular-subset.woff2（原本 145.06 KB，現在 2.24KB）。

我們也可以使用 --formats 參數來指定切割出的字體格式，例如下面的命令只會產生 woff2 格式的字體子集：

`glyphhanger --whitelist=ABCD --formats=woff2 --subset=*.ttf`

根據這個原理，我們可以使用 Python 等語言批次處理不同的字符片段，並生成 woff2 的字體切片。大概需要以下幾個步驟：

- 確定字符範圍和切片數量、每個切片包含的文字等
- 使用 Python 依次根據切片中的文字去產生 woff2
- 重新命名切片檔案，生成 CSS

# 製作和使用切片

下面是一個使用 Python 實現這個目的的示例 code：

```python:
import os
import subprocess

def generate_font_slice(characters, output_filename):
  # Use glyphhanger to generate a font slice
  command = [
    'glyphhanger',
    '--whitelist=' + characters,
    '--subset=*.ttf',
    '--flavor=woff2'
  ]
  subprocess.run(command)

  # Rename the generated font slice
  os.rename('*.woff2', output_filename)

# Generate font slices for different character ranges
generate_font_slice('ABCD', 'slice1.woff2')
generate_font_slice('EFGH', 'slice2.woff2')
generate_font_slice('IJKL', 'slice3.woff2')

```

上面的 code 可以產生3個字體切片，分別對應 `ABCD`, `EFGH`, `IJKL`，接下來我們需要在 CSS 文件中使用 @font-face 標記和 unicode range 選項將這些字體切片組合起來：

```css:
@font-face {
  font-family: 'MyFont';
  src: url('slice1.woff2') format('woff2');
  unicode-range: U+0041-0044;
}
@font-face {
  font-family: 'MyFont';
  src: url('slice2.woff2') format('woff2');
  unicode-range: U+0045-0048;
}
@font-face {
  font-family: 'MyFont';
  src: url('slice3.woff2') format('woff2');
  unicode-range: U+0049-004C;
}

```

至此，我們便完成了一個簡單的切片字體。CSS 中的 unicode-range 則可以確保只有網頁上出現這個文字時才下載對應的字體切片。比如當頁面上只有 ABC 時便會去下載 slice1.woff, 而如果只有 HI 則會下載對應的 slice2.woff2 和 slice3.woff2。

我們再看一下 Google Fonts 的中文字體實際使用的字體切片，以 Noto Sans HK (`https://fonts.googleapis.com/css2?family=Noto+Sans+HK`) 爲例：

```CSS:
/* [0] */
@font-face {
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanshk/v21/nKKQ-GM_FYFRJvXzVXaAPe9hMRhvEPeWV8Ydw9dTvaja5emiwCL1Dv89rTx5gtGuOA.0.woff2) format('woff2');
  unicode-range: U+28eb2-28eb3, U+28ed9, U+28ee7, U+28fc5, U+29079, U+29088, U+2908b, U+29093, U+290af-290b1, U+290c0, U+290e4-290e5, U+290ec-290ed, U+2910d, U+29110, U+2913c, U+2914d, U+2915b, U+2915e, U+29170, U+2919c, U+291a8, U+291d5, U+291eb, U+2941d, U+29420, U+29433, U+2943f, U+29448, U+294d0, U+294d9-294da, U+294e5, U+294e7, U+2959e, U+295b0, U+295b8, U+295d7, U+295e9, U+295f4, U+29720, U+29732, U+297d4, U+29810, U+29857, U+298a4, U+298d1, U+298ea, U+298f1, U+298fa, U+29903, U+29905, U+2992f, U+29945, U+29947-29949, U+2995d, U+2996a, U+2999d, U+299c3, U+299c9, U+29a28, U+29a4d, U+29b05, U+29b0e, U+29bd5, U+29c73, U+29cad, U+29d3e, U+29d5a, U+29d7c, U+29d98, U+29d9b, U+29df6, U+29e06, U+29e2d, U+29e68, U+29eac, U+29eb0, U+29ec3, U+29ef8, U+29f23, U+29f30, U+29fb7, U+29fde, U+2a014, U+2a087, U+2a0b9, U+2a0e1, U+2a0ed, U+2a0f3, U+2a0f8, U+2a0fe, U+2a107, U+2a123, U+2a133-2a134, U+2a150, U+2a192-2a193, U+2a1ab, U+2a1b4-2a1b5, U+2a1df, U+2a1f5, U+2a220, U+2a233, U+2a293, U+2a29f, U+2a2b2, U+2a2b4, U+2a2b6, U+2a2ba, U+2a2bd, U+2a2df, U+2a2ff, U+2a351, U+2a3a9, U+2a3ed, U+2a434, U+2a45b, U+2a5c6, U+2a5cb, U+2a601, U+2a632, U+2a64a, U+2a65b, U+2a6a9, U+2adff, U+2f825, U+2f83b, U+2f840, U+2f878, U+2f894, U+2f8a6, U+2f8cd, U+2f994, U+2f9b2, U+2f9bc, U+2f9d4, U+f0001-f0005, U+f0019, U+f009b, U+f0101-f0104, U+f012b, U+f01ba, U+f01d6, U+f0209, U+f0217, U+f0223-f0224, U+fc355, U+fe327, U+fe517, U+feb97, U+fffb4;
}
/* [1] */
@font-face {
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanshk/v21/nKKQ-GM_FYFRJvXzVXaAPe9hMRhvEPeWV8Ydw9dTvaja5emiwCL1Dv89rTx5gtGuOA.1.woff2) format('woff2');
  unicode-range: U+28189, U+281af, U+281bc, U+28207, U+28218, U+2821a, U+28256, U+2827c, U+2829b, U+282cd, U+282e2, U+28306, U+28318, U+2832f, U+2833a, U+28365, U+2836d, U+2837d, U+2838a, U+28412, U+28468, U+2846c, U+28473, U+28482, U+28501, U+2853c-2853d, U+2856c, U+285e8, U+285f4, U+28600, U+2860b, U+28625, U+2863b, U+286aa-286ab, U+286b2, U+286bc, U+286d8, U+286e6, U+2870f, U+28713, U+28804, U+2882b, U+2890d, U+28933, U+28948-28949, U+28956, U+28964, U+28968, U+2896c-2896d, U+2897e, U+28989, U+2898d, U+289a8, U+289aa-289ab, U+289b8, U+289bc, U+289c0, U+289dc, U+289de, U+289e1, U+289e3-289e4, U+289e7-289e8, U+289f9-289fc, U+28a0f, U+28a16, U+28a25, U+28a29, U+28a32, U+28a36, U+28a44-28a4b, U+28a59-28a5a, U+28a81-28a83, U+28a9a-28a9c, U+28ac0, U+28ac6, U+28acb-28acc, U+28ace, U+28ade-28ae3, U+28ae5, U+28aea, U+28afc, U+28b0c, U+28b13, U+28b21-28b22, U+28b2b-28b2d, U+28b2f, U+28b46, U+28b4c, U+28b4e, U+28b50, U+28b63-28b66, U+28b6c, U+28b8f, U+28b99, U+28b9c-28b9d, U+28bb9, U+28bc2, U+28bc5, U+28bd4, U+28bd7, U+28bd9-28bda, U+28be7-28bec, U+28bf5, U+28bff, U+28c03, U+28c09, U+28c1c-28c1d, U+28c23, U+28c26, U+28c2b, U+28c30, U+28c39, U+28c3b, U+28cca, U+28ccd, U+28cd2, U+28d34, U+28d99, U+28db9, U+28e0f, U+28e36, U+28e39, U+28e65-28e66, U+28e97, U+28eac;
}

...

/* [118] */
@font-face {
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanshk/v21/nKKQ-GM_FYFRJvXzVXaAPe9hMRhvEPeWV8Ydw9dTvaja5emiwCL1Dv89rTx5gtGuOA.118.woff2) format('woff2');
  unicode-range: U+d, U+2b, U+7c, U+a0, U+a9, U+300c-300d, U+4e09, U+4e3b, U+4e4b, U+4e5f, U+4e86, U+4e8b-4e8c, U+4eab, U+4ed6, U+4ee3, U+4ef6, U+4f1a, U+4f4d, U+4f60, U+4f7f, U+4f86, U+4fdd, U+4fe1, U+5011, U+50b3, U+5149, U+5167, U+5176, U+518d, U+5229, U+524d, U+529b, U+52a0, U+52d9, U+5316-5317, U+5340, U+539f, U+53ca-53cb, U+5408, U+540c-540d, U+544a, U+548c, U+54c1, U+54e1, U+5546, U+554f, U+55ae, U+56de, U+5716, U+5831, U+5834, U+5916, U+5929, U+5973, U+597d, U+5982, U+5b57, U+5b78, U+5b89, U+5b8c, U+5b9a, U+5ba2, U+5bb9, U+5be6, U+5c07-5c08, U+5c0d, U+5c31, U+5de5, U+5df2, U+5e02, U+5e38, U+5e73-5e74, U+5ea6, U+5f0f, U+5f71, U+5f8c, U+5f97, U+5feb, U+6027, U+60c5, U+60f3, U+610f, U+611b, U+611f, U+61c9, U+6210, U+6216, U+6240, U+624b, U+63a5, U+63a8, U+63d0, U+641c, U+6536, U+6578, U+6599, U+65b9, U+660e, U+661f, U+662d, U+66f4, U+670d, U+671f, U+6771, U+679c, U+682a, U+683c, U+689d, U+696d, U+6a02, U+6a5f, U+6b0a, U+6b21, U+6b3e, U+6b64, U+6c23, U+6c34, U+6c92, U+6cbb, U+6cd5, U+6d3b, U+7063, U+7121, U+71b1, U+7247-7248, U+7269, U+7279, U+73fe, U+7406, U+7522, U+7576, U+767b, U+76ee, U+76f8, U+770b, U+771f, U+77e5, U+793e, U+7a0b, U+7acb, U+7ad9, U+7b2c, U+7b49, U+7cbe, U+7d50, U+7d61, U+7d93, U+7dda, U+7f8e, U+8005, U+806f, U+80fd, U+81ea, U+8207, U+8272, U+865f, U+8868, U+8981, U+898b, U+8996, U+8a00, U+8a08, U+8a0a, U+8a18, U+8a2d, U+8a71, U+8aaa, U+8acb, U+8cbb, U+8cc7, U+8d77, U+8d85, U+8def, U+8eab, U+8eca, U+8f49, U+9019-901a, U+9023, U+9032, U+904a-904b, U+904e, U+9053, U+9078, U+9084, U+90e8, U+90fd, U+91cd, U+91d1, U+9577, U+9580, U+9593, U+9762, U+982d, U+984c, U+985e, U+9996, U+9ad4, U+9ad8, U+9ede, U+ff01, U+ff08-ff09, U+ff1f;
}
/* [119] */
@font-face {
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/notosanshk/v21/nKKQ-GM_FYFRJvXzVXaAPe9hMRhvEPeWV8Ydw9dTvaja5emiwCL1Dv89rTx5gtGuOA.119.woff2) format('woff2');
  unicode-range: U+20-22, U+27-2a, U+2c-3b, U+3f, U+41-5d, U+61-7b, U+7d, U+ab, U+ae, U+b2-b3, U+bb, U+bf, U+c9, U+cd, U+d6, U+e0-ef, U+f1-f4, U+f6, U+f9-fa, U+fc-fd, U+101, U+103, U+110-111, U+113, U+12b, U+14d, U+16b, U+1a1, U+1b0, U+1ce, U+300-301, U+1ea1, U+1ea3, U+1ebf, U+1ec7, U+2013-2014, U+2039-203a, U+203c, U+2122, U+3001-3002, U+3113-3114, U+3118, U+311a-3129, U+4e00, U+4e0a-4e0b, U+4e0d, U+4e2d, U+4eba, U+4ee5, U+4f5c, U+500b, U+5165, U+5168, U+516c, U+51fa, U+5206, U+5230, U+52d5, U+53ef-53f0, U+570b, U+5728, U+5730, U+591a, U+5927, U+5b50, U+5bb6, U+5c0f, U+5fc3, U+6211, U+6587, U+65b0, U+65bc, U+65e5, U+662f, U+6642, U+6700, U+6703, U+6708-6709, U+672c, U+6b63, U+70b9-70ba, U+751f, U+7528, U+767c, U+7684, U+7db2, U+884c, U+958b, U+95dc, U+96fb, U+9801, U+ff0c, U+ff1a;
}
```

整個字體由上至下被分割成了 105 個切片（中間有幾個數字被略過了），最下面 119 是最常用的一些字符，而越往上是使用頻率越低的字符。

我們可以直接按照這份 CSS 檔案的方式去分割字體。將 CSS 稍作處理，每一行只留下切片 ID 和 unicode-range 並保存爲 CSV 檔案:

```
0|U+28eb2-28eb3, ... U+fffb4
1|U+28189, ... U+28eac
...
118|U+d, ... U+ff1f
119|U+20-22, ... U+ff1a

```

接下來就可以使用 Python 去處理 csv 檔案中每行的資料，讀取要切割的字符片段的 id 和 unicode-range，然後對每個片段執行切割操作，最後將切割出的字體檔案以 id 重新命名並移動到輸出資料夾。

至於 CSS，我們可以直接替換上述 CSS 中的字體名稱和 url 等。Google Fonts 推薦的 font-display 是 swap, @font-face 語法有五個不同的 font-display 屬性可以使用：


> - block：指示瀏覽器暫時隱藏文字，直到字體完全下載完成。更精確地說，瀏覽器使用隱藏的占位符繪製文字，然後在自定義字體下載完成後將其替換為自定義字體。這也被稱為「隱藏文字閃爍」（FOIT）。
> - swap：指示瀏覽器在自定義字體完全下載前使用 fallback 字體顯示文字。這也被稱為「未格式化文字閃爍」（FOUT）。
> - fallback：在 auto 和 swap 之間找到一個折衷方案。瀏覽器將隱藏文字約 100ms，然後如果尚未下載自定義字體，將使用 fallback 文字。在下載自定義字體後，它將在短暫的交換期間（可能是 3 秒鐘）替換為新字體。
> - optional：與 fallback 相似，此值告訴瀏覽器最初隱藏文字，然後在自定義字體不可用時轉換到 fallback 字體。但是，此值也允許瀏覽器決定是否使用自定義字體，並使用用戶的連接速度作為決定因素（連接速度較慢的用戶不太可能收到自定義字體）。

使用 swap 屬性可以在確保文字能夠馬上以系統字體顯示，並實時爲下載好切片的字符載入 Web Font。

例如：
```CSS:
/* [0] */
@font-face {
  font-family: 'My Font';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(MyFont_0.woff2) format('woff2');
  unicode-range: U+28eb2-28eb3, ... U+fffb4;
}
/* [1] */
@font-face {
  font-family: 'My Font';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(MyFont_1.woff2) format('woff2');
  unicode-range: U+28189, ... U+28eac;

...

```

至此我們就做好了自己的切片字體，接下來可以上載到 Github 並部署到如 Vercel 或 Cloudflare Pages 等 JAMstack 平臺，就可以直接在我們的網頁中引用 CSS 檔案來使用了。

Google 的 Noto Sans HK 中除了繁體中文也包含了日文、簡體中文等字符。我們也可以按自己的使用範圍進行字符分割，來進一步減少字體切片的數量和檔案大小，從而使網頁中的 Web Font 在更短的時間內載入完成。

# 參考和下載

一個工作的 [Python script](https://asset.dorawei.xyz/20230102-font-slice/font-slice.py){:target="_blank"}（在 --input --output --csv 分別定義字體檔案 (如test.ttf), 輸出檔案名稱和使用的 CSV (如notosansHK.csv)）

[notosansHK.csv](https://asset.dorawei.xyz/20230102-font-slice/notosansHK.csv){:target="_blank"}
