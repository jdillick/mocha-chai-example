var Promise = require('promise');

module.exports = function(delay, object, method, values) {
  var promise = new Promise(function(resolve, reject){
    var result = object[method].apply(object, values);
    setTimeout(function(){
      resolve(result);
    }, delay);
  });

  return promise;
};