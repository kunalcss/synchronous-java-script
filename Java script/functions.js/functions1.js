// function calculatesquare(num){
//     let sqaurevalue = num * num ;

//     return sqaurevalue;
// }

// let square = calculatesquare(8);
// console.log(square);

// function addnumbers(num1 ,  num2 , num3){
// let addnumbers = num1 + num2 + num3;
// return addnumbers ;
// }

//  let add = addnumbers(8,9,11)
// console.log(add);

function addnumbers(){
    let result = 0 ;
    for (let i = 0; i < arguments.length;  i++) {
        result+= arguments[i]
    }
    return result ;

}

console.log(addnumbers(8,9,7,6,7));
console.log(addnumbers(8,9,7,6,54,4));
console.log(addnumbers(8,9,7));
console.log(addnumbers(8));

function loginmessage(username){
    if (username === "") {
        console.log ("please enter your username")

    }else{
        console.log(`${username} just logged in`);
        return ;
    }
}
console.log(loginmessage("kunal"))