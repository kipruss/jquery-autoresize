'use strict';

const gulp = require('gulp');
const del = require('del');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const combiner = require('stream-combiner2').obj;
const eslint = require('gulp-eslint');

const src_dir = './src';
const build_dir = './build';
const dist_dir = './dist';

gulp.task('clean', function() {
    return del(build_dir, dist_dir);
});

gulp.task('assets', function() {
    return gulp.src(src_dir + '/assets/**/*.*', {since: gulp.lastRun('assets')})
        .pipe(newer(build_dir))
        .pipe(gulp.dest(build_dir));
});

gulp.task('js', function() {
    return combiner(
        gulp.src(src_dir + '/js/*.*'),
        uglify(),
        rename({
            suffix: '.min'
        }),
        gulp.dest(build_dir + '/js'),
        gulp.dest(dist_dir)
    ).on('error', notify.onError());
});

gulp.task('build', gulp.series(
    'clean',
    gulp.parallel('js', 'assets'))
);

gulp.task('watch', function() {
    gulp.watch(src_dir + '/js/*.*', gulp.series('js'));
    gulp.watch(src_dir + '/assets/**/*.*', gulp.series('assets'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: build_dir,
        port: 1234
    });
    browserSync.watch(build_dir + '/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
    gulp.series('build', gulp.parallel('watch', 'serve'))
);

gulp.task('lint', function() {
  return gulp.src('src/js/*.*')
      .pipe(eslint())
      .pipe(eslint.failAfterError());
});
