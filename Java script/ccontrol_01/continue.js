let arr = [1,23,5,4,6,64,4]

for (let i = 0; i < arr.length; i++) {
    if (arr[i]%4 == 0) {
        continue;
    }
    console.log(arr[i]**2);
    
}