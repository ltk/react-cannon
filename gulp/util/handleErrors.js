var notify = require("gulp-notify");
var _      = require("underscore");

module.exports = function() {
	// Send error to notification center with gulp-notify
	var args = Array.prototype.slice.call(arguments);
	console.log(args);
	notify.onError({
		title: "Compile Error",
		message: "<%= error.message %>",
	}).apply(this, args);

	// Keep gulp from hanging on this task
	this.emit('end');
};
