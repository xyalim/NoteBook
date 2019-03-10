## 2018_10_19 flex

## 

子项对应主轴对齐方式

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

​	它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

> - flex-start（默认值）：左对齐
> - flex-end：右对齐
> - center： 居中
> - space-between：两端对齐，项目之间的间隔都相等。
> - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。



```css
.m-list{
  display: flex;
  flex-wrap: wrap;  //自动换行
  align-items:center;	//交叉轴的中点对齐。
  justify-content: space-around; 每个项目两侧的间隔相等
  width: 100%;
}

.u-listitem{
  width: 48%;
}
```







当用flex出现最后一项居中的缺陷时

```css
.m-list{
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: space-around;
  width: 100%;
}
.m-list::after{
  /* 为弥补最后一项居中的缺陷 */
  content: "";
  width: 48%;	//这是弥补空白的宽度 按实际情况变更
  display: block;
  height:0;
}
```

