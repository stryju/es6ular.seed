var gulp = require( 'gulp' );
var $    = global.plugins;

gulp.task( 'jshint', function () {
  var vendorFilter = $.filter([
    '**/*',
    '!vendor/**/*'
  ]);

  // var nonSpecFilter = $.filter([
  //   '**/*',
  //   '!**/*.spec.js'
  // ]);

  return gulp.src( 'app/**/*.js' )
    .pipe( $.cached( 'scripts' ) )
    .pipe( vendorFilter )
      .pipe( $.jshint( './.jshintrc' ) )
      .pipe( $.jshint.reporter( 'jshint-stylish' ) )
      // .pipe( $.jshint.reporter( 'fail' ) )
    .pipe( vendorFilter.restore() )
    .pipe( $.remember( 'scripts' ) );
});

module.exports = function () {
  gulp.watch( 'app/**/*.js', [ 'jshint' ] );
};
