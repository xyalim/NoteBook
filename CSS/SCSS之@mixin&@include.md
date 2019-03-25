## SCSS之@mixin&@include



SCSS定义工具类我们可以这样做

scss:

```scss
@mixin silly-links {
  a {
    color: blue;
    background-color: red;
  }
}
@include silly-links;
```

编译后 css

```CSS
a {
  color: blue;
  background-color: red; 
}
```

