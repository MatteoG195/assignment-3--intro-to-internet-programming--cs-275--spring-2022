const { src, dest, series, watch } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const browserSync = require(`browser-sync`);
const cssCompressor = require(`gulp-clean-css`);
const cssLinter = require(`gulp-stylelint`);
const jsCompressor = require(`gulp-uglify`);
const jsLinter = require(`gulp-eslint`);

let compressHTML = () => {
    return src([`index.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/`));
};

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

exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.lintJS = lintJS;
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

exports.lintCSS = lintCSS;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = series (
    lintCSS,
    lintJS,
    transpileJSForDev,
    serve
);
