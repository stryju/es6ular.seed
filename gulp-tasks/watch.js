var gulp = require( 'gulp' );

gulp.task( 'watch', [ 'build' ], function () {
  require( './scripts' )();
  require( './jshint' )();
  require( './styles' )();
  require( './templates' )();
  require( './images' )();
});
