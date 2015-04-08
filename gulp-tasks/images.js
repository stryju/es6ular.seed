var gulp = require( 'gulp' );
var $    = global.plugins;

var src = 'app/images/**/*.{jpg,png,jpeg,gif,webp,svg}';

gulp.task( 'images', function () {
  var rasterFilter = $.filter([
    '*.*',
    '!*.svg'
  ]);

  return gulp.src( src )
    .pipe( $.cached( 'images' ) )
    .pipe( rasterFilter )
      .pipe( $.imagemin() )
    .pipe( rasterFilter.restore() )
    .pipe( $.remember( 'images' ) )
    .pipe( gulp.dest( './build/images' ) );
});

module.exports = function () {
  gulp.watch( src, [ 'images' ] );
};
