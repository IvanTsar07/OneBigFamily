'use strict';

var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var changed = require("gulp-changed");
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');


var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';


/* COMPILE SCSS */



gulp.task('compile_scss', function(){

	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST));

});

gulp.task('react', function(){
	return gulp.src([
		'./src/index.js',
		'./src/App.js',
		'./src/components/**/*.js'
	])
	.pipe(babel({presets: ['react','env','es2015']}))
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('./public'))
	
	// return browserify
	// ({
	// 	entries: './src/index.js', 
	// 	extensions: ['.js'], 
	// 	debug: true
	// })
	
	// .transform('babelify', {
	// 	presets: ['env','es2015', 'react']
	// })
    //     .bundle()
    //     .pipe(source('bundle.js'))
    //     .pipe(gulp.dest('./public'));
});




/* WATCH CHANGES IN SCSS */

gulp.task('watch', function(){
	gulp.watch(SCSS_SRC, ['compile_scss']);
	gulp.watch('/src/**/*.js');
});



// Run tasks

gulp.task('default', ['watch']);