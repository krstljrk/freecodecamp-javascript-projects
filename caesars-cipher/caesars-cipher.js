function rot13(str) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const rot13Alphabet = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    let regex = /\W/;

    let arrToCipher = str.split('');
    console.log(arrToCipher);

    let decipheredMessage = arrToCipher.map(letter => {
        if (regex.test(letter)) {
            return letter;
        } else {
            let index = rot13Alphabet.indexOf(letter);
            return alphabet[index];
        }

    });

    console.log(decipheredMessage.join(''));

    return decipheredMessage.join('');
}

rot13("SERR PBQR PNZC");
