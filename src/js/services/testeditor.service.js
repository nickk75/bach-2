export default class testeditor {
    constructor(AppConstants, $http){
        'ngInject';

        this._AppConstants = AppConstants;
        this._$http = $http;
        let testData = this;

        this._$http({
            method: 'GET',
            // https://spreadsheets.google.com/feeds/list/1HW1vO4JpyGQ7fN7uJX4eX9vhrDJ3pQGGU24npSh8B6g/1/public/values?alt=json
            url: 'https://api.myjson.com/bins/bslnx',
        })
        .then(function(response) {
            testData.entries = response.data.feed.entry;
        }, function() {
            alert("Error");
        });

        this.options = {
            browsers: [
                {value: 1, name: 'Chrome'},
                {value: 2, name: 'Firefox'},
                {value: 3, name: 'IE 11'}
            ],
            environments : {
                'Release 1' : ['R1-QA1', 'R1-QA2'],
                'Release 2' : ['R2-QA1', 'R2-QA2'],
                'Release 3' : ['R3-QA1', 'R3-QA2']
            }
        };
    }

}

