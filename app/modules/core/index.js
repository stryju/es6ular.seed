import ng from 'angular';

// deps
import router from 'angular-ui-router';

const deps = [
  router
];

// config phase
import config from './config';

// directives
import foo from './directives/foo';

// values
import VAL from './values/val';

export default ng.module( '<MAIN_MODULE_NAME>.core', deps )
  .config( config )
  .directive( 'foo', foo )
  .value( 'VAL', VAL )
  .name;
