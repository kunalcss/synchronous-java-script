let score = 130;
let life = 4
console.log(`welcome to the game`);

if (score>99) {
    console.log(`You get a life`);
    score = score - 100;
    life = life + 1;//(life++)
    
} else {
    console.log(`You  don't get a life`);
    
}
console.log(`Your score is ${score} and your life is ${life}`);

// building a rating system 

// //Global variable can not access inner variable but the inner variable can access the global variable

// let email = "kunal.com";
//  if (email== "kunal.com") {
//     console.log(`what is your password`);
//  } else {
//     console.log(`Enter your email`);
//  }
 //another method

//  if (email= " ") {
//     console.log(`what is your password`);
//  } else {
//     console.log(`Enter your email`);
//  }

// another method by converting into boolean

// console.log(Boolean(email))

// if (email) {
//         console.log(`what is your password`);
//      } else {
//         console.log(`Enter your email`);
//      }

     //falsy values
     //0
     //Nan
     //undefined
     //""
     //null
     //false

     //if user provides email and password then allow login else ask for it

/*
     const email ="kunal"
const password = ""
if (email) {
    if (password) {
        console.log(`welcome to our app`);
    }else{
        console.log(`please enter your password`);
    }
}else{
    console.log(`please enter your email and password`);
}
*/
//another method
// if (email && password ) {
//     console.log(`welcome to our app`);
// } else {
//     console.log(`please enter your email and password`);
// }


// allow user to sign in with google or github

const google = ""
const github = ""

if (google || github) {
    console.log(`welcome to our app`);
} else {
    console.log(`please sign in with google or github account`);
}

//Ternary operator
let age = 20;

const getdrivinglicense = age>=18 ? "true part": "false";

console.log(getdrivinglicense);
