const express = require("express");
const router = express.Router();

const orderController =require('../controller/adminOrder.controller');
const authenticate = require("../middleware/authenticate");

router.get('/',authenticate, orderController.getAllOrders);
// authenticate middleware 
//if user req this endpoint it goes to authenticate middleware
// and in this retrieve token and respond  like  token not found or send user to request middleware 
// and then go to next middleware
// and goes to orderController middleware and perform


router.put('/:orderId/confirmed', authenticate, orderController.confirmedOrders);
// Route to confirm an order


// Route to mark an order as shipped
router.put('/:orderId/ship', authenticate, orderController.shippOrders);

// Route to mark an order as delivered
router.put('/:orderId/deliver', authenticate, orderController.deliverOrders);

// Route to cancel an order
router.put('/:orderId/cancel', authenticate, orderController.cancelledOrders);

// Route to delete an order
router.delete('/:orderId/delete', authenticate, orderController.deleteOrders);

module.exports = router;