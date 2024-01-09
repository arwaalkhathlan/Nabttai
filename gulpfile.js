const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
gulp.task('style', function() {
    gulp.src('./src/css/scss/main.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./src/css/style'))
});