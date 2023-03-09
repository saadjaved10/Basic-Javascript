let arr1 = [1,5,10,7];
let arr2 = [1,10,9,11];


function joinedArray(arr1,arr2){
    let arr3 = [];
    for (i = 0; i< arr1.length; i++){
        for (j = 0; j< arr2.length; j++){
            if (arr1[i] === arr2[j]){
             arr3.push(arr1[i]);
           
        }
    }
}
    return arr3;
}
console.log(joinedArray(arr1,arr2));