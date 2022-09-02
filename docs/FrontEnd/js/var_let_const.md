## **关于  let  const  var  的坑**

1. 声明提前：var
2. 局部声明：let
3. 常量声明：const

**共同点：**

1. 都是对值的声明
2. const 与 let 不可重复声明 否则报错 除了var
3. **const的作用域与let命令相同；只在声明所在的块级作用域内有效。**

**不同点**

1. **var作用为变量提升 先给变量开辟内存空间 尽管他的值是undefined**
2. const声明的同时 必须赋值且之后不可再赋值
3. let 块级作用域 可以运用在一些没有独立作用域的代码块里  例如 for



#### **块级作用域**

```javascript
function f1() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
} 
f1()
```

上面的代码有2个代码块，都声明了变量n，运行后输出5，说明了外层代码块不受内层代码块的影响，如果使用了变量var，那么输出的就是10；

```javascript
if (true) {
const aa = 1;
} 
console.log(aa);  // 报错
```



const的作用域与let命令相同；只在声明所在的块级作用域内有效。



#### **什么是变量提升？**

https://blog.csdn.net/demo_18/article/details/78493489



首先js引擎在读取js代码时会进行两个步骤，第一个步骤是解释，第二个步骤是执行。 
所谓解释就是会先通篇扫描所有的Js代码，然后把所有声明提升到顶端，第二步是执行，执行就是操作一类的。

```javascript
console.log(a);//输出结果 undefined
var a=10;
```

上述代码 输出a理应是 ` a is not defined` 但由于有了 var 变量提升 则使得其等价于下述代码

```javascript
var a;
console.log(a);//输出结果 undefined
a=10;
```

由于a尚未赋值使得a输出undefined。



### **拓展 函数声明提升**



