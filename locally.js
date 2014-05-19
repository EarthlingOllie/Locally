//Locally, a simple yet efficient way to store local data efficiently.

var inDevelopment = true;

window.log = function(data) {
    if(inDevelopment) {
        console.log(data);
    }
};

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
    init: function() {

        if(typeof Storage !== 'undefined') {

        }
    }
};


log('Your mum');