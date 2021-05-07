const { src, dest, watch, series} = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);

let validateHTML = () => {
    return src(`src/*.html`)
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src(`src/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod/`));
};



exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
