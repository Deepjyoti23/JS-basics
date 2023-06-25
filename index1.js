const arr= [2,3,4,5]
function sum(target){
    for(let i=0; i<arr.length; i++){
            for(let j=i+1; j<arr.length; j++){
                if(arr[i] + arr[j]===target)
                    return [arr.indexOf(arr[i]),arr.indexOf(arr[j])]
            }
    }
}

console.log(sum(7));