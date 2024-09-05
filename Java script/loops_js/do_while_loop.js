// let i = 0;
//  do {
//     console.log(`I is`,i);
//     i = i+1
    
//  } while (i<=5);

// let i = 6;// it will print atleast one value 
//  do {
//     console.log(`I is`,i);
//     i = i+1
    
//  } while (i<=5);

let x = 23456;

let sum = 0;
while(x > 0){
    let lastdigit = x %10;
    sum+= lastdigit;
    x= Math.floor(x/10);
}
console.log(sum);
