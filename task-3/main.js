const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Number type-a çevirmək üçün parseInt() metodundan istifadə edirik.
    Vergüllə daxil edilmiş sətri iki fərqli ədədə bölmək üçün split metodundan istifadə edirik.
    */
    var input = result.input; // "5,2 4 7 12 9"
    var input_data = input.split(','); // ['5', '2 4 7 12 9']
    var n = parseInt(input_data[0]); // Massivin element sayı. Nümunə - 5
    var arr2 = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
    //let arr = [3, 5, -7, 7, 5, -9, -4];

    let arr2 = [14, 16, 3, 7, 17, 19, 9]
    let index2 = []
    let max2= 0
    let count2 = 1
    
    for(let i = 0; i<arr2.length; i++) {
    
        if (i%2 == 0) {
            index2.push(arr2[i])
        }
     
    }
    
    
    console.log(index2); // 34
});
