var gulp       = require('gulp');

gulp.task('watch', function(){
	gulp.watch('./app/**', ['bundle']);
});
