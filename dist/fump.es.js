var compose = function () {
  var funcs = [], len = arguments.length;
  while ( len-- ) funcs[ len ] = arguments[ len ];

  return function (data) { return funcs.reduceRight(function (value, func) { return func(value); }, data); };
};

var pipe = function () {
  var funcs = [], len = arguments.length;
  while ( len-- ) funcs[ len ] = arguments[ len ];

  return function (data) { return funcs.reduce(function (value, func) { return func(value); }, data); };
};

var map = function (func) { return function (data) { return Array.prototype.map.call(data, func); }; };

var filter = function (func) { return function (data) { return Array.prototype.filter.call(data, func); }; };

var reduce = function (func) { return function (data) { return Array.prototype.reduce.call(data, func); }; };
var curry = function curry (func) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  return args.length === func.length ? func.apply(void 0, args) : curry.bind.apply(curry, [ this, func ].concat( args ))
};

var flatMap = function (func) { return function (arr) { return arr.reduce(function (prev, data) { return prev.concat(func(data)); }, []); }; };

var index = {
  compose: compose,
  pipe: pipe,
  map: map,
  filter: filter,
  reduce: reduce,
  curry: curry,
  flatMap: flatMap
};

export default index;
