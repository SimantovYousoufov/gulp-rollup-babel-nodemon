/* eslint-disable */
var gulp = require('gulp');
var babel = require('gulp-babel');
var rollup = require('gulp-rollup');
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var nodeInspector = require('gulp-node-inspector');
var util = require('gulp-util');

gulp.task('default', ['build', 'watch']);

gulp.task('build', function build() {
  return gulp.src('src/**/*.js')
  	.pipe(sourcemaps.init())
    .pipe(rollup({
    	sourceMap: true
    }))
    .pipe(babel())
    .on('error', util.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('watch', function watch() {
	gulp.watch('src/**/*.js', ['build']);
});

gulp.task('inspector', function inspector() {
	gulp.src([]).pipe(nodeInspector());
});

gulp.task('dev', ['build', 'inspector'], function startNodemon() {
	nodemon({
		ext: 'js html css scss',
		ignore: 'build',
		nodeArgs: ['--debug'],
		script: 'build/index.js',
		tasks: ['build']
	});
});
