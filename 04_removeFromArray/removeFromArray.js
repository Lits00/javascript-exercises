const removeFromArray = function(array, ...values) {
    for(i = values.length -1; i >= 0; i--){
        if(array.indexOf(values[i]) !== -1){
            array.splice(array.indexOf(values[i]), 1);
        } else {
            continue;
        }
    }
    // array.splice(array.indexOf(...values), 1)
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
