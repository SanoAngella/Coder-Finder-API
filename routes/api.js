const express =require('express');
const router = express.Router();
const Coder = require('../models/coder')

// Get a list of coders from db
router.get('/coders', function(req, res, next) {
    Coder.find({}).then(function(coders) {
        res.send(coders);
    }).catch(next);
});

// Add a new Coder
router.post('/coders', function(req, res, next) {
    Coder.create(req.body).then(function(coder) {
        res.send(coder);
    }).catch(next);

    // res.send({
    //    type: 'POST',
    //    name: req.body.name,
    //    prof: req.body.prof
    // });
}); // Fixed: Moved the closing brace here

// Update a coder in the db
router.put('/coders/:id', function(req, res, next) {
    Coder.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function(coder) {
        res.send(coder);
    }).catch(next);
}); 

// delete a coder from the db
router.delete('/coders/:id', function(req, res, next) {
    Coder.findByIdAndDelete({ _id: req.params.id }).then(function(coder) {
        res.send(coder);
    }).catch(next);
    // res.send({type: 'DELETE'});
});

module.exports = router;