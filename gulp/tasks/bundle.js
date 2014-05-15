var browserify   = require('browserify');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');

gulp.task('bundle', function(){
	return browserify({
			entries: ['./app/cannode.js'],
			extensions: ['.jsx', '.hbs']
		})
		.bundle({debug: true})
		.on('error', handleErrors)
		.pipe(source('cannode.js'))
		.pipe(gulp.dest('./server/public/assets/javascripts'))
});
