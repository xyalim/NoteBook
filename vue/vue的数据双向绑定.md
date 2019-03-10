vue的数据双向绑定

请试想一下 假如我们不借助Object.defineProperty()这个方法 那么我们又怎么实现数据视图层的双向绑定呢?

当我们直接更改object的方法

```js
//js
var obj = {
    a:10 
}
obj.a = 20;
```

像上述那样 我们切实更改了obj中属性a的值 但要是使得对应页面的视图层里内容也相应改变 显然是做不到的

假设页面上要显示对应a属性的值 那么他只能显示初始值 **10**

那么 我们想 能不能在他更改完值后又同时伴随相对应更改视图层的js逻辑以更改视图呢？

`Object.defineProperty()` 就是其中的主角 **vue3.0将使用es6新添加的代理Proxy代替Object.defineProperty()**

