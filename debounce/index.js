module.exports = function (func, ms) {
  var timer;

  return function () {
    var _this = this, _args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      func.apply(_this, _args);
    }, ms);
  };
};
