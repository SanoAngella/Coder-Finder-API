<<<<<<< HEAD
const express =require('express');
const router = express.Router();
const Coder = require('../models/coder')

// Get a list of coders from db
router.get('/coders', function(req, res, next) {
    // Coder.find({}).then(function(coders) {
    //     res.send(coders);
    // }).catch(next);
=======
const express = require('express');
const router = express.Router();
const Coder = require('../models/coder');

router.get('/coders', function(req, res, next) {
>>>>>>> a787be6a345f3599ee144b82f28df162602d5b22
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);

    if (isNaN(lng) || isNaN(lat)) {
<<<<<<< HEAD
        return res.status(400).send({ error: "Please provide lng and lat in the URL" });
    } 

    Coder.aggregate([
    {
        $geoNear: {
            near: { type: 'Point', coordinates: [lng,  lat] },
            distanceField: "dist.calculated",
            maxDistance: 20000,
            spherical: true
        }
    }
]).then(function(coders){
    res.send(coders);
}).catch(next);
});

// Add a new Coder
=======
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

>>>>>>> a787be6a345f3599ee144b82f28df162602d5b22
router.post('/coders', function(req, res, next) {
    Coder.create(req.body).then(function(coder) {
        res.send(coder);
    }).catch(next);
<<<<<<< HEAD

    // res.send({
    //    type: 'POST',
    //    name: req.body.name,
    //    prof: req.body.prof
    // });
}); // Fixed: Moved the closing brace here

// Update a coder in the db
=======
});

>>>>>>> a787be6a345f3599ee144b82f28df162602d5b22
router.put('/coders/:id', function(req, res, next) {
    Coder.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(function(coder) {
        res.send(coder);
    }).catch(next);
<<<<<<< HEAD
}); 

// delete a coder from the db
=======
});

>>>>>>> a787be6a345f3599ee144b82f28df162602d5b22
router.delete('/coders/:id', function(req, res, next) {
    Coder.findByIdAndDelete({ _id: req.params.id }).then(function(coder) {
        res.send(coder);
    }).catch(next);
<<<<<<< HEAD
    // res.send({type: 'DELETE'});
});

module.exports = router;
=======
});

module.exports = router;
>>>>>>> a787be6a345f3599ee144b82f28df162602d5b22
