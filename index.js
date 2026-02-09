const fs = require('fs');
// fs.writeFile('./hello.txt', 'Hello, World!', () => {  });

// fs.readFile('./hello.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log(data);
// });

// fs.appendFile('./hello.txt', '\nAppended text.', (err) => {
//     if (err) {
//         console.error('Error appending to file:', err);
//         return;
//     }
//     console.log('Text appended successfully.');
// });

// fs.cpSync('a1.txt', 'b2.txt');
// fs.cp('a1.txt', 'b2.txt', (err) => {
//     if (err) {
//         console.error('Error copying file:', err);
//         return;
//     }
//     console.log('File copied successfully.');
// });

fs.unlinkSync('./hello.txt');
