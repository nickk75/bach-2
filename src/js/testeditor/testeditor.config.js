function TestEditorConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.testeditor', {
    url: '/testeditor',
    controller: 'TestEditorCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'testeditor/testeditor.html',
    title: 'New Test',
    resolve:{
      auth: function(User) {
        return User.ensureAuthIs(true);
      }
    }
  });

};

export default TestEditorConfig;