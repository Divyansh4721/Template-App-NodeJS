const express = require('express');
const router = express.Router();

const pageController=require('../controllers/page_controller');
console.log("page router loaded");

router.get('/', pageController.page);

module.exports = router;