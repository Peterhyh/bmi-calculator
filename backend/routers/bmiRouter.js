const express = require('express');
const router = express.Router();
const Bmi = require('../model/bmi');

router.get('/', (req, res, next) => {
    Bmi.findOne()
        .then(bmi => {
            console.log('---LOG:', bmi)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(bmi)
        })
        .catch(err => next(err));
})


router.post('/', (req, res) => {
    Bmi.create(req.body)
    const calculate = Math.round(((req.body.weight * 703) / Math.pow(req.body.height, 2)) * 100) / 100;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(`BMI: ${calculate}`);
})


router.put('/', (req, res) => {

})


router.delete('/', (req, res) => {

})


module.exports = router;