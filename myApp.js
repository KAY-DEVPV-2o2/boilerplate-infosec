const express = require('express');
const helmet = require('helmet'); // Require Helmet for security
const path = require('path'); // Useful for serving static files
const app = express();

// Use Helmet to set security-related HTTP headers
app.use(helmet());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World! Express and Helmet are running.');
});

// Set up a specific route (example for "/about")
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Error handling for unknown routes
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Start the app on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});
















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
