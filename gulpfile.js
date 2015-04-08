// jshint globalstrict:true

'use strict';

global.pkg     = require( './package.json' );
global.plugins = require( 'gulp-load-plugins' )();

require( 'require-dir' )( './gulp-tasks' );
