const router = require('express').Router();
const { findNotes } = require('../../lib/notes')
const { notes } = require('../../data/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = findNotes(req.query, results);
    }
    res.json(results);
})

module.exports = router;