---
title: 筆記：JavaScript 重定向 URL
date: 2016-05-10 18:38:00 +08:00
tags:
- JavaScript
comments: true
excerpt: Just a simple JavaScript example.
layout: post
---

記錄使用 JavaScript 去簡單實現重新定向 URL。

這裏以不同的URL來切換語言爲例：

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
