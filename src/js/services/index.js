import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import UserService from './user.service';
servicesModule.service('User', UserService)

import JwtService from './jwt.service';
servicesModule.service('JWT', JwtService);

import TestEditorService from './testeditor.service';
servicesModule.service('TestEditor', TestEditorService);

export default servicesModule;
