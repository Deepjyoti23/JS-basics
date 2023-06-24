// let lapsCompleted = 0;

// function lapIncrement() {
//     lapsCompleted++;
// }

// lapIncrement();
// lapIncrement();
// lapIncrement();

// console.log(lapsCompleted);

// let name = "DJ";
// //name=42
// let greeting ="Hi,my name  is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// let points ='4';
// let bonusPoints = "10";
// console.log(points+bonusPoints);

// let welcomeEl = document.getElementById("welcome-el");
// let name = "DJ";
// let greeting ="Hi,my name is ";
// welcomeEl.innerText = greeting + " "+name;

// welcomeEl.innerText= welcomeEl.innerText + " ❤❤"

// let firstCard = Math.floor(Math.random() * 10)
// console.log(firstCard);
// let secondCard = Math.floor(Math.random() * 10)
// console.log(secondCard);
// let sum = firstCard + secondCard;
// console.log(sum);

// let age = 20;
// // if(age<21){
// //     console.log("You can not enter the club!");

// // }else{
// //     console.log("Welcome!");
// // }

// age < 21 ? console.log("You can not enter the club!") : console.log("Welcome!");

// for(let i=10; i<101; i+=10)
//     console.log(i 32);

// let player1Time = 102;
// let player2Time = 107;

// function getTotalRaceTime() {
//     return player1Time + player2Time;
// }

// let fastestRace = getTotalRaceTime();
// console.log(fastestRace);

// let ceiled =Math.ceil(4.45684)
// console.log(ceiled);

// let randomNumber = Math.floor(Math.random()*6)+1
// console.log(randomNumber);

// let player ={
//      name : "DJ",
//      chips : 145,
//      sayHello: function(){
//         console.log("H i isaan!");
//      }
// }
// player.sayHello();

// let person = {
//     name: "Deepjoti",
//     age: 24,
//     country: "India"
// };
// function logData() {
//     return person.name + " is " + person.age + " years old and lives in " + person.country;
// }

// console.log(logData());

// let age=15;
// if(age<6)
//     console.log("free");
// else if(age>=6 && age<=17)
//     console.log("child discount");
// else if(age>=18 && age <=26)
//     console.log("student discount");
// else if (age>=27 && age<=66)
//     console.log("full price");
// else
//     console.log("senior citizen discount");

// let largeCountries=["Tuvalu","India","USA","Indonesia","Monaco"];
// console.log(largeCountries);
// largeCountries.pop();
// largeCountries.push("Pakistan");
// console.log(largeCountries);
// largeCountries.shift();
// largeCountries.unshift("china")
// console.log(largeCountries);

let hands = ["rock","paper","scissor"];

function randomArray(){
    return hands[Math.floor(Math.random()*3)]
}
console.log(randomArray());