#### Vue 之 $on

其实 $on对应的就是 v-on

$on 是监听vue对象上的事件是否被触发 并且当事件触发时 触发对应的回调函数 该方法可通过新建vue对象与$emit配合实现非父子组件通信

该vue是独立于第三方的vue对象

```html
<html>
    <body>
        <div id="app">
            
        </div>
        
        <template id="zujianA">
        	<div id="A">
                
            </div>
        </template>
        <template id="zujianB">
        	<div id="B">
                
            </div>
        </template>
        
        <script>
            let other = new Vue()；
            
            //发信方 事件方
            //$emit: 参数一 调用该实例上的自定义方法
            //参数二 将需要传入的参数传入到自定义方法中
            Vue.component('A',{
              template:'#zujianA',
                created(){
                    other.$emit('suibianyigefangfa','val')
                }
            })
            //收信方 监听方 
            //$on: 参数一监听该vue实例上的方法
            //参数二 获取该方法上传入的参数
            Vue.component('B',{
              template:'#zujianB',
                created(){
                    other.$on('suibianyigefangfa',(res)=>{
                        console.log(res) // 'val'
                    })
                }
            })
            
            new Vue({
                el:'#app'
                
            })
        </script>
    </body>
</html>
```



```javascript

```



```

```

