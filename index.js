const express = require('express');
const app = express();

// Define the port to run the server on
const PORT = process.env.PORT || 3000;

// Root route that returns 'hello world'
app.get('/', (req, res) => {
  res.send('hello world');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});