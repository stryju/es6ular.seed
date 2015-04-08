import FooController from './controller';

export default function () {
  return {
    restrict     : 'E',
    template     : require( 'fs' ).readFileSync( __dirname + '/template.html', 'utf8' ),
    controller   : FooController,
    controllerAs : 'FooCtrl'
  };
}
