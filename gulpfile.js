const { src, dest, watch, series} = require(`gulp`);
const htmlValidator = require(`gulp-html`);

let validateHTML = () => {
    return src(`src/*.html`)
        .pipe(htmlValidator());
};

exports.validateHTML = validateHTML;
