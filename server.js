const express = require('express');
const { test } = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/test', (req, res) => {
    res.json(test);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});