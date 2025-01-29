const express = require('express');
const router = express.Router();
const setuserControllerRoutes = require('../module/controllers/userController/routes')

setuserControllerRoutes(router)

module.exports =  router;