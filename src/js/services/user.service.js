export default class User {
	constructor(JWT, AppConstants, $http, $state, $q) {
		'ngInject';

		this._JWT = JWT;
		this._AppConstants = AppConstants;
	  this._$http = $http;
	  this._$state = $state;
	  this._$q = $q;

		// Object to store our user properties
		// Starts as null until the user logs in
		this.current = null;
	}

	attemptAuth(type, credentials) {
		let route = (type === 'login') ? '/login' : '';
		return this._$http({
			url: this._AppConstants.api + '/users' + route,
			method: 'POST',
			data: {
				user: credentials
			}
		}).then(
			(res) => {
				// Set the JW Token on success
				this._JWT.save(res.data.user.token);
				this.current = res.data.user;

				return res;
			}
		);
	}


	logout() {
		this.current = null;
		this._JWT.destroy();
		// Hard reload
		this._$state.go(this._$state.$current, null, { reload: true });
	}


	verifyAuth() {
		// $q is the promise that we are passing
		let deferred = this._$q.defer();

// check for the JW token
		if (!this._JWT.get()) {
			deferred.resolve(false);
			return deferred.promise;
		}

		if (this.current) {
			deferred.resolve(true);
		}

		else {
			this._$http({
				url: this._AppConstants.api + '/user',
				method: 'GET'
			}).then(
				(res) => {
					this.current =  res.data.user;
					deferred.resolve(true);
				},
// account for bad jw tokens
				(err) => {
					this._JWT.destroy();
					deferred.resolve(false);
				}
			)
		}

		return deferred.promise;
	}


	ensureAuthIs(bool) {
    let deferred = this._$q.defer();

    this.verifyAuth().then((authValid) => {
      // if it's the opposite, redirect to the login page
      if (authValid !== bool) {
        this._$state.go('app.login');
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    })

    return deferred.promise;
  }

  // Update the current user's name, email, password, etc
  update(fields) {
    return this._$http({
      url: this._AppConstants.api + '/user',
      method: 'PUT',
      data: { user: fields }
    }).then(
      (res) => {
        this.current = res.data.user;
        return res.data.user;
      }
    );
  }


}