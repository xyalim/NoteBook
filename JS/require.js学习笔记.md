### require.js



```html
<!--This sets the baseUrl to the "scripts" directory, and
    loads a script that will have a module ID of 'main'-->
<script data-main="scripts/main.js" src="scripts/require.js"></script>
```

**data-main** 参数是 你的入口js文件

baseUrl亦可通过[RequireJS config](http://makingmobile.org/docs/tools/requirejs-api-zh/#config)手动设置。如果没有显式指定config及data-main，则默认的baseUrl为包含RequireJS的那个HTML页面的所属目录。



无需在module ID上再加".js"后缀 默认添加





