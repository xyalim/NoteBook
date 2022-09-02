## webpack学习笔记



首先我们得认清楚 webpack并不难 相反的 只要弄懂它的原理 其实他还是比较简单的



首先我们得先了解 webpack的原理

webpack实质上就是通过配置的各个模块组件规则对相应的文件进行打包

最开始我们先知道webpack的配置文件输出的对象属性分别是什么

在此之前 我们需要知道webpack的配置文件 webpack.config.js 当然 我们可以不使用这个js的命名 **这只是webpack的默认接收配置的文件名** **你可以通过命令 -config 来指定webpack的配置文件是什么** 

当我们新建webpack.config.js 的时候 是不是什么也没有 别着急 我们得先想想 webpack是什么 他的工作原理是什么？ 

**其实，webpack他就是一个运行在node环境下的一个js模块**

 webpack他能做什么？打包！ 既然要打包 那么他需要node提供什么方法，什么模块给他才能够对文件进行操作？ 

没错 就是 node的 **path模块**

**所以 我们的 webpack.config.js 首先要写的就是 这一行命令**

```javascript
const path = require('path')
```

那么 我们有了含有path模块的path变量 接下来要做啥？

接下来 我们就需要输出一个对象 而这个对象呢 就是提供webpack得知你需要如何操作webpack的一个对象

合起上述代码形式如下

```javascript
const path = require('path')

module.export = {
    
}
```

这时候问题来了 我不知道输出的对象里属性要咋写 这时候我们就要知道以下的属性

#### 首先是 entry

entry他是一个入口 他定义了入口文件的位置

**单入口**就一个字符串形式表示

但当有**多入口** 即多页面时候 就需要以对象 json 的键值对形式表示出来

形如下方

```javascript

module.export={
// 这是单入口形式
	entry:'./src/index.js'
}
```

```javascript

module.export={
// 这是多入口形式
	entry:{
        index:'./src/index.js',
        admin:'./src/admin.js'
	}
}
```

那么既然有入口，就得有出口，不然只进不出不得吃撑2333

#### 出口就是 output

那么 上面有单入口跟多入口 那么出口就得有相对应的变化 总不能两个文件打到同一个文件上吧？形如下方

```Javascript
module.export = {
    //当我是单入口的时候
    entry:'./src/index.js'，
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.min.js'
        //bundle.min.js 仅仅是习惯命名 并非强制命名
    }
}
```

```javascript
module.export = {
    // 这是多入口形式
	entry:{
        index:'./src/index.js',
        admin:'./src/admin.js'
	}
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].min.js'
 		//注意 请跟上边的代码块作对比
//[name]表达的其实是占位符 打包后与entry属性里边的键名一一对应
    }
}
```

形如 [name]\[id] [hash]\[chankhash] 这四个 都是占位符 只是展示的内容各有不同罢了

其中 output属性内的 path属性 有这样的一行代码

`path:path.resolve(__dirname,'build')`

首先 path.resolve()是什么  ，__dirname 是什么 ， 'build'又是什么鬼 先一个个看

##### path.resolve([...paths])

```javascript
下面解释来源于 http://nodejs.cn/api/path.html#path_path_resolve_paths、

1.path.resolve()方法可以将路径或者路径片段解析成绝对路径
2.传入路径从右至左解析，遇到第一个绝对路径是完成解析，例如path.resolve('/foo', '/bar', 'baz') 将返回 /bar/baz
3.如果传入的绝对路径不存在，那么当前目录将被使用
4.当传入的参数没有/时，将被传入解析到当前根目录
5.零长度的路径将被忽略
6.如果没有传入参数，将返回当前根目录


path.resolve('/foo/bar', './baz');
// 返回: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

##### __dirname

__dirname其实就是当前文件的绝对路径

参考文章  https://www.jianshu.com/p/76966243f27f

到了这里我们有了webpack的一个大致的了解



#### webpack重要的概念 loader  tips 这不是配置文件要输出的东西

#### loader就是帮助webpack处理js以外的文件

### 首先我们要知道 webpack只能处理js文件 那为什么webpack可以处理 js以外的文件？

这里就是用到了loader  loader 实质上就是文件解析器

下载方式 npm 形如下方

```
npm i style-loader css-loader
```

用法

```javascript

module.export = {
	//...省略其余代码
	module:{
        rules[
            {
                test:/\.css$/,  //文件匹配规则
                use:'css-loader' //用到的loader
            }
        ]
	}

}
```

```javascript
module.export = {
	//...省略其余代码
	module:{
        rules[
            {
                test:/\.css$/,  //文件匹配规则
                use:['style-loader','css-loader'] 
                //注意 与上方的写法比较 这里用到了数组语法
    			//注意 loader使用顺序从后到前 从右到左
    	// style-loader：使css样式变成html里的一部分
    	// css-loader: 预先处理css文件 只是使其放进webpack中
            }
        ]
	}

}
```

### 再次注意 loader使用顺序从后到前 从右到左

记住 ： loader 是先与webpack执行的 因为 这些非js文件打包需要先经过loader的预处理使的webpack可以识别

形如上述的例子 为什么需要上面用两个loader？ 

因为 css-loader的工作 只是将css文件包装成webpack可以识别的形式 它实质就是把css文件里的内容包装在一个字符串里 然后输出出去 这时候 style-loader就是接收这个包装好了的字符串 并且将其输出到页面上 往html文件打入style标签 css的内容往style标签里面放 就实现了打包的效果

### 再次注意 loader使用顺序从后到前 从右到左



### webpack的插件   plugins 用以增强webpack自身的功能





