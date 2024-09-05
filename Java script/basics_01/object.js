const myobj = {
    "name": "kunal",
    "surname": "sharma",
    "location": "meerut",
    "age": 20,
    somenames: ["kunal",
    "sharma",
    "yash",
    "ayush",
    "Amit",],
address: {
    "state": "utaar",
    "city": "meerut",
}    
}
// console.log(myobj.name);
// console.log(myobj [`name`]); //good method
// console.log(myobj.somenames[2]);
// console.log(myobj.address.state);
// console.log(myobj["address"]["state"]);

// console.log(Object.keys(myobj));
// console.log(Object.values(myobj));
console.log(Object.entries(myobj));
