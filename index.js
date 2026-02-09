const fs = require('fs');
// fs.writeFile('./hello.txt', 'Hello, World!', () => {  });

fs.readFile('./hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

