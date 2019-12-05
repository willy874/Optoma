const {
    src,
    dest,
    series,
    watch
} = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')
const rimraf = require("rimraf")

const paths = {
    webroot: "./dist/",
    asset: "./scss/"
}; //路徑變數

paths.concatCssDest = paths.webroot + "/main.min.css";

function clean(cb) {
    rimraf(paths.concatCssDest, cb);
}
const url = ['src/main.scss']

function production() {
    return src(url)
        .pipe(sass({
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(concat('main.min.css'))
        .pipe(dest(paths.webroot + 'css'));
}

function build() {
    return src(url)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 1 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(concat('main.css'))
        .pipe(dest(paths.webroot + 'css'))
}

exports.build = series(
    clean,
    build
);

exports.production = series(
    clean,
    production
); 

exports.watch = function () {
    watch('src/*.scss', series(clean, build, production));
}