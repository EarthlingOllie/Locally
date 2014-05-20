//Locally, a simple yet efficient way to store local data efficiently.

/*

 Locally.prototype._init = function() {

 if(typeof Storage !== 'undefined') {
 if(typeof localStorage !== 'undefined') {

 } else {
 log('This browser does not support local storage');
 }

 if(typeof sessionStorage !== 'undefined') {

 } else {
 log('This browser does not support session storage');
 }
 } else {
 log('This browser does not support any storage');
 }
 };

 Locally._init();


 */

var Locally = {

    /* Session data will be stored in here */
    _session: [],
    /* Persistent storage will be stored in here */
    _persistent: [],

    init: function() {

        if(typeof Storage !== 'undefined') {

        } else {
            console.info('This browser does not support Locally');
        }
    },

    session: function(name) {

        function init() {
            if(!this._session[name]) {
                localStorage.setItem(name, []);
            }
        }

    }
};


Locally.session('test');
