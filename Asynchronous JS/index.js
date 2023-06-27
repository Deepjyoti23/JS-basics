//synchronuous
// console.log("I");
// console.log(" eat ");
// console.log(" ice cream ");
// console.log(" with ");
// console.log(" a spoon");

//Asynchronuous
// console.log("I");
// console.log(" eat ");
// setTimeout(()=>{
//     console.log(" ice cream ");
// },3000)

// console.log(" a spoon");
// console.log(" with ");

//Call-back function

function one(call_two){
    call_two()
    console.log("Step 1");
}
function two (){
    console.log("Step 2");
}

one(two)