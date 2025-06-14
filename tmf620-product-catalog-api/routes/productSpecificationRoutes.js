const express = require('express');
const router = express.Router();
const productSpecificationController = require('../controllers/productSpecificationController');

router.get('/', productSpecificationController.getAllSpecifications);
router.get('/:id', productSpecificationController.getSpecificationById);
router.post('/', productSpecificationController.createSpecification);
router.patch('/:id', productSpecificationController.updateSpecification);
router.delete('/:id', productSpecificationController.deleteSpecification);

module.exports = router;
