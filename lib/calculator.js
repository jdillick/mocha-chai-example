module.exports = function() {
  return {
    add: function(term1, term2) {
      return term1 + term2;
    },
    subtract: function(term1, term2) {
      return term1 - term2;
    },
    multiply: function(factor1, factor2) {
      return factor1 * factor2;
    },
    divide: function(dividend, divisor) {
      if ( ! divisor ) {
        return NaN;
      }

      return dividend / divisor;
    },
  };
};