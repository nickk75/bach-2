function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/home',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Home',
    resolve : {
    // they can only access this route if they are logged in
    // we ensure that they are logged in
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });

};

export default HomeConfig;
