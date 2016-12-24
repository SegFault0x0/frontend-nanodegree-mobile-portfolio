var gulp = require('gulp');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
// var imagemin = require('gulp-imagemin');
var image = require('gulp-image');
var del = require('del');

var paths = {
  scripts: './js/**/*.js',
  styles: './css/**/*.css',
  images: [
    './img/**/*.png',
    './img/**/*.jpg',
    './img/**/*.svg',
    // './views/images/**/*.png',
    // './views/images/**/*.jpg',
    // './views/images/**/*.svg'
  ],
};

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('images', ['clean'], function() {
  // return gulp.src(paths.images)
  return gulp.src('views/images/*')
    // Pass in options to the task
    .pipe(image())
    // .pipe(gulp.dest('build/img'))
    .pipe(gulp.dest('dist/views/image'));
});

// Minify the JavaScript files
gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Minify the CSS styles
gulp.task('styles', ['clean'], function() {
  return gulp.src(paths.styles)
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

// Run the appropriate task whenever one of its files change
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch', 'styles', 'scripts', 'images']);