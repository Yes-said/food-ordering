const express = require('express');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

const userController = require('../controllers/userController'); 



router.get("/profile",authenticate,userController.getUserProfileHandler);

module.exports=router;