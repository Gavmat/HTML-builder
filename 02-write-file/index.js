const fs = require('fs');
const path = require('path');
// Модуль общения с пользователем через консоль
const readline = require('readline');
let textFile = path.resolve(__dirname, './text.txt');

const writeToFile = fs.createWriteStream(textFile);
const rline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Введите ваш текст. Для выхода нажмите exit');

rline.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        console.log('До свиданья!');
        process.exit();
    } else {
        writeToFile.write(input + '\n', (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
});
