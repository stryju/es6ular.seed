export default config;

// @ngInject
function config( $compileProvider ) {
  // pass `false` when releasing - perf gain
  $compileProvider.debugInfoEnabled( false );
}
