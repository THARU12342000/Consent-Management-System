const express = require('express');
const router = express.Router();
const controller = require('../controllers/privacyController');

router.post('/set', controller.setPreferences);
router.get('/:customerId', controller.getPreferences);

module.exports = router; 