var gulp = require('gulp'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	//uglify = require('gulp-uglify'),
	//cssmin = require('gulp-cssmin'),
	browserSync = require('browser-sync');
	//jshint = require('gulp-jshint'),
	//jshintStylish = require('jshint-stylish');

gulp.task('default', ['sass', 'server', 'watch']);

gulp.task('sass', function(){
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('sites/site_files'))
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

// Minifica js: .pipe(uglify())
// Minifica css: .pipe(cssmin())

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: 'sites',
			index: 'site.html'
		}
	});

	gulp.watch('sass/**/*').on('change', browserSync.reload);
	
	//gulp.watch('js/**/*.js').on('change', function(event){
	/*	gulp.src(event.path)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish));
	});*/
});