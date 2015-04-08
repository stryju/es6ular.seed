var gulp = require( 'gulp' );

gulp.task( 'clean', function ( cb ) {
  require( 'del' )( 'build/*', cb );
});
