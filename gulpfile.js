const { src, dest, series, watch } = require(`gulp`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssCompressor = require(`gulp-clean-css`);
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

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/js`));
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



