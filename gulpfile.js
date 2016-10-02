"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csscomb = require("gulp-csscomb");
var svgSprite = require("gulp-svg-sprite");

var config = {
  mode: {
    css: {
      prefix: ".",
      dimensions: "-d",
      layout: "diagonal",
      render: {
        less: true
      }
    }
  }
};

gulp.task("svgsprite", function() {
  gulp.src("img/sprite/*.svg")
  .pipe(svgSprite(config))
  .pipe(gulp.dest("out"));
});

gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 1 version",
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
    ]))
    .pipe(gulp.dest("css"))
    .pipe(server.stream());
});

gulp.task("comb", function() {
  return gulp.src("less/blocks/*.less")
    .pipe(csscomb())
    .pipe(gulp.dest("./less/blocks"));
});

gulp.task("serve", ["style"], function() {
  server.init({
    server: ".",
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch("less/**/*.less", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});
