const ProductController = require('../controllers/products.controllers');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/allproducts', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}
