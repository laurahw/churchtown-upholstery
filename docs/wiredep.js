'use strict';

var gulp = require('gulp');

// Inject bower components.
gulp.task('docs:wiredep', function() {
    var wiredep = require('wiredep').stream;

    return gulp.src('docs/app/index.html')
        .pipe(wiredep({
            bowerJson: require('../bower.json'),
            directory: 'bower_components',
            exclude: [/bootstrap-sass-official/, /bootstrap.js/, /open-sans-fontface/, /foundation/],
        }))
        .pipe(gulp.dest('docs/app'));
});
