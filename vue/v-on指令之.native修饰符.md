.native 

作用：监听组件根元素的原生事件。

```html
<div id="home">
    
    <div id="nav">
      <!-- 跳转 路由的a标签-->
      
      <!-- <div class="list" v-for="(link,index) in linkList" :key="link.name">
         <router-link
        :to="link.path"
        >
        {{link.name}}
        </router-link>
        <span v-if=" index !=linkList.length-1"> | </span>
      </div>
      
    </div> -->
    
    <mt-navbar v-model="selected" class="mynav">
      <mt-tab-item v-for="(link,index) in linkList" :id="index" @click.native="topath(link.path)" :key="link.name">
        {{link.name}}
      </mt-tab-item>
      <mt-tab-item name="icon" class="search-icon"></mt-tab-item>
      <!-- <mt-tab-item id="2">选项二</mt-tab-item> -->
    </mt-navbar>

    <!-- tab-container -->
    </div>
    <!-- <mvl></mvl> -->
    <router-view class="g-content"/>
    
  </div>
```



其中

```html
<mt-tab-item v-for="(link,index) in linkList" :id="index" @click.native="topath(link.path)" :key="link.name">
        {{link.name}}
</mt-tab-item>
```

<mt-tab-item></mt-tab-item>是一个组件 正常来说 子组件在父组件中 添加@click是无法触发点击事件的 但当我们在@click后面添加修饰符 **.native**  则会将父组件的@click事件添加至**该对象的子组件**的**根元素**上