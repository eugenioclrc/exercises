'use strict';

var value = function (v) {
	if (typeof v === 'function') {
		return value(v());
	}
	return v;
}

module.exports = value;