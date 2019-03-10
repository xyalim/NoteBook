引入全局scss配置跟vue-cli版本相关

在vue-cli2将被淘汰 不在此复述

vue-cli3 配置需要修改的文件：

vue.config.js

```js
module.exports = {
    // 引入全局scss需要的配置
    css: {
        loaderOptions: {
          sass: {
            data: `
              @import "@/assets/styles/_public.scss";
              @import "@/assets/styles/_function.scss";
            `
          }
        }
    }
}
```