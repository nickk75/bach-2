import angular from 'angular';

// Create the module where our functionality can attach to
let testeditorModule = angular.module('app.testeditor', []);


// Include our UI-Router config settings
import TestEditorConfig from './testeditor.config';
testeditorModule.config(TestEditorConfig);


// Controllers
import TestEditorCtrl from './testeditor.controller';
testeditorModule.controller('TestEditorCtrl', TestEditorCtrl);


export default testeditorModule;