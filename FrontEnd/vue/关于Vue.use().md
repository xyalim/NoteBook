Vue.use(element) ... Vue.use(MyPlugin)

通常 我们使用vue插件的时候我们都会用到Vue.use 但是Vue.use又是怎么工作的呢？

首先 我们创建一个自定义插件 MyPlugin

```
let myOptions;
function myPlugin(options){
    myOptions = options;
}
// 该对象具备 install 函数
myPlugin.install = function (Vue) {
    // mixin
    Vue.mixin({
        created() {
            // 判断当前的组件名  
            if( this.$options.name === 'about' || this.$options.name ==='home' ){
                // 根据Vuex 去调用 改变数据(谁改)？
                this.$store.dispatch('addByAct');
            }
            
        },
    })
}
export default myPlugin;
```

其中 上述有install函数 是我们使用Vue.use()函数时必须要用到的一个函数 因为Vue.use工作原理就是 传入一个install函数 给Vue.use 而use函数就识别install函数 进而使该插件安装至Vue自身

