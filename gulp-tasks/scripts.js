var gulp       = require( 'gulp' );
var $          = global.plugins;
var source     = require( 'vinyl-source-stream' );
var buffer     = require( 'vinyl-buffer' );
var watchify   = require( 'watchify' );
var browserify = require( 'browserify' );
var babelify   = require( 'babelify' );
var _          = require( 'lodash' );
var maybe      = require( './maybe' );
var collapse   = require( 'bundle-collapser/plugin' );

var cfg = {
  browserify : {
    debug : true
  },
  babelify : {
    ignore : /angular/,
  },
  sourcemaps : {
    loadMaps : true
  },
  ngAnnotate : {
    // jshint camelcase:false
    add           : true,
    single_quotes : true,
  },
  uglify : {
    mangle : true
  }
};

_.extend( cfg.browserify, maybe( {}, watchify.args ) );

var bundler = browserify( './app/index.js', cfg.browserify );
bundler.transform( babelify.configure( cfg.babelify ) );
bundler.transform( 'brfs-htmlmin' );

if ( maybe() ) {
  bundler.plugin( collapse );
}

gulp.task( 'scripts', [ 'jshint' ], bundle );

module.exports = function () {
  bundler = watchify( bundler );

  bundler.on( 'update', bundle );
  bundler.on( 'update', logRebundle );

  bundle();

  $.util.log( $.util.colors.cyan( 'watchify started' ) );
};

var loggingTime = false;

// ---

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on( 'error', $.util.log.bind( $.util, 'Browserify Error' ) )
    .pipe( source( 'app.js' ) )
    // optional, remove if you dont want sourcemaps
      .pipe( buffer() )
      .pipe( $.sourcemaps.init( cfg.sourcemaps ) ) // loads map from browserify file
      .pipe( maybe( $.ngAnnotate( cfg.ngAnnotate ) ) )
      .pipe( maybe( $.uglify( cfg.uglify ) ) )
      .pipe( $.sourcemaps.write( './' ) ) // writes .map file
    //
    .pipe( gulp.dest( './build' ) );
}

function logRebundle( files ) {
  $.util.log(
    $.util.colors.cyan( 'browserify' ),
    're-bundle'
  );

  if ( ! loggingTime ) {
    loggingTime = true;

    bundler.on( 'time', logTime );
  }
}

function logTime( time ) {
  $.util.log(
    $.util.colors.cyan( 'browserify' ),
    'took',
    $.util.colors.magenta( time + ' ms' )
  );
}
