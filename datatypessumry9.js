//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const score2 = 100.5

const isLoggedIn = false
const xyz = null //null means ek variable me kuch nhi h vo khaali pada hai
let userMail; //ab ye undefined hogya , hmne variable to declare kardiya but usko kuch value nhi di jisse uska datatype defined nahi ho paaya

const id = Symbol('1234')
const id2 = Symbol('1234')
console.log(id === id2);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["doramon" , "pukkilaal" , "rajandon"]; //array '

// ab jo bhi brackets ke andar hai wo object hai
let myOBJ = {
    name: "shashank",
    age: 19,
}

//funtion ko define krne ka way ====== function(){}
const myFunction = function(){
    console.log("hello world");
}

//non primitive ka datatype hmesha function hi aata h , function ka bhi function object aata h but show sirf object krta h to confuse mt hona 
console.log(typeof myFunction);
console.log(typeof myOBJ);

