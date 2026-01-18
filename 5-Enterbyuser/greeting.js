const readline=require("readline")
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
r1.question("Enter your gender: ",(gender) =>{
r1.question("Enter your name: ",(name) =>{
    if(gender==="male")
        console.log("hello sir" + " " + name)
    else
        console.log("hello maam" + " " + name)
    r1.close()
    })
})
