// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorOccur = document.getElementById("error")
function errorHandling(){
    errorOccur.textContent = "Something went wrong, please try again";
}