var gutil = require( 'gulp-util' );

module.exports = maybe;

function maybe( a, b ) {
  if ( ! arguments.length ) {
    return !! gutil.env.minify;
  }
  return gutil.env.minify ? a : ( arguments.length > 1 ? b : gutil.noop() );
}
