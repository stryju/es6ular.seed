import app from './states/app';
import appStart from './states/app.start';

export default config;

// @ngInject
function config( $locationProvider, $stateProvider, $urlRouterProvider, $provide ) {
  $locationProvider.html5Mode( true );
  $locationProvider.hashPrefix( '!' );

  $stateProvider
    .state( 'app', app )
    .state( 'app.start', appStart );

  $urlRouterProvider.otherwise( ( $injector ) => $injector.get( '$state' ).go( 'app.start' ) );

  // always scroll to top when switching between views
  $provide.decorator( '$uiViewScroll', $uiViewScrollDecorator );
}

// @ngInject
function $uiViewScrollDecorator( $delegate, $window ) {
  return () => $window.scrollTo( 0, 0 );
}
