const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Job created');
});

router.get('/:id', (req, res) => {
  res.send(`Fetching job ${req.params.id}`);
});

module.exports = router;
