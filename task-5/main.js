let arr4 = [3, 5, -7, 7, 5, -9, -4]  //5 3 7 -7 -9 5 -4

let res4 = []

// for(let i = 0; i<arr4.length; i++){

//     if (i==0) {
//         res4.push(arr4[i+1])
//         res4.push(arr4[i])
//     }else if (i%2==0 && arr4[i+1]!=undefined) {
//         res4.push(arr4[i+1])
//         res4.push(arr4[i])
//     } else if (i%2==0 && arr[i+1]==undefined){
//         res4.push(arr4[i])
//     }

// }
// console.log(res4)


for(let i = 1; i<arr4.length;i=i+2 ){
    console.log('-------',i);
        res4.push(arr4[i])
        res4.push(arr4[i-1])
    
       if(i+1==arr4.length-1) {
        res4.push(arr4[arr4.length -1])
       }
    
    }
    console.log(res4)
