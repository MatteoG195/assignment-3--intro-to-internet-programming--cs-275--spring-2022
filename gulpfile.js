const { src, dest, watch, series} = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const cssLinter = require(`gulp-stylelint`);
const jsLinter = require(`gulp-eslint`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

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
 let lintJS = () => {
     return src(`dev/scripts/*.js`)
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

 let serve = () => {
     browserSync({
         notify: true,
         reloadDelay: 50,
         server: {
             baseDir: [
                 `src`,
                 `src/css`,
             ]
         }
     });

     watch(`src/**/*.css`,
         series(lintCSS)
     ).on(`change`, reload);

     watch(`src/**/*.html`,
         series(validateHTML, compressHTML)
     ).on(`change`, reload);

 };

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.serve = series(validateHTML, compressHTML, lintCSS, lintJS, serve);
