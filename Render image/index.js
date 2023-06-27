// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]
const container = document.getElementById("container")
let images="";
function render(){
    for(let i=0; i<imgs.length; i++){
        images += `<img src='${imgs[i]}' class="team-img">` 
    }
    container.innerHTML=images;
}
render();