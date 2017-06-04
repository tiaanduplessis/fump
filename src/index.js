const compose = (...funcs) => data => funcs.reduceRight((value, func) => func(value), data)

const pipe = (...funcs) => data => funcs.reduce((value, func) => func(value), data)

const map = func => data => Array.prototype.map.call(data, func)

const filter = func => data => Array.prototype.filter.call(data, func)

const reduce = func => data => Array.prototype.reduce.call(data, func)
const curry = function curry (func, ...args) {
  return args.length === func.length ? func(...args) : curry.bind(this, func, ...args)
}

const flatMap = func => arr => arr.reduce((prev, data) => prev.concat(func(data)), [])

export default {
  compose,
  pipe,
  map,
  filter,
  reduce,
  curry,
  flatMap
}
