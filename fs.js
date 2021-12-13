const fs = require('fs');

// fs.writeFile('message.txt', 'hello there', err => {
//     if(err) throw err;

//     console.log('File has been written');
// });

console.log('hello');

fs.readFile('./message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
