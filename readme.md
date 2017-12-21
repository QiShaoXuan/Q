# Q

记录碰到的有趣的和自己写的常用代码，封装在Q函数中。

* [`noRepeat`](#noRepeat)

* [`arrayMax`](#arraymax)

* [`arrayMin`](#arrayMin)

* [`chunk`](#chunk)

* [`countOccurrences`](countOccurrences)

* [`flatten`](flatten)

* [`diffrence`](diffrence)

* [``]()

* [``]()

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

```javascript
const countOccurrences = (arr, value) => {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}
```

### flatten

已depth作为深度降维多维数组
depth默认为-1将多维数组降维为一维数组

```javascript
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

```javascript
const diffrence = (arrA, arrB) => {
  return arrA.filter(v => !arrB.includes(v))
}
```



## 参考

> <a href="https://github.com/Chalarangelo/30-seconds-of-code">30-seconds-of-code</a>