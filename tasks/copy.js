import gulp from 'gulp';
import changed from 'gulp-changed';
import filter from 'gulp-filter';
import gulpIf from 'gulp-if';
// import imagemin from 'gulp-imagemin';

const {INCLUDE_ROBOTS} = process.env;

gulp.task('copy', () => (
    gulp.src('app/resources/**/*')
    .pipe(changed('dist'))
    .pipe(gulpIf(!INCLUDE_ROBOTS, filter(file => !/resources[\\\/]robots\.txt/.test(file.path))))
    .pipe(gulp.dest('dist'))
));
gulp.task('copy:fonts', () => (
	gulp.src('app/fonts/**/*.{woff,woff2,svg}')
	.pipe(gulp.dest('dist/assets/fonts/'))
));
