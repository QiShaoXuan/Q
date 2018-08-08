# Q

实现一些工具类函数

* [`noRepeat`](#noRepeat)
* [`arrayMax`](#arraymax)
* [`arrayMin`](#arrayMin)
* [`chunk`](#chunk)
* [`countOccurrences`](countOccurrences)
* [`flatten`](flatten)
* [`diffrence`](diffrence)
* [`dropRight`](dropRight)
* [`dropElements`](dropElements)
* [`everyNth`](everyNth)
* [`nthElement`](nthElement)
* [``]()
* [``]()



### noRepeat

数组去重

```javascript
const noRepeat = (arr) => {
  return [...new Set(arr)]
}
```

### arrayMax

找出数组中最大值

```javascript
const arrayMax = (arr) => {
  return Math.max(...arr);
}
```

### arrayMin

找出数组中最小值

```javascript
const  arrayMin = (arr) => {
  return Math.min(...arr);
}
```

### chunk  

返回已size为长度的数组分割的原数组

```js
const chunk = (arr,size=1) => {
  return Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size));
}
```

### countOccurrences

返回数组中某个值的出现次数

```js
const countOccurrences = (arr, value) => {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}
```

### flatten

已depth作为深度降维多维数组
depth默认为-1将多维数组降维为一维数组

```js
const flatten = (arr, depth = -1) => {
  if (depth === -1) {
    return [].concat(...arr.map(v => Array.isArray(v) ? this.flatten(v) : v))
  }
  if (depth === 1) {
    return arr.reduce((a, v) => a.concat(v), []);
  }
  return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v), [])
}
```

### diffrence

数组A与数组B的不同元素

```js
const diffrence = (arrA, arrB) => {
  return arrA.filter(v => !arrB.includes(v))
}
```

### dropRight

从右删除n个元素

```js
const dropRight = (arr, n = 0) => {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}
```

### dropElements

截取第一个符合条件的元素及其以后的元素

```js
const dropElements = (arr, fn) => {
  while (arr.length && !fn(arr[0])) arr = arr.slice(1)
  return arr;
}
```

### everyNth

返回数组中下标间隔nth的元素

```js
const everyNth = (arr, nth) => arr.filter((v, i) => i % nth === nth - 1)
```

### nthElement

返回数组中第n个元素，支持负数

```js
const nthElement = (arr, n = 0) => (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
```



## 参考

> <a href="https://github.com/Chalarangelo/30-seconds-of-code">30-seconds-of-code</a>