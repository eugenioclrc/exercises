var flatten = function(arr){
  return arr.reduce(function(a, b){
    if (typeof b === 'object') {
        return a.concat(flatten(b));
    } else {
      return a.concat(b);
    }
  }, []);

};


module.exports = flatten;
