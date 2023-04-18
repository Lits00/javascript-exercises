const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(numbers) {
  let sum = 0;
	for(const item of numbers){
    sum += item;
  }
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  for(const item of numbers){
    product *= item;
  }
  return product;
};

const power = function(a, b) {
	return a**b
};

const factorial = function(num) {
	if(num === 0 || num === 1)
  return 1;
  for(i = num -1; i >= 1; i--){
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
