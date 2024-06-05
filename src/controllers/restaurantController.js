const restaurantService = require("../service/restaurantService");
const { createRestaurant } = require("../service/restaurantService");

module.exports={

createRestaurant:async (req,res)=>{

try {
    
const user = req.user;

const restaurant=await restaurantService.createRestaurant(
    req.body,
    user
);

} catch (error) {
    res.status(400).json({error:error.message})
}

},

};