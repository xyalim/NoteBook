1. JS的原型

   原型可以理解为模板 他是实例对象的初始模型

2. 变量作用域链

   变量作用域链实际上就是作用域的层级结构

3. call、apply、bind的区别

   call

4. 防抖和节流的区别

   防抖：设置间隔时间 在间隔时间内触发对应事件时 对应事件或函数失效 且间隔时间重置 需要实际等待时间大于间隔时间后才能继续进行对应事件

   节流：设置间隔时间 在间隔时间内无法触发对应事件或函数

5. 介绍下浏览器跨域

   浏览器跨域实质是浏览器的同源保护策略 该策略是出于web安全考虑而设置的 解决该问题有三种方案

   1.利用jsonp

   2.后端设置对应允许的请求头

   3.在设置允许访问的后端服务器请求数据 且后端服务器帮助前端请求有跨域问题的数据

   总结 需解决跨域问题需与后端配合

6. 怎么去解决跨域问题

   参考上一问

7. jsonp方案需要服务端怎么配合

   jsonp实质上是利用html的请求没有同源策略这一方面的问题 从而发送数据请求 利用html的script节点与后端配合请求数据 

   而实现该方案 前端先设置一个函数 该函数将需要获取的数据设为参数 而后端 则是调用前端这一特定的函数 且将数据传入该函数中 从而达到数据的传输

8. Ajax发生跨域要设置什么（前端）

9. Javascript作用链域?

   作用域链实质上就是作用域的分层

10. JavaScript 中，调用函数有哪几种方式？

    1. function a(){}  a()
    2. (function(arg){})(window)
    3. func.bind(sth)()
    4. func.call()
    5. func.apply()

11. cookie的作用和特点

    cookie可以用于保存客户端的页面状态和保存必须的数据 其允许保存数据的量极少 每个cookie允许保存的数据量和数据个数都极少 他可以设置自我销毁时间 以确保页面状态的可控性

12. 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

    输入URL=>请求服务器=>获取页面资源=>DOM渲染=>期间响应页面链接的请求获取相关资源

13. vue的优点是什么？

    vue是一个渐进式的框架 其核心只实现了数据绑定跟虚拟dom渲染 专注于mvvm中vm 数据模型的实现 若需要其他特定功能 可以添加插件加以实现

14. 请详细说下你对vue生命周期的理解

    vue生命周期 created（被创建）beforeCreated（被创建前）beforeMount（被挂载前）mounted（被挂载）beforeUpdate（数据更新前）updated（数据更新） beforeDestory（实例销毁前） destoryed（实例销毁后）actived（keep-alive组件被激活时存在）deactived（keep-alive组件停用时调用）

    以上是vue生命周期钩子函数 其中 归纳为 创建 挂载 更新 销毁 这四方面各自都有其行为执行前的钩子函数 而keep-alive组件较为特别 拥有avtived 与 deactived

15. 组件之间的传值？(代码说明)

    父组件传值至子组件

    ```html
    <div id="app">
    		<global></global>
    </div>
    
    	<template id="global">
    		<div><!-- 必须只有一个根节点 例如这个div-->
    			
    			<h1> 全局组件{{msg}} </h1>
    			<button @click="msg++">+</button>
    			
    			<input type="" v-model="fatherMsg">
    
    			<!-- 直接传固定的内容 -->
    			<local fromfather="fatherMsg"></local>
    
    			<!-- 传动态的内容 通过v-bind -->
    			<local :fromfather="fatherMsg"></local>
    		</div>
    
    	</template>
    
    	<template id="local">
    		
    		<div class="local">
    			<h1>局部组件</h1>
    			<p> 父亲: {{fromfather}}</p>
    		</div>
    
    	</template>
    
    
    	
    <script src="./js/lib/vue.js"></script>
    <script>
    	var localObj ={
    		template:"#local",
    		// 接收父组件传入的数据
    		props:{
    			fromfather:{
    				type:[Number,String],
    				// 默认值
    				default:100,
    				// 验证函数
    				validator:function (value) {
    					return value.indexOf('傻')>=0?false:true;	
    				}
    			}
    		},
    		data(){
    			return {
    				sonMsg: '来自子组件'
    			}
    		}
    	}
    
    	Vue.component('global',{
    		template:'#global',
    		data(){		//组件中 data必须写成函数形式 返回对象
    			// 为了让组件服用时 组件内部的数据是独立的 每个组件都是独立运行
    			return {
    				msg:1,
    				fatherMsg:"来自子组件"
    			}
    		},
    		components:{	//子组件
    			local:localObj
    		},
    		
    	})
    
    
    	new Vue({
    		el: '#app',
    		data:{
    
    		},
    		methods:{
    
    		},
    
    		// 最大的vue实例上也可以使用components
    		components:{}
    	})
    
    
    </script>
    ```

    ​	子组件传值至父组件

    ```html
    <div id="app">
    		<global></global>
    </div>
    
    <template id="global">
    		
    		<div><!-- 必须只有一个根节点 例如这个div-->
    			
    			<h1> 父组件{{sonData}} </h1>
    			<!-- 子向父通信 监听自定义事件 (@)v-on:to-father
    				 需要子组件主动触发  子组件.$emit('tofather')
    			 -->
    			<local @tofather="getSon"></local>
    			<local v-on:tofather="getSon" ></local>
    			<!-- 没有 v-on: 下面的local发送信息给父元素 -->
    			<local></local>
    		</div>
    
    </template>
    
    
    <template id="local">
    		
    		<div class="local">
    			<h1>子组件</h1>
    			<input type="text" v-model="sonMsg" />
    			<button @click="sendToFather">向父组件发送</button>
    		</div>
    
    </template>
    
    <script>
    	var localObj ={
    		template:"#local",
    		data(){
    			return {
    				sonMsg:''
    			}
    		},
    		methods:{
    			sendToFather(){
    				console.log('xixi');
    				console.log(this.sonMsg)
    				// 这里向 v-on:tofather 发送信息
    				// $emit(事件名,传参1,传参2,传参n....)
    				this.$emit('tofather',this.sonMsg) 
    			}
    		}
    	}
    
    	Vue.component('global',{
    		template:'#global',
    		
    		components:{	//子组件
    			local:localObj
    		},
    		data(){
    			return{
    				sonData:""
    			}
    			
    		},
    		methods:{
    			getSon(sonData){
    				console.log('haha 儿子来信息啦：',sonData)
    				// 接收到自定义事件的传参后
    				this.sonData = sonData;
    			}
    		}
    		
    	})
    
    
    	new Vue({
    		el: '#app',
    		data:{
    
    		},
    		methods:{
    
    		},
    
    		// 最大的vue实例上也可以使用components
    		components:{}
    	})
    </script>
    
    ```

    ​	非父子组件之间通信

    ​	利用vuex 状态管理

    ​	

16. vuex是什么？怎么使用？哪种功能场景使用它？

    vuex是vue的状态管理插件 他需要通过npm安装并在vue项目中引入 如果需要管理全局变量 使用他是最合适的

17. Vue computed 实现

18. Vue 组件 data 为什么必须是函数

    防止组件间的变量污染 因为函数都有各自的作用域可以防止变量污染