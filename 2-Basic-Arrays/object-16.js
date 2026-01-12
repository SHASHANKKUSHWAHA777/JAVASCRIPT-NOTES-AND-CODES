//singleton in case of Object.create

//in case of object.literals , see below
const mySym = Symbol("key1")

const JsUser = {
    name : "Shashank",
    "full name" : "Shashank Kushwaha",
    [mySym]: "mykey1",
    age:18,
    location: "jaipur",
    email: "hoshdal@proton.me",
    isloggedIN: false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email); //1st way of printing something from the object
console.log(JsUser.isloggedIN);
console.log(JsUser.mySym);
console.log(JsUser["email"]); //2nd way of printing something from the object
console.log(JsUser[mySym]); //symbol printing

//OBJECT FREEZING
JsUser.email = "pukkansinghpukke@iiii.in"
//Object.freeze(JsUser) //OBJECT FREEZING CONCEPT
JsUser.email = "navelipinono@chokha.in"
console.log(JsUser.email); //DEKHO AB HUMNE UPAR OBJECT OM FREEZE KRDIYA TO DUSRI BAAR EMAIL CHANGE NHI HUA AS AB VO FREEZED HOGYI H

//FUNCTION IN JS IS TREATED AS A NORMAL VARIABLE
JsUser.greeting = function(){
    console.log("hello elliot");
}
JsUser.greetingTwo = function(){
    console.log(`hello mr.robot, ${this.name}`);
    
    console.log(`hello mr.robot, ${this["full name"]}`)
}
//gotta comment object freezing wali chiz as agar obj freezed h to printing and obj se related chiz me problems aa jaengi
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(`hello, ${this.name}`); //kisi function ke usi function ke object me se kisi kocall kroge to undefined aaega and this keyword us chiz ko call nhi kr paega agar fnk ke bahar kroge to 

