 function getthat(...num1) // this ... before num1 is called rest/spread , but here in this use case it will be called rest operator .
    {
        return num1
    }
    console.log(getthat(200,500,600,1000));
    
    function getthat2(val1,val2,...num1) // this ... before num1 is called rest/spread , but here in this use case it will be called rest operator .
    {
        return num1
    }
    console.log(getthat2(200,500,600,1000));//ab val1 aur val2 hai to shuru ki do vals 200,500 usme jaengi aur baaki array me
    
    //ab hum sikhenge how to pass an object in a  function
    //ab hum phle ek object banaenge
    const user =
    {
        username: "sam",
        price: 199
    }
    //fir us obj ko function me pass krdenge
function handleobj(user){
    console.log(`username is ${user.username} amd price is ${user.price}`);
}
//NOW WE'LL CALL THE FUNCTION
//handleobj(user) //function calling 1st way
handleobj ({
    username: "poison",
    price: 299
}) //funtion calling 2nd way

const mynewarr = [200,500,600,700]
function returnsecondarray(getarray){
    return getarray[1]
}
//console.log(returnsecondarray(mynewarr));
console.log(returnsecondarray([200,500,600,700]));

//confusion h ki getarray ki jagah agar wahi my newaarr likhdiya to kya hoga , vahi same print hoga abhi to but ill clear out
const mynewarr2 = [200,500,600,700]
function returnsecondarray(mynewarr2){
    return mynewarr2[1]
}
console.log(returnsecondarray(mynewarr2));