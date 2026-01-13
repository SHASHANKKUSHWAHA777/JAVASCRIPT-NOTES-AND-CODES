//FUNCTIONS are basically tumne jo bhi code likha h 10 line 20 line etc ka usko ek package me band krdiya h aur us pkg ko jaha chahe jab chahe vaha utha ke le jaa skte h ya access kr skte h
function eskaytheman(){
    console.log("E");
    console.log("S");
    console.log("K");
    console.log("A");
    console.log("Y");
}
eskaytheman //ye sirf function ko refer krta h execute nahi 
eskaytheman() //ye hai function execution jo function ko execute krdega

//function addTwoNumbers(number1, number2){ //PARAMETERS : ye jo bracket me number 1 , number2 likha hai ye PARAMETERS hai
  //  console.log(number1 + number2);
//}
//const result = addTwoNumbers(3,5) //ARGUMENTS: YE JO NICHE WALE BRACKETS ME HUM VALUES PASS KRTE H UNE ARGUMENTS BOLTE H
//console.log(result); //undefined aaega as humne result return nhi kiya tha fnk execute hone ke baad

//result ko return krenge aise
function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result //we can also write return number1 + number2 if we dont store the operation in result
    console.log("sk"); //return ke baad koi bhi operation ya kuch bhi likhi hui chiz nhi chlegi sab outreachable ho jaata h
}
    let result = addTwoNumbers(3,7) 
    console.log("RESULT: ",result); //ab reult me undefined nahi aega as ab usme return hoke value aagyi hai , ab result return hoke aagya h

   
