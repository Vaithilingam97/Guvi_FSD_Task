//////////////////                  Question 1                  //////////////////
////////////////// Json Iteration over for loops in JavaScript //////////////////

//Json - JavaScript Object Notation

//Let us consider this JavaScript Object named myData to understand about Json Iteration over for loops in JavaScript

var myData = {
    "name": "Vaithi",
    "age": 25,
    "city": "Trichy",
    "hobbies": ["Listening to Music", "Reading", "Writing ", "Exploring"]
};

//////////////////            for Loop            //////////////////
console.log("// FOR LOOP OUTPUT //")
console.log(" ")

for(let i = 0; i<myData.hobbies.length ; i++)
{
    console.log(myData.hobbies[i])
}

console.log(" ")

//////////////////            for-in Loop            //////////////////
console.log("// FOR_IN LOOP OUTPUT")
console.log(" ")
for(const prop in myData)
{
    console.log(`${prop} : ${myData[prop]}`)
}

console.log(" ")

//////////////////            for-of Loop            //////////////////
console.log("// FOR_OF LOOP OUTPUT")
console.log(" ")

for(const value of myData.hobbies)
{
    console.log(value)
}

console.log(" ")

//////////////////            for-each Loop            //////////////////
console.log("// FOREACH LOOP OUTPUT")
console.log(" ")

myData.hobbies.forEach(hobby =>{
    console.log(hobby)
})

console.log(" ")

//////////////////               OUTPUT               //////////////////
/*

// FOR LOOP OUTPUT //
 
Listening to Music
Reading
Writing 
Exploring
 
// FOR_IN LOOP OUTPUT
 
name : Vaithi
age : 25
city : Trichy
hobbies : Listening to Music,Reading,Writing ,Exploring
 
// FOR_OF LOOP OUTPUT
 
Listening to Music
Reading
Writing 
Exploring
 
// FOREACH LOOP OUTPUT
 
Listening to Music
Reading
Writing 
Exploring

*/


//////////////////                  Question 2                  //////////////////
////////////////// Json Iteration over for loops in JavaScript //////////////////

const myResumeData = {

"name" : "Vaithilingam Algappan",
"email" : "vaithilingam97@gmail.com",
"Phone" : "+91-9600 980 492",
"Objective" : "I want to succeed in an environment of learning, growth and excellence to meet personal and Organizational goal",
"skills" : ["JavaScript","HTML","CSS","bootstarp","C#","ASP.NET","SQL","Angular"],
"education" : [
    {
        "qualification" : "B.E.(Mechanical Engineering)",
        "institution" : "Saranathan College Of Engineering",
        "yearofcompletion" : "2019",
        "percentage" : "73"
    },
    {
        "qualification" : "HSC",
        "institution" : "Sree Venkatesvara Vidhyala Hr.Sec School",
        "yearofcompletion" : "2015",
        "percentage" : "85.4"
    },
    {
        "qualification" : "SSLC",
        "institution" : "ST. Dominic Savio Matriculation School",
        "yearofcompletion" : "2013",
        "percentage" : "94.8"
    }
],
"experience" : [
    {
        "designation" : "Systems Engineer",
        "company" : "Kekran Mekran",
        "experience" : "1.5 years",
        "jobdescription" : "full stack web application developer"
    }
]
};

const myResumeDataJSON = JSON.stringify(myResumeData);
console.log(myResumeDataJSON);
