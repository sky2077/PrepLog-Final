const express = require('express');
const router = express.Router();
const {isAuthenticatedUser, authorizeRoles} = require('../middlewares/auth');

const {getProducts} = require('../controllers/productController');

router.route('/products').get(isAuthenticatedUser,authorizeRoles("admin"),getProducts);

module.exports = router;