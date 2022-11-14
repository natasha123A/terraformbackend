const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

// Routes
router.post('/getTeacher',loginController.getTeacher);      
router.post('/addTeacher',loginController.addTeacher);       
    
module.exports = router;    