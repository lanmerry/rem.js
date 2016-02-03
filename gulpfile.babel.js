import gulp from 'gulp';
import babel from 'gulp-babel';
import format from 'gulp-esformatter';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const source = 'src/*.js';

gulp.task('js', () => {
    gulp.src(source)
        .pipe(babel())
        .pipe(format({
            indent: {
                value: '  '
            }
        }))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['js'], () => {
    gulp.watch(source, ['js'], (e) => {
        console.log(`File ${e.path} was ${e.type}, running js task...`);
    });
});
