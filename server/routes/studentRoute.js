const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

// Routes  
router.post('/result',studentController.findAll);      
 
    
module.exports = router;    
