const { src, dest, watch, series} = require(`gulp`);
const sass = require(`gulp-sass`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssLinter = require(`gulp-stylelint`);

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

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
exports.compileCSSForProd = compileCSSForProd;
