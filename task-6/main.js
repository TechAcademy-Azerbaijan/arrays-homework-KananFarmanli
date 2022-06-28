let arr5 = [6, 2, 7, 1, 7, 1,4,5,4,2, 2]; //10
let copy5 = [...arr5];

let max5 = 0;
let min5 = arr5[0];
let res5 = 0;
for (let j = 0; j < arr5.length; j++) {
  //res5 = 0;
  for (let i = 0; i < copy5.length; i++) {
    if (copy5[i] > max5) {
      max5 = copy5[i];
    }

    if (copy5[i] < min5) {
      min5 = copy5[i];
    }
  }
  //console.log("max /min", max5, min5);
  let index1 = arr5.indexOf(max5);
  let index2 = arr5.indexOf(min5);
  // console.log('massiv',arr)
  // console.log('index1',index1)
  // console.log('index2',index2)

  if (arr5.includes(max5)) {
    arr5.splice(index1, 1);
  }

  if (arr5.includes(min5)) {
    arr5.splice(index2, 1);
  }

  res5 = 0;
  //console.log(arr5, "arr5555");
  
  
  for (let i = 0; i < arr5.length; i++) {
   // console.log('resss',res5);
    res5 = res5 + arr5[i];
  }
}
console.log("arr", arr5);
console.log(res5);
