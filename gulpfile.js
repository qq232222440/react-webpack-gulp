var gulp = require("gulp");
var webpack = require("gulp-webpack");
var webpackConfig = require("./webpack.config.js");
gulp.task("webpack",function(){
    return gulp.src("./")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("./build"))
})