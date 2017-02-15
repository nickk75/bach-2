class TestEditorCtrl {
  constructor(TestEditor, $state, $http) {
    'ngInject';

    this._TestEditor = TestEditor;
    this.options = this._TestEditor.options;
    this.environments = this._TestEditor.options.environments;

    this.test = {
        title: '',
        browser: '',
        release: '',
        environment: '',
        testList: []
    }

    }
}

export default TestEditorCtrl;
