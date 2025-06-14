const express = require('express');
const router = express.Router();
const agreementController = require('../controllers/agreementController');

router.post('/', agreementController.createAgreement);
router.get('/', agreementController.getAgreements);
router.get('/:id', agreementController.getAgreementById);
router.put('/:id', agreementController.updateAgreement);
router.delete('/:id', agreementController.deleteAgreement);

module.exports = router; 