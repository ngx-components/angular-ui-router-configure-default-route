export default function(ngModule, options){

  ngModule.run(registerEventHandler);

  /**
   * Redirect to default url when invalid
   * url is requested
   *
   * @param $urlRouterProvider
   */
  function addDefaultRoute($urlRouterProvider){
    $urlRouterProvider
      .otherwise('/');
  }

// Inject dependencies;
  addDefaultRoute.$inject = ['$urlRouterProvider'];

};

