const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const compile = gulpSass(require("sass"));
const cleanCSS = require("gulp-clean-css");

gulp.task("sass", async () => {
  gulp
    .src("src/components/**/*.scss")
    .pipe(compile())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"));

  gulp
    .src("src/Pages/**/*.scss")
    .pipe(compile())
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("src/css"));

  //moveing the scss fils To css Folder
  gulp.src("src/*.scss").pipe(compile()).pipe(gulp.dest("src/css"));
});

gulp.task("watching", () => {
  gulp.watch("src/components/**/*.scss", async () => {
    gulp
      .src("src/components/**/*.scss")
      .pipe(compile())
      .pipe(gulp.dest("src/css"));
  });
});
