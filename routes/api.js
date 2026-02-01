const express = require('express');
const router = express.Router();
const Coder = require('../models/coder');

router.get('/coders', function(req, res, next) {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);

    if (isNaN(lng) || isNaN(lat)) {
        return res.status(400).send({ error: "Please provide lng and lat" });
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

router.post('/coders', function(req, res, next) {
    Coder.create(req.body).then(function(coder) {
        res.send(coder);
    }).catch(next);
});

router.put('/coders/:id', function(req, res, next) {
    Coder.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function(coder) {
        res.send(coder);
    }).catch(next);
});

router.delete('/coders/:id', function(req, res, next) {
    Coder.findByIdAndDelete({ _id: req.params.id }).then(function(coder) {
        res.send(coder);
    }).catch(next);
});

module.exports = router;
