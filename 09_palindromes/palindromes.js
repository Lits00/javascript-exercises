const palindromes = function (str) {
    let re = /[\W_]/g;

    let newStr = str.toLowerCase().replace(re, '');

    let reverseStr = newStr.split('').reverse().join('');

    return reverseStr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
