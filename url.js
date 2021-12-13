const url = require('url');

const address = 'http://localhost:8080/default.html';

const parsedUrl = url.parse(address, true);
console.log(parsedUrl.host);
