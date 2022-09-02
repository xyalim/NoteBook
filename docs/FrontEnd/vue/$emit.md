$emit 即 使用当前实例的事件 比如子组件 引用父组件的方法时是这样写的



#### 子组件

```
<template>
	<div class="son">
		<button @click="$emit('fatherfun')">我将使用父组件的方法</button>
	</div>
</template>
```



#### 父组件

```
<template>
	<div class="father">
		<son @fatherfun="fatherfun" ></son>
	</div>
</template>

export default{
    methods:{
        fatherfun(){
            console.log('父亲我没有调用这个方法 是我儿子调用的')
        }
    }
}
```



当然 我们还可以通过这个特性 来实现 子组件传值给父组件 就是通过该方法 传入参数实现