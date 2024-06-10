const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authenticate");
const orderController = require("../controllers/orderController");

router.delete('/:orderId',authenticate, orderController.deleteOrder);
router.get('/restaurant/:restauantId',authenticate, orderController.getAllRestaurantOrders);
router.put('/:orderId:orderStatus', authenticate, orderController.updateOrder);

module.exports = router; 

