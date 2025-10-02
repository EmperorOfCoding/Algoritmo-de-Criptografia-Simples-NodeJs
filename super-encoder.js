// Import the encryptors functions here.
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors.js');

const keyValue = 9;

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    const reverseCipherValue = reverseCipher(str);
    const caesarCipherValue = caesarCipher(reverseCipherValue, keyValue);
    const symbolCipherValue = symbolCipher(caesarCipherValue);

    return symbolCipherValue;
}

const decodeMessage = (str) => {
    // Use the encryptor functions here.
    const symbolCipherValue = symbolCipher(str);
    const caesarCipherValue = caesarCipher(symbolCipherValue, -keyValue);
    const reverseCipherValue = reverseCipher(caesarCipherValue);

    return reverseCipherValue;
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
        output = encodeMessage(str);
    }
    if (process.argv[2] === 'decode') {
        output = decodeMessage(str);
    }

    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);