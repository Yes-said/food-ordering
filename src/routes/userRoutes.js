const express = require('express');
const authenticate = require('../middleware/authenticate');
const router = express.Router();



router.get("/profile",authenticate,userController.getUserProfileHandler);