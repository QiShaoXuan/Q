const gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


gulp.task('babel', () => {
  return gulp.src(['./src/*.js'])
    .pipe(concat('Q.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});

gulp.task('default', ['babel']);
