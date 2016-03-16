var Calculator = require('./calculator');

var ScientificCalculator = function(){
  Calculator.call(this);
};

ScientificCalculator.prototype.constructor = ScientificCalculator;
ScientificCalculator.prototype = Object.create(Calculator.prototype);
ScientificCalculator.prototype.sin = function(arcLength) {
  return Math.sin(arcLength);
};

ScientificCalculator.prototype.cos = function(arcLength) {
  return Math.cos(arcLength);
};

ScientificCalculator.prototype.tan = function(arcLength) {
  return Math.tan(arcLength);
};

ScientificCalculator.prototype.log = function(n) {
  return Math.log(n);
};

module.exports = ScientificCalculator;