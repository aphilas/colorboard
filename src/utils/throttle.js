function throttle (fn, delay) {
  let time = Date.now()

  return function (...args) {
    let ctx = this

    // delay has elapsed, run fn, reset last run time
    if (((time + delay) - Date.now()) < 0) {
      fn.apply(ctx, ...args)
      time = Date.now()
    }
  }
}

export default throttle