const express = require('express');
const restaurantController = require('../controllers/restaurantController');
const router = express.Router();


router.get("/search",restaurantController.findRestaurantByName);
router.get("/",restaurantController.getAllRestaurants)
router.get("/:id",restaurantController.findRestaurantById);
router.get("/:id/add-favorites",restaurantController.addToFavorite)


module.exports=router;
