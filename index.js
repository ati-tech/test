const express = require('express');
const app = express();

// Whenever someone visits '/', we redirect to Google
app.get('/', (req, res) => {
  res.redirect('https://www.google.com');
});

// Let's use the port Railway provides, or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
