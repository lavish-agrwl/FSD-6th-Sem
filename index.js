// Commit #10 at 2026-03-16 12:06:01
// Commit #9 at 2026-03-16 12:03:59
// Commit #8 at 2026-03-16 12:01:57
// Commit #7 at 2026-03-16 11:59:55
// Commit #6 at 2026-03-16 11:57:53
// Commit #5 at 2026-03-16 11:55:50
// Commit #4 at 2026-03-16 11:53:48
// Commit #3 at 2026-03-16 11:51:45
// Commit #2 at 2026-03-16 11:49:43
// Commit #1 at 2026-03-16 11:47:41
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
// const http = require("http");
// const fs = require("fs");
// const home = fs.readFileSync("index.html");
// const myserver = http.createServer((req, res) => {
//   // console.log('Received request for URL:');
//   // res.end('Hello, World!');

//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");

//   // res.end('Hello, World!');
//   res.end(home);
// });
// myserver.listen(8080, () => {
//   console.log("Server is listening on port 8080");
// });