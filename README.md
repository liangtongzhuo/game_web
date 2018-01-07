# __前言__
本程序仅仅学习，顺便回忆小学玩的游戏。
项目初心为了验证一些对 Canvas 想法。
项目大量运用 ES6，无 ";" 写法。

<img src="http://ac-2my9ah1h.clouddn.com/6ad02577c3d0b0d6978b.gif">

# __目录__
- 文件介绍
- 职责分类
- 缺点

## __文件__
- img
  - jxk（剑侠客图片）
  - background（地图图片）
- js
  - base
    - runloop.js（循环）
  - view
    - jxk.js（剑侠客）
    - map_one.js（地图）
  - game.js 
  - index.js 
- index.html

## __职责分类__
```
    <script type="text/javascript" src="js/base/runloop.js"></script>
    <script type="text/javascript" src="js/view/map_one.js"></script>
    <script type="text/javascript" src="js/view/jxk.js"></script>
    <script type="text/javascript" src="js/game.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
```
js/base/runloop.js：主要负责 window.requestAnimationFrame 循环
js/view/map_one.js：地图渲染
js/view/jxk.js：剑侠客渲染
js/game.js：初始化 Canvas ，处理击事件
js/index.js：项目入口

## __缺点__
1. 人物走在地图边界没有站立状态，这都怪我没有拆分地图与人物之间x，y关系。最近看到微信小程序打飞机源码，发现值得学习。
2. Canvas 对点击事件支持弱，获取不到绘制在上面的状态，我也没有找到完美的解决方法。

# __结尾__
GitHub: https://github.com/liangtongzhuo/game_web
本想做成联网，大家一起在上面走，想了想，为了代码的干净，还是以后另外开项目再加把。

体验地址：https://liangtongzhuo.github.io/game_web/
__（在GitHub 打开速度非常慢，加载了50张以上的图，另外记得打开手机调试，并没有适配 PC，获取不到点击事件） __


