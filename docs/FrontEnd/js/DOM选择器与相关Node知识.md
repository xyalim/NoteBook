## **DOM选择器与相关Node知识**



#### 阮一峰https://wangdoc.com/javascript/dom/node.html

#### **Joker_Yehttps://blog.csdn.net/hj7jay/article/details/53389522**

1. DOM选择器 节点查找
2. **节点访问关系** 
3. 节点方法有哪些

#### **一、DOM选择器 节点查找**

1. ##### getElement系列

2. ##### querySelector系列



1. getElement系列
   1. **getElementById**
   2. **getElementsByName**
   3. **getElementsByTagName**
   4. **getElementsByClassName**

2. querySelector系列

   1. querySelector
   2. querySelectorAll



###### JavaScript实现DOM对象选择器(实现jquery Dom选择器)https://www.jb51.net/article/93367.htm





### **二、节点访问关系**

### 除了 **根节点** 其他节点都有三种层级关系

- #### 父节点关系 **parenentNode**

- #### 子节点关系 **childNode**

- #### 兄弟节点关系 **sibling** 

### 所有 DOM 节点对象都继承了 [**Node 接口**](https://wangdoc.com/javascript/dom/node.html)，拥有一些共同的属性和方法。这是 DOM 操作的基础。

- [Node.prototype.parentNode](https://wangdoc.com/javascript/dom/node.html#nodeprototypeparentnode)
- [Node.prototype.parentElement](https://wangdoc.com/javascript/dom/node.html#nodeprototypeparentelement)
- [Node.prototype.nextSibling](https://wangdoc.com/javascript/dom/node.html#nodeprototypenextsibling)
- [Node.prototype.previousSibling](https://wangdoc.com/javascript/dom/node.html#nodeprototypeprevioussibling)
- [Node.prototype.firstChild，Node.prototype.lastChild](https://wangdoc.com/javascript/dom/node.html#nodeprototypefirstchild%EF%BC%8Cnodeprototypelastchild)
- [Node.prototype.childNodes](https://wangdoc.com/javascript/dom/node.html#nodeprototypechildnodes)

以上为关系节点的Node属性

### **三、节点方法有哪些**

 [**Node 接口**](https://wangdoc.com/javascript/dom/node.html)

最常用的有哪些



### 1.  **克隆节点** Node.prototype.cloneNode() 

   ```javascript
   var dupNode = node.cloneNode(deep);
   ```

   最主要的注意要点 （**注意要点不局限于下列此处仅列举最为需要注意的要点**  详情请看[**cloneNode()**](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode)介绍

   1. 克隆一个节点，会拷贝该节点的所有属性 但不会拷贝该节点的`addEventListener` 方法 和`on-`属性（即`node.onclick = fn`），添加在这个节点上的事件回调函数。例如：

      ```javascript
      <div id="box">点我</div>
      <script type="text/javascript">
          var box=document.getElementById('box')
          box.onclick=function(){alert(1)}
          document.body.appendChild(box.cloneNode(true));
      </script>
      ```

      但是加入是在html上写`on-`属性的话 会复制该属性且有效 例如

      ```javascript
      <div id="box" onclick='alert(1)'>点我</div>
      ```

   2. 假如在被复制标签内含有script标签（**内嵌式script标签**） 则只会在被复制标签处运行一次   

      ```javascript
      <div id="box">
          <script type="text/javascript" >alert(1)	</script>
      </div>
      ```

   3. 假如是在（**外链式script标签**）script 则会 

      ```javascript
      <div id="box">
          <script type="text/javascript" src='clone.js'></script>
      </div>
      ```

      在非IE浏览器中alert只执行一次

      在IE中，只有IE6会执行两次alert

   4. 想要克隆一个节点来添加到另外一个文档中,请使用[`Document.importNode()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/importNode)代替本方法.



   关于更多的cloneNode的坑与解决方法：

   https://blog.csdn.net/acs1899/article/details/10325841

### 2. **插入节点** Node.insertBefore()
   ```javascript
   var insertedNode = parentNode.insertBefore(newNode, referenceNode);
   ```

   参考节点之前插入一个节点作为一个指定父节点的子节点。





### 3.  **删除节点** Node.prototype.removeChild()

   ```javascript
   var divA = document.getElementById('A');
   divA.parentNode.removeChild(divA);
   ```

warn : 这个方法是在`divA`的父节点上调用的，不是在`divA`上调用的。

下述代码为移除当前节点的所有子节点

```javascript
var element = document.getElementById('top');
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```
warn ：被移除的节点依然存在于内存之中，但不再是 DOM 的一部分。所以，一个节点移除以后，依然可以使用它，比如插入到另一个节点下面。

如果参数节点不是当前节点的子节点，`removeChild`方法将报错。






### 4. **替换节点** Node.prototype.replaceChild()

```javascript
var replacedNode = parentNode.replaceChild(newChild, oldChild);
```

上面代码中，`replaceChild`方法接受两个参数，第一个参数`newChild`是用来替换的新节点，第二个参数`oldChild`是将要替换走的子节点。返回值是替换走的那个节点`oldChild`。

### 5. ...........



以上仅为个人使用较为频繁的DOM操作方法 详尽请查看下面的博客 网站 或者书籍

#### 阮一峰https://wangdoc.com/javascript/dom/node.html

#### **Joker_Yehttps://blog.csdn.net/hj7jay/article/details/53389522**

