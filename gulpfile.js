const { src, dest, series, watch } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssLinter = require(`gulp-stylelint`);
const cssCompressor = require(`gulp-clean-css`);
const jsLinter = require(`gulp-eslint`);
const babel = require(`gulp-babel`);
const sass = require(`gulp-sass`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
const terser = require('gulp-terser');

async function firefox () {
    browserChoice = `firefox`;
}

async function chrome () {
    browserChoice = `google chrome`;
}


let validateHTML = () => {
    return src([`dev/html/*.html`, `*.html`]).pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`dev/html/*.html`,`*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let lintCSS = () => {
    return src(`dev/css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};


let compileCSSForDev = () => {
    return src(`dev/css/*.css`)
        .pipe(sass({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`temp/css`));
};

let compileCSSForProd = () => {
    return src(`dev/css/*.css`)
        .pipe(sass({
            outputStyle: `compressed`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`prod/css`));
};


let lintJS = () => {
    return src(`dev/js/*.js`)
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

let transpileJSForDev = () => {
    return src(`dev/js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/js`));
};

let transpileJSForProd = () => {
    return src(`dev/js/*.js`)
        .pipe(babel())
        .pipe(terser())
        .pipe(dest(`prod/js`));
};



let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: [
                `temp`,
                `dev`,
                `dev/html`
            ]
        }
    });

    watch(`dev/js/*.js`,
        series(lintJS, transpileJSForDev)
    ).on(`change`, reload);

    watch(`dev/css/*.css`,
        series(lintCSS, compileCSSForDev)
    ).on(`change`, reload);

    watch(`dev/*.html`,
        series(validateHTML)
    ).on(`change`, reload);

};

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.serve = series(validateHTML, lintCSS, lintJS, compileCSSForDev, transpileJSForDev, serve);
exports.build = series(
    compressHTML,
    compileCSSForProd,
    transpileJSForProd,
);
exports.HTMLProcessing = series(validateHTML, compressHTML);
