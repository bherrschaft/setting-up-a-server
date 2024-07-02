const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Root route - Respond with an HTML page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if (req.url === '/api') {
    // /api route - Respond with JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, this is your API response' }));
  } else {
    // Undefined routes - Respond with 404 error
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
