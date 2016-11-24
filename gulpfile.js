var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test-server', function() {

    gulp.
    src('./server/test.js').
    pipe(mocha({
        useColors: true
    })).
    on('error', function() {
        console.log('Tests failed!');
    }).
    on('end', function() {
        if (!error) {
            console.log('Tests succeeded!');
            process.exit(0);
        }
    });
});

gulp.task('watch', function() {
    gulp.watch(['./server/*.js'], ['server-server']);
});
