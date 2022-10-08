const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/getUserList/1637', (req, res) => {
    const response = path.resolve(__dirname, '../data/user-list1.json');
    setTimeout(_=>{
        res.sendFile(response);
    },2000)
});

router.get('/getUserList/5638', (req, res) => {
    const response = path.resolve(__dirname, '../data/user-list2.json');
    res.sendFile(response);
});
router.get('/getUserList/9125', (req, res) => {
    const response = path.resolve(__dirname, '../data/user-list3.json');
    res.sendFile(response);
});
router.get('/getUserList/91251', (req, res) => {
    const response = path.resolve(__dirname, '../data/user-list3.json');
    res.sendFile(response);
});
router.get('/getUserList/91252', (req, res) => {
    const response = path.resolve(__dirname, '../data/failure-response.json');
    setTimeout(_=> {
        res.status(401).sendFile(response);
    } ,2000);
});

router.post('/addUser', (req, res) => {
    const response = path.resolve(__dirname, '../data/create-user-success.json');
    res.status(200).sendFile(response);
})

router.post('/updateUser', (req, res) => {
    const response = path.resolve(__dirname, '../data/update-user-success.json');
    res.status(200).sendFile(response)
})

router.post('/deleteUser', (req, res) => {
    const response = path.resolve(__dirname, '../data/delete-user-success.json');
    res.status(200).sendFile(response);
})
module.exports = router;