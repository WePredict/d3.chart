"use strict";
/*jshint unused: false */

var hasOwnProp = Object.hasOwnProperty;

var d3cAssert = function(test, message) {
	if (test) {
		return;
	}
	throw new Error("[d3.chart] " + message);
};

d3cAssert(d3, "d3.js is required");
d3cAssert(typeof d3.version === "string" && parseInt(d3.version.slice(0,1)) >= 4,
	"d3.js version 4 or later is required");
