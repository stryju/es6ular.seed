var gulp  = require( 'gulp' );
var $     = global.plugins;
var maybe = require( './maybe' );

var browserSync = require( 'browser-sync' );
var reload      = browserSync.reload;

var cfg = {
  sass : {
    errLogToConsole : true,
    includePaths : [
      'sass'
    ]
  },
  autoprefixer : {
    browsers : [
      'last 2 versions',
      'ie > 10'
    ],
    cascade : false
  }
};

gulp.task( 'styles', function () {
  var stylesFilter = $.filter( [ '*.css' ] );

  return gulp.src( 'app/**/*.scss' )
    .pipe( $.sourcemaps.init() )
    .pipe( $.sass( cfg.sass ) )
    .on( 'error', $.util.log.bind( $.util, 'Sass Error' ) )
    .pipe( $.concat( 'style.css' ) )
    .pipe( $.autoprefixer( cfg.autoprefixer ) )
    .pipe( maybe( $.csso() ) )
    .pipe( $.sourcemaps.write( './' ) )
    .pipe( gulp.dest( './build' ) )
    .pipe( stylesFilter )
    .pipe( reload({
      stream : true
    }));
});

module.exports = function () {
  gulp.watch( '{app,sass}/**/*.scss', [ 'styles' ] );
};
