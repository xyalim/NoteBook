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

4. 

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









