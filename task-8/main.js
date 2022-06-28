let arr = [6, -3,  7, -4, 7, 4, 7, -5, 7]

max = 0;
let index = [];
let last = arr[arr.length-1]
for (let i= 0; i < arr.length; i++) {
  
    if (arr[i]>max) {
       max=arr[i];
    }
}
for (let i= 0; i < arr.length; i++) {  
    if (max===arr[i]) {
    index.push(i);
   } 
}

let a = arr.length-1
let b = index.pop()
arr.splice(a, 1, max)
arr.splice (b, 1, last )

console.log(arr);
