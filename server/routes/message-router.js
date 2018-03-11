const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/Person');

router.post('/', (req, res) => {
    console.log(req.body);
    let newMessage = new Message (req.body);
    newMessage.save((error, savedItem) => {
        if (error) {
            console.log('error on post: ', error);
            res.sendStatus(500);
        } else { 
            res.sendStatus(200);
        }
    })
})






module.exports = router;