// Setup empty JS object to act as endpoint for all routes
//projectData = {};

// Require Express to run server and routes
const express = require('express'); // I added
// Start up an instance of app
const app = express();// I added 
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');//I added 
app.use(cors()); //I added 
// Initialize the main project folder
app.use(express.static('website')); 


// Setup Server 
//I wrote all the below
const port = 7382; //local server setup 
const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);//Need to have the special number
};


/*Notes
*var bodyParser = require('body-parser')
*
*const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})
*/


//   app.get('/all', sendData);
//Dummy API Endpoint
const fakeData = {
  zip: '07670',
  fact: 'lions are fun'
}

app.get('/fakeAnimalData', getFetchData)

function getFetchData(req, res) {
  console.log(fakeData)
  res.send(fakeData);
};

const animalData = [];


app.get('/all', getData)

function getData (req, res) {
  res.send(animalData)
  console.log(animalData)
}



//app.post(())