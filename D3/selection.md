### selection 选择器

d3支持链式操作

select()

```javascript
d3.select('p')
// return an p tag
```

selectAll()

```javascript
d3.selectAll('li')
// return all li tag
```

append()

```javascript
d3.select('ul')
.append('li')
// append a li tag to the ul tag
```

data()

```javascript
const dataset = [1,2,3,4,5,6,7,8,9,0];

d3.select('ul')
.selectAll('li')
.data(dataset)
// combind data in li tags
```

enter()

```html
<body>
   <ul></ul>
</body>
```



```javascript
const dataset = [1,2,3,4,5,6,7,8,9,0];

d3.select('ul')
.selectAll('li)
.data(dataset)
.enter()
//while selected elements fewer elements then data item 
//it creates the missing elements
```

text()

```javascript
d3.select('a')
.text('change a tags text')

```

```javascript
const dataset = [1,2,3,4,5,6,7,8,9,0];

d3.select('ul')
.selectAll('li)
.data(dataset)
.enter()
.text(el=>el)
// you can use the callback function to control
```

attr()

```javascript
d3.select('body')
.append('svg')
.attr('width',100)
.attr('height',100)
.append('rect')
.attr('fill','red')
// function attr can add property what you want to add a tag property
```

