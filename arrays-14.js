//ARRAYS

const arr = [0, 1, 2, 3,4,5,6]
console.log(arr);

const arr2 = new Array(1, 2, 3, 4)
console.log(arr2);

//ARRAYS METHODS

arr.push(10) //inserts 10 at the end of the array
console.log(arr);

arr.pop() //deletes the last element in the array..
console.log(arr);

arr.pop(2) //.BETE , POP KE ANDAR KUCH NAHI DETE AAAAHN MERI JAAN , AS ABHI BHI VO LAST ELEMENT HI DELETE KREGA , POP KE BRACKET KE ANDAR KUCH DO YA NA DO
console.log(arr);

arr.unshift(9) //unshift aage se element daaldeta h jo tum uske bracket me doge
console.log(arr);

arr.shift() //aage se elemnt delete krdeta hai , pop ki trh bracket me kuch do na do koi frk ni penda , elemnt to aage wala hi delete krega
console.log(arr);

console.log(arr.includes(9));
console.log(arr.includes(2));
console.log(arr.indexOf(19));
console.log(arr.indexOf(2));

const arr3 = arr.join()
console.log(arr);
console.log(arr3);
console.log(typeof arr3);

//slice,splice

//normal
console.log("A ",arr);

//slice
console.log("B ",arr);
const mya1 = arr.slice(1,3)
console.log(mya1);

//splice
console.log("C ",arr);
const mya2 = arr.splice(1,3)
console.log(mya2);




