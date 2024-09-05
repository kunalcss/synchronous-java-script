// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(["initialexpression/decleration"]; ["condition"]; ["changer"]){
//     //body
// }
// 1 it will go in the initail declearation part.
//2 it will go in the condition part.
//3 it will go in body.
//last it will go iin the changer part
let userscore= 10
let minvalue = 0
for(userscore; userscore >= minvalue; userscore = userscore - 1 ){
    // if (userscore == 5) {
    //     break;// (stop the process.)
    // }
    if (userscore == 5) {
     continue;//(continue keyword skips a one one element that you have to skip)
    }
    console.log(`userscore is ${userscore}`);
}

let number = 2 
for (number; number >0; number = number + 2) {
    if (number == 50) {
        break;
    }
    console.log(` even number is ${number}`);
}


for (let i = 1; i <11; i++) {
    console.log(i);
    
    
}
let totL_rows = 5;
for (let i = 1; i <= totL_rows; i++) {
    for (let j = 1; j <=i; j++) {
        process.stdout.write("*")
    }
    console.log();
        
}
