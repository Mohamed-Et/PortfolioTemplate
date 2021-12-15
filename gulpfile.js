const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purge = require('gulp-purgecss');
//!run gulp in the command line to execute and watch
function buildStyles() {
  return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(purge({ content: ['*.html'] }))
    .pipe(dest('css'));
}

function watchTask() {
  watch(['scss/**/*.scss', '*.html'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
