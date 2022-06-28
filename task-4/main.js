let arr3 = [14, 16, 3,4, 7, 17, 19, 9,20,22,2,1,2] //16 7 17 19
let index3 = []
let max3= 0
let count3 = 1

for(let i = 0; i<arr3.length; i++) {

    if (arr3[i]<arr3[i+1]) {
        index3.push(arr3[i+1])
           }
 
}


console.log(index3)
