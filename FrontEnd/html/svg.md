### 学习SVG



SVG内的标签 

line标签   线



SVG图形

1. 样式操作		跟HTML一样  （推荐使用style）

2. 事件操作		跟HTML一样

3. 属性

   设置操作

   1. HTML	

      ex: p.style.color="red"	p.setAttribute()

   2. SVG

      只能使用 setAttribute

   获取操作

   1. ​	HTML

      ex: p.style.color 		p.getArrtibute

   2. SVG

      只能使用getAttribute

   总结：SVG 操作属性只能使用 set/getAttribute

4. Dom操作



   创建 需要添加svg命名空间才可使用

   createElementNs('http://www.w3.org/2000/svg','line')

5. 

#### SVG样式优先级

svg样式的两种写法

1. 属性形式
2. style形式 --------推荐 优先级更高 写法更简洁

```html
HTML

<style>
#l1{
  stroke:green;
}
</style>
 
<html>
	<body>
		
		<line id="l1" x1="100" y1="100" x2="400" y2="300" stroke="red" ></line>
		
	</body>
</html>

```

上述代码示例中 真实有效的样式是 #l1 内的样式` stroke:green;` 

tips: SVG内的属性形式的样式的优先级是最低



# path 路径

#### 用path画矩形

```html
<svg width="800" height="600">

    <path
    d="
    M 100,100
    L 400,100
    L 400,300
    L 100,300
    Z
    "
    style="stroke:red;fill:none"

    >
    </path>

    <!-- 
    {
    d:{//描述多边线
    M: 起始点 move to
    L: 连接线 line to
    Z: 闭合

    !关于大小写的区别
    *大小写的含义分别是绝对坐标与相对坐标
    *相对坐标是相对于上一个坐标
    }

    }
    -->

</svg>
```

#### 用path 画弧

```html

```

