export default class {
  // @ngInject
  constructor( $log ) {
    this.alert = alert;

    // ---

    function alert() {
      $log( 'alert' );
    }
  }
}
