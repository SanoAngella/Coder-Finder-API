const express =require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/Coder-Blooded');
mongoose.Promise = global.Promise;

<<<<<<< HEAD


=======
>>>>>>> a787be6a345f3599ee144b82f28df162602d5b22
mongoose.connection.once('open', function(){
   console.log('Connection has been made')
}).on('error', function(error){
   console.log('Connection error:', error)
})

<<<<<<< HEAD
app.use(express.static('public')); 

=======
>>>>>>> a787be6a345f3599ee144b82f28df162602d5b22
app.use(bodyParser.json());

// initialize the routes 
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
   //console.log(err);
   res.status(422).send({error: err.message})
})


// listen for requests 
app.listen(process.env.PORT || 3000, function(){
console.log('now listening for requests');
});
