const fibonacci = function(num) {
    let num1 = 0, num2 = 1, sum;
    if(num<0) return "OOPS";
    if(num === 0) return 0;
    for (i=1; i< Number(num); i++){
        sum=num1+num2;
        num1=num2;
        num2=sum;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
