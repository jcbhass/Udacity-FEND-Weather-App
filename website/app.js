/* Global Variables */
//const zipCode = document.getElementById('zip');
const userFeelings = document.getElementById('feelings');
const appButton = document.getElementById('generate');
const guestEntry = document.getElementById('entryHolder');
const todaysDate = document.getElementById('date');
const todaysTemp = document.getElementById('temp');
const boxContent = document.getElementById('content');
let  baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=`; //`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us;`;
let apiKey = `ded2480664e28367b432793866b6b8c5`;
const newAnimal = document.getElementById('zip').value;

//{zip code},{country code}

//https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code};
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ded2480664e28367b432793866b6b8c5
// const weatherURL = ;
// const weatherKey = ;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



// function GenerateResults {
//     //have the click responde and show results of the entry items
    
// };
// appButton.addEventListerner('click', GenerateResults()); 
appButton.addEventListener('click', performAction); //performAction Function

function performAction(e){
  //const newZipCode = document.getElementById('zip').value;

  getAnimalDemo(baseURL, newAnimal, apiKey)
};
////////////////


const getAnimalDemo = async (baseURL, zip, key)=>{
      const res = await fetch('/fakeAnimalData') //url for http

      try {
        const data = await res.json();
        console.log(data);
        //return data;
      }catch(error) {
      console.log("error", error);
      }
}



// let data = request.body; projectData["intelligence"]= data.intelligence; 
// project endpoint so the data isn't visible but stored. 


//*******************
//Example
//const data = [{animal:"elephant", score: 10},{animal:"kangaroo",score:3}]
//
//function makeData(request){
//
//}
//
//makeData({body:{animal:"turtle", score:7}}) 
// let newData = request.body;
// let newEntry = {
//     animal: newData.animal,
//     score: newData.score
// };
// data.push(newEntry);
//
//
//Another Example
// Let's say there's a client side POST request written in a function, postData(). Assume postData() sent a POST request to your server with the data: {answer:42}. Complete the following server side code to add the body of the request directly to the project endpoint, named projectData.

// ...
// projectData = [];
// app.post('/add', function(request, response){
//   projectData.push(request.body);// Your code goes here   
// }) 







////////////////////////////////////
//Prpmises

// var promise = new Promise(function(resolve, reject) {
//     // do a thing, possibly async, then…
  
//     if (/* everything turned out fine */) {
//       resolve("Stuff worked!");
//     }
//     else {
//       reject(Error("It broke"));
//     }
//   });
  
  
//   ///////////////////////////////////////
//Async
//   const postData = async ( url = '', data = {})=>{
//       // console.log(data)
//         const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data), // body data type must match "Content-Type" header        
//       });
  
//         try {
//           const newData = await response.json();
//           console.log(newData);
//           return newData
//         }catch(error) {
//         console.log("error", error);
//         // appropriately handle the error
//         }
//     }
  
//     postData('/addMovie', {movie:' the matrix', score: 5})









// let baseURL = 'http://api.animalinfo.org/data/?animal='
// let apiKey = '&appid=9f15e45060...';

// document.getElementById('generate').addEventListener('click', performAction);

// function performAction(e){
// const newAnimal =  document.getElementById('animal').value;
// getAnimal(baseURL,newAnimal, apiKey)

// }
// const getAnimal = async (baseURL, animal, key)=>{

//   const res = await fetch(baseURL+animal+key)
//   try {

//     const data = await res.json();
//     console.log(data)
//     return data;
//   }  catch(error) {
//     console.log("error", error);
//     // appropriately handle the error
//   }
// }



////////////////////////////////////////
//Async GET
// const retrieveData = async (url='') =>{ 
//     const request = await fetch(url);
//     try {
//     // Transform into JSON
//     const allData = await request.json()
//     }
//     catch(error) {
//       console.log("error", error);
//       // appropriately handle the error
//     }
//   }





// By ZIP code
// Description:

// Please note if country is not specified then the search works for USA as a default.

// API call:

// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}
// Examples of API calls:


// Parameters:

// zip zip code