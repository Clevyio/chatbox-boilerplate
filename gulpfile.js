const gulp      = require('gulp');
const uglify    = require('gulp-uglify');
const minify    = require('gulp-minify-css');
const rename    = require('gulp-rename');
const babel     = require('gulp-babel');
const sass      = require('gulp-sass');
const prefixer  = require('gulp-autoprefixer');
const replace   = require('gulp-replace');


gulp.task('compile-css', function () {
  return gulp.src('./src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer('Explorer 10'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('compile-js', function () {
  return gulp.src('./src/script.js') // path to your files
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(gulp.parallel('compile-js', 'compile-css')));
