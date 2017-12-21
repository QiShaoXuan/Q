class QMethods {
  //  数组去重
  noRepeat(arr) {
    return [...new Set(arr)]
  }

  //  查找数组最大
  arrayMax(arr) {
    return Math.max(...arr);
  }

  //  查找数组最小
  arrayMin(arr) {
    return Math.min(...arr);
  }

  //  返回已size为长度的数组分割的原数组
  chunk(arr, size = 1) {
    return Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size));
  }

  //  检查数组中某元素出现的次数
  countOccurrences(arr, value) {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
  }

  //  扁平化数组，默认depth全部展开
  flatten(arr, depth = -1) {
    if (depth === -1) {
      return [].concat(...arr.map(v => Array.isArray(v) ? this.flatten(v) : v))
    }
    if (depth === 1) {
      return arr.reduce((a, v) => a.concat(v), []);
    }
    return arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.flatten(v, depth - 1) : v), [])
  }

  //  对比两个数组并且返回其中不同的元素
  diffrence(arrA, arrB) {
    return arrA.filter(v => !arrB.includes(v))
  }
}


let Q = new QMethods();
