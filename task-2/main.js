let arr1 = [3, 5, -7, 7, 5, -9, -4]; //3 5 -7 7 5 -9 -4

    let index1 = 0

    let max1= 0
    let count = 1
    
    for(let i = 0; i<arr1.length; i++) {
    
        if ( arr1[i]> max1) {
            max1 = arr1[i]
            count++
        }
     index1 = arr1.indexOf(max1) +1

    }
    
    
    console.log(max1)
    console.log(index1); // 34
    
