const express = require('express');
const router = express.Router();
const productCatalogController = require('../controllers/productCatalogController');

router.get('/', productCatalogController.getAllCatalogs);
router.get('/:id', productCatalogController.getCatalogById);
router.post('/', productCatalogController.createCatalog);
router.patch('/:id', productCatalogController.updateCatalog);
router.delete('/:id', productCatalogController.deleteCatalog);

module.exports = router;
