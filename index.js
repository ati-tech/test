const express = require('express');
const app = express();

// Whenever someone visits '/', we redirect to Google
app.get('/', (req, res) => {
  res.redirect('https://embeds.beehiiv.com/8e14a814-c5fb-4b5f-a671-86dd4ae6795c');
});

// Let's use the port Railway provides, or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
