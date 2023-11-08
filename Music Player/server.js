const express = require('express');
const app = express();
const path = require('path');

// Define the directory where your audio files are stored
const audioDirectory = path.join(__dirname, 'Music');

// Serve static files (your audio files)
app.use('Music', express.static(audioDirectory));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

