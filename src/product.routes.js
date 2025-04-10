const express = require('express');
const products = require('./products');
const { blockSpecialId } = require('./middleware');

const router = express.Router();

// handle get request for path /products
router.get('/products', (request, response) => {
   return response.json(products);
});

// handle get request for path /products/:id
router.get('/products/:id', blockSpecialId, (req, res, next) => {
   const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);

    if (!product) {
        const error = new Error('Product not found');
        error.statusCode = 404;
        return next(error); // Передаємо помилку в обробник помилок
    }

    res.json(product);
});

router.get('/productswitherror', (request, response) => {
   let err = new Error("Processing error ")
   err.statusCode = 400
   throw err
});


module.exports = router;