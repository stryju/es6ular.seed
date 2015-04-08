import AppController from './controller';

export default {
  url          : '/app',
  template     : require( 'fs' ).readFileSync( __dirname + '/template.html', 'utf8' ),
  controller   : AppController,
  controllerAs : 'AppCtrl'
};
