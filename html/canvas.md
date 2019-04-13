## 学习Canvas



canvas  翻译是画布 它的作用就是让前端工程师能像画家一样画画，当然，使用编程的方式 那么 canvas要注意一下几点

1. canvas 的宽高只能够在标签上定义
2. canvas的路径要注意清除 tips: **beginPath()** `//清空路径`
3. 像strokeStyle() fillStyle() 这些用于着色的函数只能对后者操作生效 无法作用与前者
4. 当我们moveTo() `//起点`   lineTo() `//连到` 以后却不 stroke() `//描绘 ` 是不会看到效果的
5. 当我们要对一个缺边的图形封口的时候 不能直接画出缺少的边 而是用专用的函数 closePath()` //闭合路径`  封口



当我们要用 canvas 做一个 画画的功能时候

```JavaScript
let canvas = document.getElementById('canvas-test');
           
let content = canvas.getContext('2d')

let lastX,lastY; //用于获取x坐标与y坐标

// onmousedown 就是鼠标点击的时候运行该函数
content.onmousedown = function (ev) {

    lastX = ev.offsetX; //在鼠标点击的当前元素的x坐标
    lastY = ev.offsetY; //在鼠标点击的当前元素的y坐标
    // 鼠标移动运行的方法
    content.onmousemove = function(ev){
        content.beginPath();
        content.moveTo(lastX,lastY);
        content.lineTo(ev.offsetX,ev.offsetY);
        lastX = ev.offsetX; //当我们滑动的时候
        lastY = ev.offsetY; //x y 均已改变
        //所以重新赋值
        content.stroke();
	}

}
```

canvas 画图形

矩形

1. content.rect() //路径操作
2. content.strokeRect() //只画边 不填充
3. content.fillRect //只填充不画边

弧（圆） 

1. content.arc( cx , cy , r , startAng , endAng  , isAnticlockwise是否逆时针) //路径操作  warning: 其中角度用到的单位是弧度π 其中 2π为一圈             角度--->弧度  (角度*π/180)   弧度--->角度 (弧度*180/π)

   当我们要确定开始角的坐标时候 我们需要借助勾股定理进行运算 如下

   ```javascript
   let x = cx + Math.sin(startAng*Math.PI/180)*r;
   let y = cy - Math.cos(startAng*Math.PI/180)*r; //计算机里 y轴下方为正 上方为负
   ```

2. warning： 弧 (arc)的零度不在上方 而是在水平向右的方向 90度为正下方 所以我们可以做角度转换  

