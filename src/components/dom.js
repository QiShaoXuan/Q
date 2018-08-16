const dom = {
  // 判断元素是否在可视范围内, partiallyVisible为是否为完全可见
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
  },
}

export default dom
