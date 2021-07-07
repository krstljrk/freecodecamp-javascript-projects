function palindrome(str) {
    var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reverseStr = cleanStr.split('').reverse().join('');
    console.log(reverseStr);
    return cleanStr == reverseStr;
}



palindrome("race car");