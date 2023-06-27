// const arr= [2,3,4,5]
// function sum(target){
//     for(let i=0; i<arr.length; i++){
//             for(let j=i+1; j<arr.length; j++){
//                 if(arr[i] + arr[j]===target)
//                     return [arr.indexOf(arr[i]),arr.indexOf(arr[j])]
//             }
//     }
// }

// console.log(sum(7));

let count=0;
let fruits ="";
let sentence;
function gernerateSentence(desc,arr){
    sentence = `The ${arr.length} ${desc} are `
    for(let i=0; i<arr.length; i++){
        if(i===arr.length-1){
            sentence+=arr[i]+"."
        }else{
            sentence+=arr[i]+", "
        }    
    }
    return sentence;
}

console.log(gernerateSentence("best fruits",["apple","banana"]));