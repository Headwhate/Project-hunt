const express = require('express');
const router = express.Router();
const products = require('./products.js');
router.get('/', (request, reponse) =>{
  reponse.render('layout');
});
router.use(products);

module.exports = router;
