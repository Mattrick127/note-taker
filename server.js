const express = require('express');
const { text } = require('./db/db.json');


const PORT = process.env.PORT || 3001;
const app = express();

app.get('/api/text', (req, res) => {
    res.send('Hello!')
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});