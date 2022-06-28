let arr6 = [6, -3, 5, -5, -4, 7, -5]  //-5 -3 5 6 -4 7 -5

let min6 = arr6[0]
let tmp 
for (let i = 0; i<arr6.length; i++) {

  if(arr6[i]<min6) {
    min6 = arr6[i]
  }

}
let index6 = arr6.indexOf(min6)

console.log(index6)

tmp =arr6[0]
arr6[0] = arr6[index6]
arr6[index6]=tmp

console.log(arr6)
