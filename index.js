let lapsCompleted = 0;

function lapIncrement() {
    lapsCompleted++;
}

lapIncrement();
lapIncrement();
lapIncrement();

console.log(lapsCompleted);

// let name = "DJ";
// //name=42
// let greeting ="Hi,my name  is ";
// let myGreeting = greeting + name;
// console.log(myGreeting);

// let points ='4';
// let bonusPoints = "10";
// console.log(points+bonusPoints);

let welcomeEl = document.getElementById("welcome-el");
let name = "DJ";
let greeting ="Hi,my name is ";
welcomeEl.innerText = greeting + " "+name;

