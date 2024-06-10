const { createOrder, updateOrder } = require("../services/order.service");
const orderService = require("../services/order.service.js");
const userService = require("../services/user.service.js");


module.exports = {

    // customer order controller

    createOrder: async (req, res) => {


        try {
            
const order = req.body;
const user = req.user;

const paymentResponse = await orderService.createOrder(order, user);

res.status(200).json(paymentResponse);

        } catch (error) {
            
            if ( error instanceof Error) {
                res.status(400).json({error: error.message });
            } else {
                res.status(500).json({ error: "Internal server error"});

          
            }
        }
    },


    getAllUserOrders: async (req, res) => {

try {
    user = req.user;
    
    const userOrders = await userService.getAllUserOrders(user._id);
    res.status(200).json(userOrders);

    
} catch (error) {
    
    if (error instanceof Error) {
        res.status(400).json({ error: error.message });
    } else {
        rs.status(500).json({ error: "Internal server error"});
    }
}

    },


    //admin order controller

    deleteOrder: async (req, res) => {

try {
    const { orderId } = req.params;
    await orderService.cancelOrder(orderId);
    res.status(200).json({ message: `Order deleted with id ${orderId}` })
    
} catch (error) {
    
    if (error instanceof Error) {
        res.status(400).json({ error: error.message });
    } else {
        res.status(500).json({ error: 'Internal server error' });
    }
}

    },


    getAllRestaurantOrders: async (req, res) => {

try {

    const { restaurantId } = req.params;
    const { order_status } = req.query;
    const orders = await orderService.getOrdersOfRestaurant(restaurantId, order_status);
    res.status(200).json(orders);
} catch (error) {
    
    if (error instanceof Error) {
        res.status(400).json({ error: error.message });
    } else {
        rse.status(400).json({error: 'Internal server error'});
    }
}

    },


    updateOrder: async (req, res) => {

try {
    
const { orderId, orderStatus } = req.params;
const order = await orderService.updateOrder(orderId, orderStatus);
res.status(200).json(order);

} catch (error) {
 
    if (error instanceof Error) {
        res.status(400).json({ error: error.message });
    } else {
        res.status(500).json({ error: "Internal server error"});
    }
}

    },
};