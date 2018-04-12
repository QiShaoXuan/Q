class Q_browser {
  // 判断当前位置是否为页面底部，返回值为true/false
  bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
  }

  // 返回当前网页地址
  currentURL() {
    return window.location.href
  }

  // 判断元素是否在可视范围内
  // partiallyVisible为是否为完全可见
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

  // 获取滚动条位置
  getScrollPosition(el = window){
    return {
      x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
      y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    }
  };

  // 获取url中的参数
  getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
      (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
    )
  }

  //  页面跳转，是否记录在history中
  redirect(url,asLink=true){
    asLink?window.location.href = url:window.location.replace(url)
  }

  //  滚动条回到顶部动画
  scrollToTop(){
    const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop > 0){
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }else{
        window.cancelAnimationFrame(scrollToTop);
    }
  }
}
