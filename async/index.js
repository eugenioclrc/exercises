'use strict';

exports.sequence = function(funcs){
	
	var _done;
	var _cb = function(err, data, funcs){
		if (funcs.length === 0) {
			_done(err, data);
			return;
		}
		var f = funcs.shift();
		f(function(err, _data){
			_cb(err, _data, funcs);
		}, data);
	};

	_cb(null, '', funcs);

	return function(done){
		_done = done;
	};

};

exports.parallel = function (funcs) {
	var _done;
	
	var _ret = [];
	var _total = funcs.length;
	funcs.forEach(function(f,i){
		f(function(err, data){
			_total--;
			_ret[i] = data;
			if(_total === 0){
				_done(null,_ret);
			}
		});
	});

	return function(done){
		_done = done;
	};
	
};

exports.race = function (funcs) {
	var _done;
	
	var _raceEnd = false;
	
	funcs.forEach(function (f) {
		f(function(err, data){
			if(_raceEnd){
				return;
			}
			_raceEnd = true;
			_done(null, data);
			
		});
	});

	return function (done) {
		_done = done;
	};
};
