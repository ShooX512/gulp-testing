var gulp = require('gulp'),
    pug = require('gulp-pug'),
    data = require('gulp-data'),
    fs = require('fs');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function pugTest () {
    return gulp
        .src('app/views/**/*.pug')
        .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync('./app/data.json'))
        }))
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.series(defaultTask, pugTest)