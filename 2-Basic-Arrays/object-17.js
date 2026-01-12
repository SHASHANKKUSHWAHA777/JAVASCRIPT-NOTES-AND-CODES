//two wyas of declaring an object
//const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "123abc"
name = "shashank",
ff = "sfs"
console.log(name);

//another way of object decl and accesing elems of obj while printing
const tangouser = {
    name : "niggerthon",
    fame : true
}
console.log(tangouser.name);

//obj ke andar obj ke andar obj etc etc
const hubuser = {
    email: "hoshiyar@nig.in",
    uid: "locanukikenda",
    status: {
        isallok: "all ok",
        isit: {
            trustat: "yeah"
        }
    }
}
//ab humlog obj ke andar ke obj ko access krna sikhenge (obj ke andar ke obj ke andar ke obj kitne bhi ho dot lagake access ho jaaenge)
console.log(hubuser);
console.log(hubuser.status);
console.log(hubuser.status.isit);
console.log(hubuser.status.isit.trustat);

//ab humlog obj pe array jaise operations krna sikhenge 
//jaise array concatenation waise object concatenation
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1,obj2} // ye obj ke andar obj show krega dono ko ek hi obj me nhi laega
//console.log(obj3);

//const obj3 = Object.assign({}, obj1, obj2, obj4) //would work perfectly fine 
//console.log(obj3);

//isme humlog spreading ka use bhi kr skte h jaise array me kra tha
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

//ab hum objects ko array ke andar dalenge aur fir usme hum loop bhi laga sakte h aur une alag alag tarike se access bhi karsakte h
const users = [
    {
        id: 1,
        email: "sdasd@mail"
    },
    {
        id: 1,
        email: "sdasd@mail"
    },
    {
        id: 1,
        email: "sdasd@mail"
    },
]
//is array me 3 objects daaldiye hai ab une access krenge
console.log(users[1]);
console.log(users[1].email);

//EK ENTRY ME KEYS AND VALUES DONO AAJATI HAIN
//KEYS AND VALUES KO SAMAJHLO 
//ARRAY KE ANDAR JO OBJECT HAI USME "ID" EK KEY HAI AUR 1 USKI VALUES , EMAIL EK KEY HAI AUR USKE ANDAR KI MAIL USKI VALUE
//AB HUM KEYS AND VALUES AND BOTH ACCESS KRENGE tinderuser wale object ki
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

//hasownproperty to check if that object has that id or not , there are many more things like hasownproperty
console.log(tinderuser.hasOwnProperty('id')); //will print true as 
console.log(tinderuser.hasOwnProperty('email'));