
module.exports = function (func){
  var _len = func.length;
  var _args = [];
  var _curry = function (func, n) {
    if (n === _len) {
      return func.apply(null, _args);
    } else {
      return function () {
        for(var i = 0; i < arguments.length; i+=1){
          _args[n + i] = arguments[i];
        }
        return _curry(func, n + arguments.length, func.length);
      };
    }
  };

  return _curry(func, 0, func.length);
};
