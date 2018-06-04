/**
 * @author Mehdi
 * created on 30/05/2018
 */
// --------------------------------------------
// Dependencies
// --------------------------------------------
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    del = require('del'),
    minifycss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    images = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();

// --------------------------------------------
// Paths
// --------------------------------------------
var source_files = {
    html: 'src/**/*.html',
    sass: 'src/sass/**/*.sass',
    script: 'src/app/**/*.js',
    image: 'src/assets/img/*'
};

var build_files = {
    html: 'build/',
    css: 'build/assets/css',
    script: 'build/assets/app',
    image: 'build/assets/img'
};

// Compiles all SASS files
gulp.task('sass', function() {
    gulp.src(source_files.sass)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(build_files.css))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Uglify js files
gulp.task('scripts', function() {
    gulp.src(source_files.script)
        .pipe(concat('app.js'))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(build_files.script))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Automate the Image folder
gulp.task('images', function() {
    gulp.src(source_files.image)
        .pipe(images())
        .pipe(gulp.dest(build_files.image));
});

// Automate Html
gulp.task('html', function() {
    return gulp.src(source_files.html)
        .pipe(gulp.dest(build_files.html))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', function(){
   gulp.start(['html','sass','scripts','images'])
});

// Watch for changes
gulp.task('start', function(){

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        notify: false
    });

    gulp.start(['build']);
    gulp.watch(source_files.html,['html']);
    gulp.watch(source_files.sass,['sass']);
    gulp.watch(source_files.script,['scripts']);
    gulp.watch(source_files.image,['images']);

});