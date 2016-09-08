var gulp = require("gulp"),
    webpack = require("gulp-webpack"),
    process = require("process"),
    uglify = require("gulp-uglify");
var webpackConfig = require("./webpack.config.js");
gulp.task("webpack",function(){
    process.env.NODE_ENV = "production";
    return gulp.src("./")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("./build"))
})
gulp.task("js",function(){
    return gulp.src(['./build/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest("./build/"))
})
gulp.task("default",["webpack"],function(){
    gulp.start("js")
})