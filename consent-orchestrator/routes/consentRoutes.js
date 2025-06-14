const express = require('express');
const router = express.Router();

// Dummy test route
router.post('/submit', (req, res) => {
  res.json({ message: 'Consent received!' });
});

module.exports = router;
