var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass'),
  autoprefix = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  cssnano = require('gulp-cssnano'),
  connect = require('gulp-connect'),
  sassLint = require('gulp-sass-lint');
var $ = require('gulp-load-plugins')({ lazy: true });
var lite = require('lite-server');

var config = {
  build: './dist/build.js',
  plugins: [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js'
  ],
  index: {
    run: 'index.html',
    aot: 'index-aot.html',
    aotgz: 'index-aot-gzip.html',
    jit: 'index-jit.html'
  },
  dest: './',
  root: './'
};

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('gzip', function () {
  log('gzipping');
  var source = [].concat(config.plugins, config.build);

  return gulp.src(source)
    .pipe($.gzip())
    .pipe(gulp.dest(config.dest));
});

gulp.task('copy-aot-gzip', ['gzip', 'clean'], function () {
  log('copy aot gzip');
  return copyIndex(config.index.aotgz);
});

gulp.task('copy-aot', ['clean'], function () {
  log('copy aot');
  return copyIndex(config.index.aot);
});

function copyIndex(source) {
  return gulp.src(source)
    .pipe($.rename(config.index.run))
    .pipe(gulp.dest(config.root));
}

gulp.task('copy-jit', ['clean'], function () {
  log('copy jit');
  return copyIndex(config.index.jit);
});

gulp.task('clean', function (done) {
  log('clean');
  del([config.index.run]).then(paths => {
    // console.log('Deleted files and folders:\n', paths.join('\n'));
    done()
  });
});

function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

// 1. import JSON config files
// ----------------------------------------------
var paths = require('./config-paths');

// Get the sass lint options from a json file
var scssLintOptions = require(paths.sassLint);


// 2. Global tasks
// ----------------------------------------------
gulp.task('connect', function () {
  connect.server({
    root: paths.root,
    livereload: true,
    port: 3000
  });
});

// 3. SASS tasks
// ----------------------------------------------
gulp.task('sass', ['sass-lint'], function () {
  return gulp.src(paths.sass + 'main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(gulp.dest(paths.dist + 'css'))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.dist + 'css'))
    // .pipe(connect.reload());
});

gulp.task('sass-lint', function () {
  return gulp.src(paths.sass + '**/*.s+(a|c)ss') 
    .pipe(sassLint(scssLintOptions))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
// Watch & default tasks
// ----------------------------------------------
gulp.task('watch', function () {
  gulp.watch( paths.sass + '**/*.scss', ['sass']);
  // gulp.watch( paths.root + '**/*.html', ['html','img']);
});

module.exports = gulp;