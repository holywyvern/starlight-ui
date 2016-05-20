import gulp from 'gulp';

import sourcemaps   from 'gulp-sourcemaps';
import babel        from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';
import sass         from 'gulp-sass';
import cleanCSS     from 'gulp-clean-css';
import concat       from 'gulp-concat';

gulp.task('build:js', () => {
  
});

gulp.task('build:sass', () => {
  return gulp.src('./sass/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('ui.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css'))
  ;
});

gulp.task('build', ['build:sass']);


gulp.task('watch', ['build'],  () => {
  return gulp.watch('./sass/**/*.scss', ['build:sass']);
});

gulp.task('default', ['build']);