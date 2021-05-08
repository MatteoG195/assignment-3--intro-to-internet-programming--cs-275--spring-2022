const { src, dest, watch, series} = require(`gulp`);
const sass = require(`gulp-sass`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssLinter = require(`gulp-stylelint`);
const babel = require(`gulp-babel`);
const jsLinter = require(`gulp-eslint`);
const jsCompressor = require(`gulp-uglify`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
let browserChoice = `default`;

let validateHTML = () => {
    return src(`src/*.html`)
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src(`src/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/`));
};

let lintCSS = () => {
    return src(`src/css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};

let compileCSSForProd = () => {
    return src(`src/css/style.css`)
        .pipe(sass({
            outputStyle: `compressed`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`prod/css`));
};

let lintJS = () => {
    return src(`src/js/*.js`)
        .pipe(jsLinter({
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: `module`
            },
            rules: {
                indent: [2, 4, {SwitchCase: 1}],
                quotes: [2, `backtick`],
                semi: [2, `always`],
                'linebreak-style': [2, `unix`],
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

let compressJS = () => {
    return src(`src/js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/`));
};

let transpileJSForProd = () => {
    return src(`src/js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let serve = () => {
    browserSync({
        notify: true,
        port: 9000,
        reloadDelay: 10,
        server: {
            baseDir: [
                `src`,
                `src/css`,
                `src/js`,
            ]
        }
    });

    watch(`src/**/*.html`,
        series(validateHTML, compressHTML)
    ).on(`change`, reload);

    watch(`src/**/*.css`,
        series(lintCSS)
    ).on(`change`, reload);

    watch(`src/**/*.js`,
        series(lintJS)
    ).on(`change`, reload);

};


exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
exports.compileCSSForProd = compileCSSForProd;
exports.lintJS = lintJS;
exports.compressJS = compressJS;
exports.transpileJSForProd = transpileJSForProd;
exports.serve = series( validateHTML, lintCSS, lintJS, serve);
