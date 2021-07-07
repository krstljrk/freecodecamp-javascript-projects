function convertToRoman(num) {
    let roman = "";

    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    let romanKey = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };

    for (let i = 0; i < numbers.length; i++) {
        while ((num - numbers[i]) >= 0) {
            roman = roman.concat(romanKey[numbers[i]]);
            num -= numbers[i];
        }
    };
    return roman;
}

console.log(convertToRoman(2));