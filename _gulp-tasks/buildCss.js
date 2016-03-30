var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    iffer           = require('gulp-if'),

    concat          = require('gulp-concat'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifier        = require('gulp-clean-css'),
    sourcemaps      = require('gulp-sourcemaps'),

    settings        = require('../_settings.json');

module.exports = function buildCss() {

    return gulp.src(settings.paths.src.css_include)
        .pipe(iffer(settings.plugins.sourcemaps, sourcemaps.init()))
        .pipe(concat('app.css'))
        .pipe(iffer(settings.plugins.autoprefixer, autoprefixer(settings.plugins.options.autoprefixer)))
        .pipe(iffer(settings.production, minifier(settings.plugins.options.minifier)))
        .pipe(iffer(settings.plugins.sourcemaps, sourcemaps.write('.')))
        .pipe(gulp.dest(settings.paths.dest.css))
    ;

};
