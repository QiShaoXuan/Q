# Q

## 数组去重

```javascript
noRepeat(arr) {
    return [...new Set(arr)]
  }
```

## 查找数组最大

```javascript
arrayMax(arr) {
    return Math.max(...arr);
  }
```

## 查找数组最小

```javascript
arrayMin(arr) {
    return Math.min(...arr);
  }
```

## 返回已size为长度的数组分割的原数组

```javascript
chunk(arr, size = 1) {
    return Array.from({
      length: Math.ceil(arr.length / size)
    }
```

## 检查数组中某元素出现的次数

```javascript
(v, i) => arr.slice(i * size, i * size + size));
  }
```

## 扁平化数组，默认depth全部展开

```javascript
countOccurrences(arr, value) {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
  }
```

## 对比两个数组并且返回其中不同的元素

```javascript
flatten(arr, depth = -1) {
    if (depth === -1) {
      return [].concat(...arr.map(v => Array.isArray(v) ? this.flatten(v) : v))
    }
    if (depth === 1) {
      return arr.reduce((a, v) => a.concat(v), []);
    }
    return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v), [])
  }
```

## 返回两个数组中相同的元素

```javascript
diffrence(arrA, arrB) {
    return arrA.filter(v => !arrB.includes(v))
  }
```

## 从右删除n个元素

```javascript
intersection(arr1, arr2) {
    return arr2.filter(v => arr1.includes(v))
  }
```

## 截取第一个符合条件的元素及其以后的元素

```javascript
dropRight(arr, n = 0) {
    return n < arr.length ? arr.slice(0, arr.length - n) : [];
  }
```

## 返回数组中下标间隔nth的元素

```javascript
dropElements(arr, fn) {
    while (arr.length && !fn(arr[0])) arr = arr.slice(1);
    return arr;
  }
```

## 返回数组中第n个元素，支持负数

```javascript
everyNth(arr, nth) {
    return arr.filter((v, i) => i % nth === nth - 1)
  }
```

## 返回数组头元素

```javascript
nthElement(arr, n = 0) {
    return (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
  }
```

## 返回数组末尾元素

```javascript
head(arr) {
    return arr[0]
  }
```

## 判断当前位置是否为页面底部，返回值为true/false

```javascript
bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
  }
```

## 返回当前网页地址

```javascript
currentURL() {
    return window.location.href
  }
```

## 获取滚动条位置

```javascript
getScrollPosition(el = window) {
    return {
      x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
      y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    }
  }
```

## 获取url中的参数

```javascript
getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
      (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
    )
  }
```

## 页面跳转，是否记录在history中

```javascript
redirect(url, asLink = true) {
    asLink ? window.location.href = url : window.location.replace(url)
  }
```

## 滚动条回到顶部动画

```javascript
scrollToTop() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    } else {
      window.cancelAnimationFrame(scrollToTop);
    }
  }
```

## 时间戳转换为时间，默认为当前时间转换结果

```javascript
timestampToTime(timestamp = Date.parse(new Date()), isPHP = false) {
    const date = new Date(timestamp * (isPHP ? 1000 : 1))
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }
```

## 判断元素是否在可视范围内, partiallyVisible为是否为完全可见

```javascript
elementIsVisibleInViewport(el, partiallyVisible = false) {
    const {
      top,
      left,
      bottom,
      right
    } = el.getBoundingClientRect();
    return partiallyVisible ?
      ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
      top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  }
```
