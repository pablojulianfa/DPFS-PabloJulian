const express = require('express');
const indexController = require('../controllers/index.controllers');
const router = express.Router()

// Vista del Home
router.get("/",indexController.getHome);

module.exports=router;