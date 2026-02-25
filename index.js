// Commit #1 at 2026-02-25 10:14:22
// const fs = require("fs");
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

// fs.unlinkSync('./hello.txt');

// const os = require('os');
// console.log('Operating System:', os.platform());
// console.log('UserInfo:', os.userInfo());
// console.log('CPU', os.arch());
// console.log('Free Memory', os.freemem());

// const http = require("http");
// const fs = require("fs");
// const home = fs.readFileSync("index.html");
// const myserver = http.createServer((req, res) => {
//   // console.log('Received request for URL:');
//   // res.end('Hello, World!');

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");

  // res.end('Hello, World!');
  // res.end(home);
// });
// myserver.listen(8080, () => {
  // console.log("Server is listening on port 8080");
// });

