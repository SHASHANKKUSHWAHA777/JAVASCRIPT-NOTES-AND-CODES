// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();//dusra iife chalne ke liye phle iife ko end hona hoga ek time pe nahi to error aajaega , to phle iife ko end krne k liye ";" semicolon , same goes for 2nd ifee 3 ifee and so on.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//un named/normal iife ,,,bas paramenter me name passed hai.
