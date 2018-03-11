const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/Person');

router.post('/', (req, res) => {
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

router.get('/', (req, res) => {
    Message.find({}, (error, foundMessages) => {
        if (error) {
            console.log('error on get: ', error);
            res.sendStatus(500);
        } else {
            res.send(foundMessages);
        }
    })
})






module.exports = router;