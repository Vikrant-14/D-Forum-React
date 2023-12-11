const express = require('express');
const router = express.Router();

const questionRouter = require('./Question')
const answerRouter = require('./Answer')
const authRoutes = require('./Login')

router.get('./',(req,res)=>{
    res.send("This api for reversed for quora clone")
});

router.use('/questions',questionRouter)
router.use('/answers',answerRouter)
router.use('/auth', authRoutes)

module.exports = router