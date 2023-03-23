const convertToCelsius = function(degCel) {
  let celsius = (degCel - 32)*(5/9)
  if(celsius % 1 === 0){
    return celsius
  } else {
    return +celsius.toFixed(1)
  }
};

const convertToFahrenheit = function(degFar) {
  let fahrenheit = (degFar * (9/5) + 32)
  if(fahrenheit % 1 === 0){
    return fahrenheit
  } else {
    return +fahrenheit.toFixed(1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
