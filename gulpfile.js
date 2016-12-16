var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    cleanCSS = require('gulp-clean-css'),
    cssimport = require("gulp-cssimport");

var env,
    jsSources,
    sassSources,
    htmlSources,
    outputDir,
    sassStyle;

// production development
// you can set it throgh commant line(for windows):
// set NODE_ENV=production&&npm start
// example:
//      set NODE_ENV=development&&gulp
// use this to see environmet in command line:
// echo %NODE_ENV%
env = process.env.NODE_ENV || 'development';

gutil.log('BUILD ENVIRONMENT: ' + env);

if (env === 'development') {
    outputDir = './';
    //nested, expanded(normal), compact(in one line), compressed
    sassStyle = 'expanded';
} else {
    outputDir = './';
    //nested, expanded(normal), compact(in one line), compressed
    sassStyle = 'compressed';
}
// add all the .js files here
jsSources = ['components/scripts/jquery.js', 'components/scripts/bootstrap.js', 'components/scripts/google_analytics.js', 'components/scripts/customizer.js', 'components/scripts/navigation.js', 'components/scripts/skip-link-focus-fix.js'];
sassSources = ['components/sass/style.scss'];
phpSources = ['./*.php', 'template-parts/*.php'];

// all .js files in scripts folder will be concated to one file 'script.js' in production/js folder
gulp.task('js', function () {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(gulpif(env === 'production', uglify()))
        .pipe(gulp.dest(outputDir + 'js'))
        .pipe(connect.reload());
});

gulp.task('compass', function () {
    gulp.src(sassSources)
        .pipe(compass({
            sass: 'components/sass',
            style: sassStyle,
            sourcemap: true
        })
            .on('error', gutil.log))
        .pipe(cssimport())
        .pipe(gulpif(env === 'production', cleanCSS({ compatibility: 'ie8' })))
        .pipe(gulp.dest(outputDir))
    
    gulp.src('./css/style.css.map')
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('php', function () {
    connect.reload();
});

gulp.task('connect', function () {
    connect.server({
        root: outputDir,
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch(jsSources, ['js']);
    gulp.watch('components/sass/**/*.scss', ['compass']);
    gulp.watch(phpSources, ['php']);
});

gulp.task('default', ['php', 'js', 'compass', 'connect', 'watch']);