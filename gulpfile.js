const { src, dest, series, watch } = require(`gulp`);
const sass = require(`gulp-sass`);
const babel = require(`gulp-babel`);
const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const cssLinter = require(`gulp-stylelint`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
let browserChoice = `default`;

async function allBrowsers () {
    browserChoice = [
        `firefox`,
        `google chrome`
    ];
}

let validateHTML = () => {
    return src(
        `index.html`)
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src(`index.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compileCSSForDev = () => {
    return src(`css/style.css`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`dev/css`));
};

let compileCSSForProd = () => {
    return src(`css/style.css`)
        .pipe(sass({
            outputStyle: `compressed`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`prod/css`));
};

let lintCSS = () => {
    return src(`css/style.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let transpileJSForDev = () => {
    return src(`js/app.js`)
        .pipe(babel())
        .pipe(dest(`dev/js`));
};

let transpileJSForProd = () => {
    return src(`js/app.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let lintJS = () => {
    return src(`js/app.js`)
        .pipe(jsLinter({
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: `module`
            },
            rules: {
                indent: [2, 4, {SwitchCase: 1}],
                quotes: [2, `backtick`],
                semi: [2, `always`],
                'linebreak-style': [2, `windows`],
                'max-len': [1, 85, 4]
            },
            env: {
                es6: true,
                node: true,
                browser: true
            },
            extends: `eslint:recommended`
        }))
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let gulp = () => {
    browserSync({
        notify: true,
        reloadDelay: 10,
        server: {
            baseDir: [
                `./`
            ]
        }
    });

    watch(`js/app.js`,
        series(lintJS, transpileJSForDev)
    ).on(`change`, reload);

    watch(`css/style.css`,
        series(lintCSS, compileCSSForDev)
    ).on(`change`, reload);

    watch(`index.html`,
        series(validateHTML)
    ).on(`change`, reload);
};

exports.allBrowsers = series(allBrowsers, dev);
exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.compileCSSForDev = compileCSSForDev;
exports.compileCSSForProd = compileCSSForProd;
exports.lintCSS = lintCSS;
exports.transpileJSForDev = transpileJSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.lintJS = lintJS;
exports.gulp = series(lintCSS, compileCSSForDev, lintJS, transpileJSForDev, validateHTML, gulp);
exports.build = series(
    compressHTML,
    compileCSSForProd,
    transpileJSForProd,
);