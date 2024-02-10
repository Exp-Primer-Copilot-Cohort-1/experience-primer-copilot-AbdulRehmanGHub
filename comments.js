// Create web server
var http = require('http');
var fs = require('fs');

// Create server
http.createServer(function (req, res) {
  // Read file
  fs.readFile('comments.html', function(err, data) {
    // Write head
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);  // Listen on port 8080

// Output
console.log('Server running on http://localhost:8080');