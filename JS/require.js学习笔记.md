### require.js



```html
<!--This sets the baseUrl to the "scripts" directory, and
    loads a script that will have a module ID of 'main'-->
<script data-main="scripts/main.js" src="scripts/require.js"></script>
```

**data-main** 参数是 你的入口js文件

baseUrl亦可通过[RequireJS config](http://makingmobile.org/docs/tools/requirejs-api-zh/#config)手动设置。如果没有显式指定config及data-main，则默认的baseUrl为包含RequireJS的那个HTML页面的所属目录。



无需在module ID上再加".js"后缀 默认添加

​	

​	模块写法一

```javascript

define( function(require,exports,module){
	console.log('jq模块');
	console.log('require模块',require); //用于引入模块
	console.log('exports模块',exports); //用于输出
	console.log('module模块',module); // 当前模块内容
	
   var jq = {
   	name:'jq',
   	fun:unction(){
        console.log(this.name);
   	}
   } 
   // return jq; 输出方法一
   module.exports = jq; //输出方法二 推荐
       
   //module.id : 模块id 下面是修改该模块的id的写法
   //module.id = 'jq'  
});  


```

​	

​	模块写法二  给予某模块的写法

```

//定义模块的同时 依赖某些模块
//参数一 数组形式 里面存储依赖模块的路径
define(['../moduleB .js'],function(moduleB){
    
    console.log(moduleB);
    
    return{
        //这里是要输出的内容 
        //比较写法一 由于回调参数被模块形参占用 只能return
    }
    
})


```



​	主入口写法

```javascript
//main.js
//引入的配置
//当你要避开该config的解析过程 直接加载为一个相对于当前html文档脚本

// 1. 以 `.js` 结束
// 2. 以 `/` 开始 
// 3. 包含 URL协议 如 `http` or `https`

require.config({
    baseUrl:'./js/', //基础路径
    paths:{
        //模块路径 可以写向上路径 自动添加js后缀 加了后缀还会报错
        //下方的数组形式是为了作为备选路径 当第一个路径请求失败 超时
        //将启用下一个路径替代
 "jquery":"http://libs.baidu.com/jquery/2.0.3/jquery",
 "jquery2":["http://libs.baidu.com/jquery/2.0.3/jquery","http://libs.baidu.com/jquery/3.0.0/jquery"],
  "vue":"vue"
    }
})


//require函数
//参数一 依赖包的路径 可通过数组形式传入
//参数二 依赖包输出的东西的形参 按照顺序对应 以回调函数的形式传入
require(['./lib/jq','./myModule/moduleA'],  function($,moduleA){
    $.fun()
 })



```

在模块的示例中

require函数就是用于引入模块用的一个方法 如主入口用的require函数那样 可以在模块中再次引入别的模块依赖

exports 就是输出

module 是表示当前模块的内容

module输出的内容如下

```javascript
{
    id:'js/lib/jq.js', //这个可以修改
    uri:'js/lib/jq.js', //文件真实路径
    config:f(),
    exports:{},
    
}
```

