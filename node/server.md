## electron 实现原理就是基于谷歌浏览器内核 Chromium 和 NodeJS 共同研发

electron 有主进程 和 	渲染器 进程

主进程：electron 运行 package.json 的 main 脚本 的进程被称为主进程 在主进程中运行的脚本通过创建web页面来展示用户界面 一个Electron 应用总是有且只有一个主进程

渲染器进程：Electron使用了 Chromium的多进程架构  每个Electron中的web页面运行在它自己的渲染进程

Electron在Node.js的API支持下可以在页面中和操作系统进行底层交互