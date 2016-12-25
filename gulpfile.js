var gulp = require('gulp');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
// var inlineCss = require('gulp-inline-css');
var image = require('gulp-image');
var del = require('del');

var paths = {
  html: 'src/**/*.html',
  scripts: 'src/js/**/*.js',
  styles: 'src/css/**/*.css',
  images: [
    'src/img/**/*.png',
    'src/img/**/*.jpg',
    'src/img/**/*.svg',
// FIXME: Gulp craps out when trying to include images from a different directory
    // 'src/views/images/**/*.png',
    // 'src/views/images/**/*.jpg',
    // 'src/views/images/**/*.svg'
  ],
};

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('images', function() {
  // return gulp.src(paths.images)
  return gulp.src('views/images/*')
    // Pass in options to the task
    .pipe(image())
    // .pipe(gulp.dest('build/img'))
    .pipe(gulp.dest('dist/views/image'));
});

// Minify the JavaScript files
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Minify the CSS styles
gulp.task('styles', function() {
  return gulp.src('src/views/css/**/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/views/css'));
});

// Inline the CSS for the main index.html
// gulp.task('inline', function() {
//   return gulp.src('src/index.html')
//     .pipe(inlineCss())
//     .pipe(gulp.dest('dist/'));
// });

gulp.task('copy', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest('dist'))
});

// Run the appropriate task whenever one of its files change
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch', 'images', 'scripts', 'styles', 'inline', 'copy']);