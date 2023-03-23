const repeatString = function(string, num) {
    let stringVal = '';
    if(num < 0){
        return 'ERROR'
    } else {
        for(i=0; i<num; i++){
            stringVal += string;
        }
        return stringVal;
    }
};

// Do not edit below this line
module.exports = repeatString;
