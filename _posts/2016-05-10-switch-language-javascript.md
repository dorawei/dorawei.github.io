---
title: JavaScript切換語言重定向
date: 2016-05-10 10:38:38
categories:
- Internet
tags:
- 網站
- JavaScript
- 中文轉換
comments: true
excerpt: Just a simply JavaScript example.
layout: post
---
雖然有直接進行簡繁轉換的JavaScript但是有時候會不準確啊，再加上詞彙的轉換什麼的……還是分開吧。
於是就用JavaScript做了一個切換語言的選項。

像這樣把某個`<a>`的`onclick`加上`switchLanguage()`的函數。
`<a id="switch" href="#" onclick="switchLanguage('zh-Hans')">`

然後定義一個`switchLanguage()`的函數：
```JavaScript
<script>
function switchLanguage(lang) {
  u = location.href.split('/');
  u.splice(3, 0, lang);
  location.href = u.join('/');
}
</script>
```

`location.href`的作用就是返回當前頁面的URL，比如說如果當前的URL是`https://blog.dorawei.xyz`，那`u`的結果就會是`https://blog.dorawei.xyz`。

`  location.href.split('/')`即以'/'來分開URL，這時候的`u`就會成爲`https:,,blog.dorawei.xyz`。

` u.splice(3, 0, 'zh-Hans')`的作用是在位置3，加入`'zh-Hans'`，並移除0個項目。

所以這時候的`u`就會變成`https:,,blog.dorawei.xyz,zh-Hans`。

再用`'/'`來組合起來，就變成了`https://blog.dorawei.xyz/zh-Hans`。

`location.href=URL`就可以把地址重定向到新的URL了。

如果想把`zh-Hans`去除掉可以這樣：
```JavaScript
<script>
function switchLanguage(lang) {
  u = location.href.split('/');
  u.splice(3, 1);
  location.href = u.join('/');
}
</script>
```

#Have fun.
