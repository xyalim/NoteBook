## 学习Canvas



canvas  翻译是画布 它的作用就是让前端工程师能像画家一样画画，当然，使用编程的方式 那么 canvas要注意一下几点

1. canvas 的宽高只能够在标签上定义
2. canvas的路径要注意清除 tips: **beginPath()** `//清空路径 重新规划路径`
3. 像**strokeStyle()** **fillStyle()** 这些用于着色的函数只能对后者操作生效 无法作用与前者
4. 当我们**moveTo()** `//起点`   **lineTo()** `//连到` 以后却不 **stroke()** `//描绘 ` 是不会看到效果的
5. 当我们要对一个缺边的图形封口的时候 不能直接画出缺少的边 而是用专用的函数 **closePath()**` //闭合路径`  封口
6.  **clearRect()**  在给定的矩形内清除指定的像素
7. content.canvas 可以拿到当前canvas绘图环境的canvas对象 可以去canvas属性 例如 content.canvas.width  content.canvas.height

图形变换 

1. content.save()  context.restore() canvas 图形状态的保存于销毁
2. content.translate(x,y) 位移 canvas 中的 translate 效果会叠加
3. content.rotate(deg) 旋转角度
4. content.scale() 是有副作用的 这个副作用是不仅仅将放大图像的大小 对于图像的其他数值属性 比如 图像的坐标 图像的线条宽度也会相应放大
5. content.transform( a,b,c,d,e,f  ) 
6. content.setTransform() 忽略之前的transform 重新设立新的默认transform状态 由于 transform状态会有叠加效果 所以 这有助于保存状态

设置矩阵变换

| 变换矩阵 |      |      |
| -------- | ---- | ---- |
| a        | c    | e    |
| b        | d    | f    |
| 0        | 0    | 1    |



| 变换矩阵各项参数 |      |      |
| ------------- | -------------- | ------------- |
| a 水平缩放(1) | b 水平倾斜(0)  | c垂直倾斜(0)  |
| d 垂直缩放(0) | e 水平位移 (0) | f 垂直位移(0) |





！fill（）会使未填充的路径 进行路径封闭并填充 closePath对fill()将会失效



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



线性渐变

//参数 xstart  ystart  xend  yend

```javascript

```



径向渐变

//参数 x0 y0 r0 x1 y1 r1

```

```







