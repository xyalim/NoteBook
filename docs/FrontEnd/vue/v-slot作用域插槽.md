# 关于v-slot的作用域插槽的注意事项

#### v-slot是vue2.6起的新特性 该指令将代替vue2.6以前的slot  而slot将一直存在于vue2.0版本 3.0将不予支持 故尽量在vue2.6以上版本使用

#### **父组件中**

```html
<!--- datelist子组件在父组件中被调用 --->
<datelist>
            <template v-slot:testslot="son">
                 {{ son.user.firstName }}
                 {{ son.check.lastName }}
            </template>
</datelist>
```

#### **子组件中**

```html
<template>
    <!--- "datelist" --->
    <ul class="datelist clearfix">
      <slot name="testslot"  :user="name" :check="name" >
          {{ check.lastName }}
      </slot>
    </ul>
</template>

<script>
export default {
    
    data(){
        return{
            selected:0,
            name:{
                firstName:'firstName',
                lastName:'lastName'
            }
        }
    },
   
}
</script>


```



上面示例中用到了插槽的用法有

1. 具名插槽
2. 作用域插槽



父组件内调用子组件时绑定的属性`v-slot:testslot="son"`   

正常情况下 父组件中插槽的命名是这样的: `v-slot:testslot` 

而名字`testslot`  将赋予给插槽内的`name` 属性



而加入你需要使用作用域插槽 则会变成这种形式 `v-slot:testslot="son"`

其中的`son` 是将插槽内的作用域指向到son处 而父组件内的

 `{{ son.user.firstName }}`   

`{{ son.check.lastName }}`

则是使用son作用域内的user 、check  属性

#### 按照常理来说 `user` `check`应该是两个不同的对象才对 然而在这个示例里面 这两个对象其实是同一个！

因为在子组件当中 user check绑定的是插槽内的同一个对象 name

#### 这是因为父组件中的 `son.user` `son.check`  里面的`user` `check` 其实指的是插槽绑定的属性名

而子组件内插槽将他作用域内的 `name` 对象赋值给了`user`  `check` 这两个绑定属性

