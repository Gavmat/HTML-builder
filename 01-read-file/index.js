// let fs = require('fs');
// let fileContent = fs.readFileSync('text.txt', 'utf-8');
// console.log(fileContent);
// console.log('--------------------');

const fs = require('fs');
const path = require('path');
const { stdout } = require('process')
let stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
stream.on('data', data => stdout.write(data));

// stream.on('readable', function () {
//     let data = stream.read();
//     console.log(data);
// })

// stream.on('end', function () {
//     console.log('the end');
// })



