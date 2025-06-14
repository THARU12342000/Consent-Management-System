const express = require('express');
const router = express.Router();
const consentController = require('../controllers/consentController');

router.post('/submit', consentController.handleConsentFlow);

module.exports = router;
