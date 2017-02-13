export default class User {
	constructor(AppConstants, $http) {
		'ngInject';

		this._AppConstants = AppConstants;
	    this._$http = $http;

		// Object to store our user properties
		// Starts as null until the user logs in
		this.current = null;
	}

	attemptAuth(type, credentials) {
		let route = (type === 'login') ? '/login' : '';
		return $http({
			url: AppConstants.api + '/users' + route,
			method: 'POST',
			data: {
				user: credentials
			}
		}).then(
			(res) => {
				this.current = res.data.user;

				return res;
			}
		);

	}
}