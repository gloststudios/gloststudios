var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var minifycss = require("gulp-minify-css");
var concat = require("gulp-concat");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("scripts", function() {
    return gulp
        .src([
            /*
            JS order here
            */
            "source/app.js"
        ])
        .pipe(
            rename({
                suffix: ".min"
            })
        )
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("sass", function() {
    gulp.src([
        // TODO: Break out and combine components
        "source/main.scss"
    ])
        .pipe(plumber())
        .pipe(
            sass({
                includePaths: ["scss"].concat()
            })
        )
        .pipe(minifycss())
        .pipe(
            rename({
                suffix: ".min"
            })
        )
        .pipe(gulp.dest("dist"))
        .pipe(
            reload({
                stream: true
            })
        );
});

gulp.task("reloading!", function() {
    browserSync.reload();
});

gulp.task("browser-sync", function() {
    browserSync.init(["dist/*.css", "dist/*.js"], {
        /*
        VHOST
        */

        // proxy: 'website.url'

        /*
        Static:
        */
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default", ["sass", "browser-sync"], function() {
    gulp.watch(["source/*.scss", "source/**/*.scss"], ["sass"], ["reloading!"]);
    gulp.watch(["source/app.js"], ["scripts"]);
    gulp.watch(["*.html"], ["reloading!"]);
});
