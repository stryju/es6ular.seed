import ng from 'angular';

import ngAnimate from 'angular-animate';
import coreModule from './modules/core';

const deps = [
  ngAnimate,
  coreModule
];

import config from './config';

export default ng.module( '<MAIN_MODULE_NAME>', deps )
  .config( config )
  .name;
