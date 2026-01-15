const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //basically here this keyword talks about current context means jo bhi value abhi object ke var me hai this keyword uni ko refer krra h .....
        console.log(this);
    }

}

user.welcomeMessage()
// user.username = "sam" //......baad me agar koi object access krke username change krde to baat alag h
// user.welcomeMessage()

// console.log(this); //sirf do curly empty brackets print honge



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


