## **关于require.js的那些坑**



#### **关于require.config**

1. baseUrl: 如果没有显式指定config及data-main，则默认的baseUrl为包含RequireJS的那个HTML页面的所属目录。
2. paths: 模块路径 可以写线上路径 会自动加上后缀 所以不需要写  数组形式是为了作为备选路径



1. 
2. paths