## **关于null & undefined 的坑**



有以下问题

1. null & undefined 这两者类型分别是什么？
2. undefined == null 结果是什么？
3. null转为数字得什么 undefined又是什么？
4. 既然null & undefined 如此相似 为什么又要设计这两种数据类型？





1. null & undefined 这两者类型分别是什么？

   undefined表示变量声明但未初始化时的值，
   null表示准备用来保存对象，还没有真正保存对象的值。从逻辑角度看，null值表示一个空对象指针

   故

   typeof null        //object
   typeof undefined       //undefined



   其中

   null是历史遗留bug 由于历史原因 无法更改该bug 因为会影响很多旧的js脚本运行。

   关于更多null的讨论请自行搜查资料 在此不再深究

2. undefined == null 结果是什么？

   首先 要求出结果可直接试着运行即可

   得出 true

   实际上，**undefined值是派生自null值的**，ECMAScript标准规定对二者进行**相等性测试要返回true**

   **注意** undefined & null 转为Boolean值均为false

   **但是**这不能证明他们就是相等 因为等位运算符不做隐式转换 无法将两者转为Boolean值再做出比较。

3. null转为数字得什么 undefined转为数字又是什么？

   +null //0

   +undefined //NaN

   其中 null被转为0是为了迎合c语言null转数值得0的传统

4. 既然null & undefined 如此相似 为什么又要设计这两种数据类型？

   首先 undefined值是只要你声明变量后未赋值 就会自动填充

   而null 则是需要将变量自行赋值为null

   而这两者的不同决定了用法的不同，undefined可以提示变量有无定义，从而显性的表示出来，为开发者提醒你的变量未赋值，而null则是开发者自行赋值，则表示出开发者是在知道该变量为空的情况。

   其中 null通常用于释放不需要的数据 节省内存空间
