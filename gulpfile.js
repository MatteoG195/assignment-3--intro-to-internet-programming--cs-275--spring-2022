const { src, dest } = require(`gulp`);
//html compression task
const htmlCompressor = require(`gulp-htmlmin`);

let compressHTML = () => {
    return src(`index.html`)
        .pipe(htmlCompressor({ collapseWhitespace: true }))
        .pipe(dest(`compressed-html/`));
};
exports.compressHTML = compressHTML;
//validates css
const gulp = require('gulp');

gulp.task('lint-css', function lintCssTask() {
    const gulpStylelint = require('gulp-stylelint');

    return gulp
        .src('src/**/*.css')
        .pipe(gulpStylelint({
            failAfterError: true,
            reporters: [
                { formatter: 'verbose', console: true }
            ]
        }));
});
//serve/browser-sync
var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
//compresses javascript
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);

let compressJS = () => {
    return src(`uncompressed-scripts/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`compressed-scripts`));
};

exports.compressJS = compressJS;
//validates javascript
const jsLinter = require(`gulp-eslint`);

let lintJS = () => {
    return src(`scripts/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

exports.lintJS = lintJS;
//validates html
const htmlValidator = require(`gulp-html`);

let validateHTML = () => {
    return src(`html-files/*.html`)
        .pipe(htmlValidator());
};

exports.validateHTML = validateHTML;