const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Use `let` to allow updating of the data variable
let data = "I am Initial data";

// Endpoint to get data
app.get('/getdata', (req, res) => {
    res.send(data);
});

// Endpoint to update data
app.get('/updateData', (req, res) => {
    data = "Data is updated";
    res.send(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
