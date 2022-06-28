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
    var arr = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
    //let arr = [3, 5, -7, 7, 5, -9, -4];

let index1 = 0

let max1= 0
let count = 1

for(let i = 0; i<arr1.length; i++) {

    if ( arr1[i]> max1) {
        max1 = arr1[i]
        count++
    }
 index1 = arr1.indexOf(max1) +1
console.log(index1)
}


console.log(max1)
console.log(index1); // 34
});
