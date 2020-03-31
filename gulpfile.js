var gulp = require('gulp'),
    rimraf = require("rimraf"),
    cssmin = require("gulp-cssmin"),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');

var paths = {
    webroot: "./dist/"
};

paths.css = paths.webroot + "css/*.css";
// paths.minCss = paths.webroot + "css/*.min.css";
// paths.concatCssDest = paths.webroot + "css/main.min.css";


gulp.task("clean:css", function (cb) {
    rimraf(paths.css, cb);
});
gulp.task('css:main', function () {
    return gulp
        .src(['src/scss/main.scss'])
        .pipe(sass({
            includePaths: ['node_modules']
        }))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(paths.webroot + 'css'))
        .resume();
});
gulp.task("css:main.min", function () {
    return gulp.src([paths.webroot + "css/main.css"])
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task("build", ['clean:css','css:main']);
gulp.task("bundle", ['css:main.min']);
gulp.task("watch", function () {
    gulp.watch('src/scss/main.scss', ['clean:css','css:main'])
})