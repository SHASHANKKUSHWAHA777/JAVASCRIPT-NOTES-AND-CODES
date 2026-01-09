//num - num comparison
console.log(35 > 1);
console.log(10 < 6);
console.log(2 >=2);
console.log(5 == 7);
console.log(2 != 2);

//str - num/bool/etcetc comparison
console.log("2" >= 2);
console.log("02" >= 1);
console.log("2" > true);
console.log("2" == true);

//null comparison (hazardous and poor code readability)
console.log(null > 0); //in case of comparison ops like >,<,<=,>= 4
console.log(null == 0);
console.log(null >= 0);

//undefined comparison (hazardous and poor code readability)
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strict check ===
console.log("2" === 2); //strict check i.e. === not only checks value but also data type , if data type not same then returns false