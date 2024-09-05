const arr = [1,2,3,4,5,6,7];

const oddelements = arr.filter((element) => {
    // logic you write here
    const xyz = element + 2; /// ..... 
    // return element % 2 != 0; // not returning is equal to saying return undefined
    return element%2 != 0;
})//  it will return aa new array.

console.log(oddelements); // new array

console.log(arr);


// const newArray = arr.map((element) => {
//     if(element % 2 != 0) return element;

// })

// console.log(newArray)