//creating an array by entering the size and elements from user and checking and printing even number in an array
const readline = require("readline")
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
r1.question("enter size of array", (input) => {
    let n = Number(input)
        r1.question("Enter the elements of array", (input) => {
            let arr = input.split(" ").map(Number)
            if(arr.length > n)
                console.log("size mismatch")
            else{
            for(let i of arr)
                if(i%2==0)
                console.log(i)}
            r1.close()
        })
})
