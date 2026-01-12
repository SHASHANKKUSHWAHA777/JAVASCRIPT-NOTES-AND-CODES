const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//format ye hota h ki const{jo extract krna ho : usko shortname bhi de skte ho (optional)} = jis obj se extract krna ho
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//AB HUMLOG API DEKHENGE JISME JSON HOTA H JO KI @ FORMATS ME HO SAKTA HAI YA FIR OBJECT{} YA FIR ARRAY[]
//JSON obj ka koi name nhi hota bas sidha bracket lagadete h , same goes in json array
//json obj
{
     "name": "hitesh",
     "coursename": "js in hindi",
     "price": "free"
 }
//json array
[
    {},
    {},
    {}
]