const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compila_Sass() {
    return gulp.src("./source/styles/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./build/styles"));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function oi(callback) {
    console.log("oi");
    callback();

}

exports.javascript = comprimeJavaScript;
exports.sass = compila_Sass;
exports.oi = oi;
exports.images = comprimeImagens;