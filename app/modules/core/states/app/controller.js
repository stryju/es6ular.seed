export default class {
  // @ngInject
  constructor( $scope, $state, $stateParams ) {
    this.title = 'this is an app';

    $scope.$on( '$stateChangeSuccess', redirect );

    redirect();

    // ---

    function redirect( ev ) {
      if ( $state.is( 'app' ) ) {
        $state.go( 'app.start', $stateParams );
      }
    }
  }
}
