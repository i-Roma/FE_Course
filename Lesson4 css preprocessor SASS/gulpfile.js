var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');


gulp.task('sass', function() {
    return sass('./sass/import.sass')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    gulp.watch('./sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'jade', 'watch']);
