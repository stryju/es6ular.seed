var gulp  = require( 'gulp' );
var $     = global.plugins;
var maybe = require( './maybe' );

var browserSync = require( 'browser-sync' );
var reload      = browserSync.reload;

var cfg = {
  htmlmin : {
    collapseBooleanAttributes : true,
    collapseWhitespace        : true,
    // removeRedundantAttributes : true,
    removeAttributeQuotes     : true,
    removeComments            : true
  }
};

gulp.task( 'templates', function () {
  return gulp.src( 'app/index.html' )
    // .pipe( $.plumber() )
    .pipe( maybe ( $.htmlmin( cfg.htmlmin ) ) )
    .pipe( gulp.dest( './build' ) )
    // .pipe( reload() )
    ;
});

module.exports = function () {
  gulp.watch( 'app/*.html', [ 'templates' ] );
};
