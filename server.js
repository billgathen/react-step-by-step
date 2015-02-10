var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3000);
console.log('Server listening at http://localhost:3000');
console.log('Press ctrl-c to stop');