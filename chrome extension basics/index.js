// // 1. Grab the box from the DOM and store it in a variable
// // 2. Add a click event listener to the box 
// // 3. Log out "I want to open the box!" when it's clicked

// let box = document.getElementById("box")
// box.addEventListener("click", function () {
//     console.log("I want to open the box!");
// })

// //inner HTML

// const container = document.getElementById("container")
// container.innerHTML = "<button onclick ='buy()'>Buy!</button>"

// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

// // template strings/literals

// const recipient = "James"
// const sender = "DJ"

// // Refactor the email string to use template strings
// const email = `Hey ${recipient}! How is it going? Cheers ${sender}`

// console.log(email)
let count=0;
function gernerateSentence(desc,arr){
    for(let i=0; i<arr.length; i++){
        count++;
    }
    let sentence = `The ${count} ${desc},${arr[0]},${srr[1]}`
}

console.log();