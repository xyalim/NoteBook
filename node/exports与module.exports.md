node 中的module.exports 是用于输出模块的

而 exports 是 对 module.exports的引用

当 module.exports被赋值时 对象指向变更 使得 exports 指向的对象与 module.exports 完全不同

所以 在module.exports被赋值之前

exports === module.exports // true

在 module.exports 被赋值以后

exports === module.exports // false