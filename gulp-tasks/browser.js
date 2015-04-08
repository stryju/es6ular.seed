// jshint node:true, globalstrict:true

'use strict';

var gulp         = require( 'gulp' );
var browserSync  = require( 'browser-sync' );
// var reload       = browserSync.reload;
var modRewrite   = require( 'connect-modrewrite' );

var extensionsPattern = [
  'html',
  'js',
  'map',
  'css',
  'png',
  'svg',
  'jpg',
  'jpeg',
  'gif',
  'webp',
  'woff',
  'ttf',
  'svg',
  'otf',
  'eot',
  'json',
]
  .map( function ( extension ) {
    return '\\.' + extension;
  })
  .join( '|' );

gulp.task( 'browser', [ 'watch' ], function () {
  browserSync({
    // files : 'build/styles/*.css',
    server : {
      baseDir    : './build',
      middleware : [
        modRewrite([
          '!' + extensionsPattern + '$ /index.html [L]'
        ])
      ]
    },
    ghostMode : false,
    open : false
  });
});
