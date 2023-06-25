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

const arr= [2,3,4,5]
function sum(target){
    for(let i=0; i<arr.length; i++){
        let sum1=arr[i]
        if(sum1 + arr[i]===7)
            return arr.indexOf(sum)
    }
}

console.log(sum(7));