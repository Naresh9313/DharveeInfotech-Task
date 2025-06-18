const express = require('express');
const router = express.Router();

const user= require('./userRouter/userRoutes');
router.use(user);


module.exports =router;