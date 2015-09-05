import angular from 'angular';
import config from './config';

import configureDefaultRoute from './configure-default-route';

export default function(ngModule, options){
  angular.merge(config, options);

  configureDefaultRoute(ngModule, config);
};
