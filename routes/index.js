const express = require('express');
const router = express.Router();

const homeController=require('../controllers/home_controller');
console.log("router loaded");

router.get('/', homeController.home);

router.use('/page',require('./page'));

//for any further routes acces from here
//router.use('routename',require('routerpath'));

module.exports = router;