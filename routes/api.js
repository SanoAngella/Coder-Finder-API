const express = require('express');
const router = express.Router();
const Coder = require('../models/coder');

// Get a list of coders from db
router.get('/coders', function(req, res, next) {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);

    if (isNaN(lng) || isNaN(lat)) {
        return res.status(400).send({ error: "Please provide lng and lat in the URL" });
    } 

    Coder.aggregate([
        {
            $geoNear: {
                near: { type: 'Point', coordinates: [lng, lat] },
                distanceField: "dist.calculated",
                maxDistance: 100000,
                spherical: true
            }
        }
    ]).then(function(coders) {
        res.send(coders);
    }).catch(next);
});

// Add a new Coder
router.post('/coders', function(req, res, next) {
    Coder.create(req.body).then(function(coder) {
        res.send(coder);
    }).catch(next);
});

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
});

module.exports = router;
