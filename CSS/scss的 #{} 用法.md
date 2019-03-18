## scss的 #{} 用法

有时候 我们写css会用到 calc()

这时 下面的写法就很尴尬了

```scss
width: calc(100% - calRem(110) - 10px);
```

因为上面的写法会使得 calRem 这个scss自定义方法以字符串的形式输出出去而不是先经过scss运算处理再输出

这时候就要用到本文主旨语法 #{} 用例如下

```scss
width: calc(100% - #{calRem(110)} - 10px);
```

