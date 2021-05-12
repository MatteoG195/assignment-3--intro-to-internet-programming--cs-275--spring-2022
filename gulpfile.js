const { src, dest, series, watch } = require(`gulp`);
const babel = require(`gulp-babel`);
const browserSync = require(`browser-sync`);
const cssCompressor = require(`gulp-clean-css`);
const cssLinter = require(`gulp-stylelint`);
const jsCompressor = require(`gulp-uglify`);
const jsLinter = require(`gulp-eslint`);
const reload = browserSync.reload;

let compressCSS = () => {
    return src(`css/*.css`)
        .pipe(cssCompressor({"debug": true}, (details) => {
            console.log(`\n\tOriginal CSS file size: ` +
                `${details.name}: ${details.stats.originalSize}`);
            console.log(`\tMinified CSS file size: ` +
                `${details.name}: ${details.stats.minifiedSize}\n`);
        }))
        .pipe(dest(`prod/css`));
};

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
           failAfterError: true,
           reporters: [{
               formatter: `verbose`,
               console: true
           }]
       }));
};

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/js`));
};

let transpileJSForProd = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let lintJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter(`.eslintrc.json`))
        .pipe(jsLinter.formatEach(`compact`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: [
                `./`,
                `html`,
            ]
        }
    });

    watch(`js/*.js`,
        series(lintJS, transpileJSForDev)
    ).on(`change`, reload);

    watch(`css/*.css`,
        series(lintCSS)
    ).on(`change`, reload);
};


exports.compressCSS = compressCSS;
exports.lintCSS = lintCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.lintJS = lintJS;
exports.build = series (
    compressCSS,
    transpileJSForProd,
);
exports.serve = series (
    lintCSS,
    lintJS,
    transpileJSForDev,
    serve
);
