var gulp = require('gulp');
var compass = require('gulp-compass');
var path = require('path');
var minifyCSS = require('gulp-minify-css');

gulp.task('style', function() {
  gulp.src('./public/assets/sass/**/*')
      .pipe(compass({
        project: path.join(__dirname, 'public/assets'),
        css: 'css/dist',
        sass: 'sass'
      }))
      .pipe(minifyCSS())
      .pipe(gulp.dest('css/dist'));
});
