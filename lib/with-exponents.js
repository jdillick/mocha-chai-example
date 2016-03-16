var mixIn = function(destination, source) {
  for ( k in source ) {
    if ( source.hasOwnProperty(k) ) {
      destination[k] = source[k];
    }
  }

  return destination;
};


var exponents = {
  pow: function(x, n) {
    return Math.pow(x, n);
  },

  multiplyExp: function(a, b) {
    return this.pow(a[0], a[1]) * this.pow(b[0], b[1]);
  },

  divideExp: function(a, b) {
    return this.pow(a[0], a[1]) / this.pow(b[0], b[1]);
  }
};

module.exports = function() {
  return mixIn(this, exponents);
};