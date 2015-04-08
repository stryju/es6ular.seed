import StartController from './controller';

export default {
  url   : '/start',
  views : {
    'main@app' : {
      template     : require( 'fs' ).readFileSync( __dirname + '/template.html', 'utf8' ),
      controller   : StartController,
      controllerAs : 'StartCtrl',
    }
  }
};
