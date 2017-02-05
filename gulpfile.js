/* Import required modules for our task: all gulp-plugin neccessary will be added here */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

/* Defines globs to target specific files type */
var paths = {
    scripts: ['app/mailcheck.directive.js', 'app/mailcheck.factory.js'],
}

/***** Register some tasks to expose to the cli or other tasks*/
gulp.task('build', scripts);
gulp.task(watch);
gulp.task('default', gulp.series('build', watch));

/***** Define our tasks using plain functions */

function scripts() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('ng-mailcheck.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(rename('ng-mailcheck.min.js'))
        .pipe(gulp.dest('dist'));
}
function watch() {
    gulp.watch(paths.scripts, scripts);
}
