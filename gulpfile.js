var gulp = require('gulp');
var ejs = require('gulp-ejs');
var fs =require('fs');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var concat = require("gulp-concat");
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var browserSync = require("browser-sync");
var cmq = require("gulp-combine-mq");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");



// ejs
gulp.task('ejs', function() {

    // create WORKS by json
    var template = './src/_works.ejs',
        jsonFile = './src/works.json',
        pages = JSON.parse(fs.readFileSync(jsonFile, 'utf8')).pages;
    gulp.src('./src/index.ejs')
        .pipe(plumber())
        .pipe(ejs({ jsonData:pages }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./docs'));
    for( var i=0; i<pages.length; i++ ){
        gulp.src(template)
            .pipe(plumber())
            .pipe(ejs({ jsonData:pages[i] }))
            .pipe(rename('works_'+pages[i].id+'.html'))
            .pipe(gulp.dest('./docs'));
    }

    gulp.src(['./src/**/*.ejs', '!./src/**/_*.ejs', '!./src/index.ejs'])
        .pipe(plumber())
        .pipe(ejs('','',{'ext':'.html'}))
        .pipe(gulp.dest('./docs'));

});

// SASS
gulp.task('sass', function() {
    gulp.src(['./src/styles/**/*.scss', '!./src/styles/**/_*.scss','!./src/styles/lib'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4','ios_saf >= 8'],
            cascade: false
        }))
        .pipe(cmq({ beautify: false }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./docs/styles'));
    gulp.src('./src/styles/lib/**')
        .pipe(gulp.dest('./docs/styles/lib'));
});

//Js
gulp.task('js', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.js','./src/scripts/**/*.js','!./src/scripts/lib'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./docs/scripts'));
    gulp.src('./src/scripts/lib/**')
        .pipe(gulp.dest('./docs/scripts/lib'));
});

//img
gulp.task('img', function() {
    gulp.src('./src/images/**/*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('./docs/images'));
});

//reload
gulp.task('reload', function() {
    browserSync.reload();
});


gulp.task('default',['ejs','sass','js','img'],function(){
    browserSync.init({ server: "./docs" });
    gulp.watch(['./src/**/*.ejs','./src/works.json'], ['ejs']);
    gulp.watch('./src/styles/**/*.scss', ['sass']);
    gulp.watch('./src/scripts/**/*.js',['js']);
    gulp.watch('./src/images/**/*',['img']);
    gulp.watch('./src/**',['reload']);
});
