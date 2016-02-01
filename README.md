# rem.js
移动端页面满屏自适应方案（采用rem作为单位，设计稿为750 * 1334）
* 修改自阿里的[lib-flexible](https://github.com/amfe/lib-flexible)，与lib-flexible相比，删除了dpr，保留rem
* 满屏自适应，要求设计稿为750 * 1334
* 单位换算为1rem = 50px

## 使用方法
### 第一种：
```HTML
<head>
    <script src="rem.min.js"></script>
</head>
```
### 第二种：
```HTML
<head>
    <script>function refreshRem(){var e=docEl.getBoundingClientRect().width,t=docEl.getBoundingClientRect().height;if(e/t>750/1334)var i=t/26.68;else var i=e/15;docEl.style.fontSize=i+"px"}var win=window,doc=win.document,docEl=doc.documentElement,tid;win.addEventListener("resize",function(){clearTimeout(tid),tid=setTimeout(refreshRem,300)},!1),win.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(tid),tid=setTimeout(refreshRem,300))},!1),refreshRem();</script>
</head>
```
### 推荐使用第二种内联方法
