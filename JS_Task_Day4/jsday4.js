//////////////////                  Question 1                  //////////////////
///////   How to Compare two JSON have the same properties without order  ///////

// var 
// obj1 = {name: "Person 1",age : 5},
// obj2 = {age : 5,name: "Person 1"};


// console.log(_.isEqual(obj1,obj2));


//Using JAVASCRIPT

//JSON.stringify(obj1) === JSON.stringify(obj2); // false

/*
For JSON.stringify(), the order matters. 
So if the key-value pair are ordered differently in the two objects but are the same, it will return false.
*/

//Using Lodash

/*
Properties order doesn't matter in Lodash "isEqual", 
it will return true as along as the key-value pair exists.
*/
// Refer this link to know more about Json comparision
//https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/



//////////////////                  Question 2                  //////////////////
//use the rest countries API URL  and display all the countries flag in the console//
////////////////////   https://restcountries.com/v3.1/all    ////////////////////

// let xhr = new XMLHttpRequest();

// let url = "https://restcountries.com/v3.1/all";


// xhr.open("GET", url, true);
// xhr.onload = function() {

//   let data = JSON.parse(xhr.responseText);

//   data.forEach(function(country) {

//     const flagImg = new Image();
//     flagImg.src = country.flags.png;
//      flagImg.onload = function(){
//         console.log(country.name.common,'=',flagImg);
//     }
      
//   });
// };
// xhr.send();


//////////////////                  Question 3                  //////////////////


let xhr = new XMLHttpRequest();

let url = "https://restcountries.com/v3.1/all";


xhr.open("GET", url, true);
xhr.onload = function() {

  let data = JSON.parse(xhr.responseText);

  data.forEach(function(country) {
        console.log('Country Name :',country.name.common,';','Country Region :', country.region,';','Country Sub-Region :',country.subregion,';','Country Population :',country.population)

  });
};
xhr.send();






