export function debounce(fn, delay) {
  let timerId = null;
  return function() {
    let args = arguments;
    timerId && clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay || 1000);
  }
}
