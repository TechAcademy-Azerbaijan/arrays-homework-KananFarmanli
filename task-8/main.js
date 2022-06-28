let arr7 = [6, -3, 7, -4, 7, 4, -5] // 6 -3 7 -4 -5 4 7
let max7 = 0
let index7
let tmp7

for (let i = 0 ; i<arr7.length; i++) {
  console.log(max7)
  if (arr7[i]>max7) {
    max7 = arr7[i]
  } else if ( arr7[i]===max7) {
    max7 =arr7[i]
  }

   index7 = arr7.lastIndexOf(max7)

   tmp7= arr7[arr7.length-1]
   arr7[arr7.length-1] =arr7[index7] 
   arr7[index7] = tmp7

   
console.log('v lupe index',index7)
}
console.log('ne v lupe index',index7)
console.log(arr7)
