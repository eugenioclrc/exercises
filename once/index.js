
module.exports = function (func) {
  var _memo;
  var _run = false;
  return function(){
    if(_run){
      return _memo;
    }
    _run = true;
    _memo = func.apply(this, arguments);

    return _memo;
  };
};
