普通监听 与 深度监听

深度监听 可监听到对象  数组的变化

<https://blog.csdn.net/qq_36688143/article/details/81287535>

使用watch

```javascript
const unWatch = app.$watch('text', (newVal, oldVal) => {
  console.log(`${newVal} : ${oldVal}`);
})
 
unWatch(); // 手动注销watch
```

若你采用的是 $watch的写法 则需要手动注销watch 否则会造成内存溢出的状况



test:()*=>*{

​                return this.propsVal.attr

​            },