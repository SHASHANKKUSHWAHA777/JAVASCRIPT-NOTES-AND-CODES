const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) //isse pta lagta h aray kisi b datatype ke element ko array me store kar skta h , ab isi me dekhlo array ke andar array store krlis
//console.log(marvel_heros); 
//console.log(marvel_heros[3][1]); //array ki andar wali array ki position 3 , aur us array me jo element acces krna h uski postn 1 , so [3][1]...

const heros = marvel_heros.concat(dc_heros) //ye marvend dc arrays ko ek hui array me jod dis aur ek nayi array banalis
console.log(heros);

//spreading is used here which is more professional to use rather than using concat , spread just merges two arrays by first spreading each array's elements and then arranging or concatenatiing them in a new array
const all_new_heros = [...marvel_heros , ...dc_heros]
console.log(all_new_heros);

//flat fnk kya krta h array ke adnar array ke andar array ke andar array bhi hai to vo sabko concatenate krke ek hi array me dedeta hai , bas ke range dedo flat ke bracket me , aur jada confusion ho range dene me to sidha infinity likhdo range me to vo puri array ke elements ko ek array me dedega
const new_arr = [1,2,3,[4,5,6,7],3,4,5,[9,10,[7,9,11],5]]
const real_new_arr = new_arr.flat(Infinity) //infinity is range
console.log(real_new_arr);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name : "hitesh"})); //interesting can be asked in interviews

let val1 = 1900
let val2 = 2000
let val3 = 2100

console.log(Array.of(val1, val2 ,val3));