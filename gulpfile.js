"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require("gulp-sass");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");

const dist = "./dist";


// Copie toata  hmtl.file si  trimite  tot  in  mapa  dist 
gulp.task("copy-html", () => {
    return gulp.src("./src/index.html")
                .pipe(gulp.dest(dist))
                .pipe(browsersync.stream());
});


// copileaza si tot  trimite  in  dist
gulp.task("build-sass", () => {
    return gulp.src("./src/sass/*.+(scss|sass)")
                .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
                .pipe(rename({
                  prefix: "",
                  suffix: ".min",
                }))
                .pipe(gulp.dest(dist + "/assets/css"))
                .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist + "/assets/js"))
                .on("end", browsersync.reload);
});

gulp.task("watch", () => {
    browsersync.init({
		server: "./dist/",
		port: 4000,
		notify: true
    });
    
    gulp.watch("./src/index.html", gulp.parallel("copy-html"));
    gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
    gulp.watch("./src/sass/**/*.scss", gulp.parallel("build-sass"));
});

gulp.task("build", gulp.parallel("copy-html", "build-js", "build-sass"));

gulp.task("prod", () => {
    gulp.src("./src/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleanCSS({compatibility: 'ie8'})) /*Minifica si trimita tata  in  dist deja  minificat*/
        .pipe(gulp.dest(dist));

    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist + "/assets/js"));
});

gulp.task("default", gulp.parallel("watch", "build"));