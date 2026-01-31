const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const GeoSchema = new Schema({
  type:{
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
})

//Create coder Schema & model
const CoderSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    prof: {
        type: String, 
    },
    available: {
        type: Boolean,
        default: false
    },
    
    //add in geo location
 geometry: GeoSchema

});
const Coder= mongoose.model('coder', CoderSchema);
module.exports = Coder;
