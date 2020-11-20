//Install express server
require.paths.push('/usr/local/lib/node_modules');
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/gameSweep'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/gameSweep/'}
);
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);