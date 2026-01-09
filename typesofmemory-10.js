/*Types of memories 
1. stack memory (for primitive datatypes) , we get copy in stack memory
2. heap memory (for non primitive datatypes) , we get reference in heap memory
https://youtu.be/7gwc-1czolw?si=DAQONddMB7B4lJ9C
*/
let username = "shahid"

let newusername = username
newusername = "yooooo"

console.log(username); //will print shahid
console.log(newusername); //will print yooooo and will not hinder the value of username as newusername ko username ki val ki copy mili hai aur usme changes hue the jo ki shahid se yooooo ka change hua tha to username ki val vahi rhegi but newusername me username ki copy thi jisme change hua tha to vo username ki value ko hinder ya disturb ya change nahi krega

//---
//heap
let userone = {
    name: "adibhai",
    pass: "terim"
}
console.log(userone);

let usertwo = userone
usertwo.name = "eskay"
console.log(usertwo);



