const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');


const userController = require('../controllers/userController'); 



router.get("/profile",authenticate,userController.getUserProfileHandler);

module.exports=router;