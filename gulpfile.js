const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
  return src('dev/scss/style.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist/css/', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
  return src('dev/js/dialog.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist/js/', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['dev/scss/**/*.scss', 'dev/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);