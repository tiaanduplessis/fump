const { flatMap } = require('./dist/fump.common')

const fill = flatMap(x => new Array(x).fill(x))
fill([1, 2, 3]) // => [ 1, 2, 2, 3, 3, 3 ]
