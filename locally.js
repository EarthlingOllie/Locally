//Locally, a simple yet efficient way to store local data efficiently.

var Locally = {

	//Holds a reference to window.localStorage
	_localStorage: {},

	//Used for accessing the _localStorage property
	set localStorage(value) {
		this._localStorage = value;
	},
	get localStorage() {
		return this._localStorage;
	},

	//Holds a reference to window.sessionStorage
	_sessionStorage: {},

	//Used for accessing the _sessionStorage property
	set sessionStorage(value) {
		this._sessionStorage = value;
	},
	get sessionStorage() {
		return this._sessionStorage;
	},

	//A representation of all data in localStorage
	_localData: {},

	//Used for accessing the _localData property
	set localData(obj) {
		if(obj.index && obj.value) {
			if(!this._localData[obj.index] || (this._localData[obj.index] && !this._localData[obj.index].protected)) {
				this._localData[obj.index] = obj.value;
				this.localStorage.setItem(obj.index, obj.value);
			} else {
				throw 'localData at index ' + obj.index + ' is protected and cannot be modified.';
			}
		} else {
			throw 'localData expects an index at Obj.index and value at Obj.value';
		}
	},
	get localData() {
		return this._localData;
	},

	//A representation of all data in sessionStorage
	_sessionData: {},

	//Used for accessing the _sessionData property
	set sessionData(obj) {
		if(obj.index && obj.value) {
			if(this._sessionData[obj.index] && !this._sessionData[obj.index].protected) {
				this._sessionData[obj.index] = obj.value;
				this.sessionStorage.setItem(obj.index, obj.value);
			} else {
				throw 'sessionData at index ' + obj.index + ' is protected and cannot be modified.';
			}
		} else {
			throw 'sessionData expects an index at Obj.index and value at Obj.value';
		}
	},
	get sessionData() {
		return this._sessionData;
	},

	//Initialise the Locally Object
	init: function() {

		if(typeof Storage !== 'undefined') {

			this.localStorage = localStorage;

			for(var key in this.localStorage) {
				this.localData[key] = this.localStorage[key];
			}

			this.sessionStorage = sessionStorage;
		} else {
			console.info('Locally isn\'t supported on this browser.');
		}
	}
};


Locally.init();
localStorage.clear();
for(var i=1; i<=1000; i++){
	Locally.localData = { index: i, value:'test' };
}
