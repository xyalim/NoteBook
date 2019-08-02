git pull https://gitee.com/xylimtest/0index-Note.git master && git add . && git commit -m "commit" && git push https://gitee.com/xylimtest/0index-Note.git master



### git笔记

http://html5book.bluej.cn/#/md/6-workflow/git/git%E7%9A%84%E4%BD%BF%E7%94%A8?id=base

`git pull`  其实就是 git fetch  + git merge

git checkout YYYY :  YYYY是分支之一 该命令是分支切换





git push -f 	// -f  **强推 无视差异** 强行推送远程git仓库

**添加远程库地址**

```git
git remote add origin <repo-address>        //把远程库的地址填入到<repo-address>
```

**把本地库文件和远程库文件进行合并**

```
git pull origin master
```

#### **！ origin可以改别的名字 master为对应分支的名字 其中 master为主分支**

### **设置操作的默认库和分支 （直接git pull   git push）**

```
git branch --set-upstream-to=origin/master
```

其中 origin为 **给该本地库添加远程库地址** origin可以改别的名字 时候添加的 master为主线分支 可以设置别的分支



**回退版本**

https://blog.csdn.net/daguanjia11/article/details/73810577

先查看要回退的时间点

```
git reset --hard d48bf2fcd99
```

`hard`的参数值就是第一步所获取到的id(不需要全部，可以截取其中一截就可以了)、



<<<<<<< HEAD:关于git命令.txt
参与github上的一些优秀的项目的通用例子

```
$git clone <远程Arepository> #克隆你fork出来的分支

$git remote add <远程Brepository标签> git@github.com:XXXX/ceph.git #添加远程Brepository标签

$git pull <远程B厂库标签> master:master  #从远程Brepository的master分支拉取最新objects合并到本地master分支

$git checkout YYYY #切换到要修改的分支上

$git branch develop; git checkout develop #在当前分支的基础上创建一个开发分支，并切换到该分支上，你将在该分支上coding

coding...... #在工作区coding

$git add .#将修改保存到索引区

$git commit -a #将修改提交到本地分区

$git push origin my_test:my_test #将本地分支my_test提交到远程A repository的my_test分支上
--------------------- 
作者：李艳坤 
来源：CSDN 
原文：https://blog.csdn.net/litianze99/article/details/52452521 
版权声明：本文为博主原创文章，转载请附上博文链接！
```

=======
#### 设置git全局账号密码

  需要输入用户名和密码是由于github上个人账户没有设置SSH keys，设置步骤大概为：
1、在github网站登录后，点击右上角的Accout settings ——> SSH keys ——> Add SSH key——> 将生成的公钥内容拷贝进去。
2、本机上个人目录需要创建.ssh目录，并且将公钥和私钥保存到这个目录。

我写了一篇个人博客：
http://blog.csdn.net/whu_zhangmin/article/details/12111663  



关于 `ssh -T git@github.com` 

假如遇到此提示

`Enter passphrase for key '/c/Users/Administrator/.ssh/id_rsa':`

这是要提示输入你设置ssh秘钥时候的密码 错误将循环提示至你退出

https://blog.csdn.net/huang3513/article/details/52837075



`关于永久保存git 账号密码`

https://blog.csdn.net/lyly4413/article/details/80691751
>>>>>>> f5f07ac7d6a1b5bc26a981200afa4a0b5d926bc2:关于git命令.md
