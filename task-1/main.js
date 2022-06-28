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
    let arr = input_data[1].split(' '); // Daxil edilmiş massiv. Nümunə - ['2', '4', '7', '12', '9']
    //let arr = [3, 5, -7, 7, 5, -9, -4];
    let count = 0
for (let i = 0; i < arr.length; i++) {
    console.log(i)
    for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
        console.log('nawe iiiiiiii',i)
        console.log('nawe jjjjjj',j)
      if (arr[i] === arr[j]) {
        console.log(arr)
        arr.splice(j,1)
        console.log(arr)
        count++      
        break;
        
      }
    }
  }



}
console.log(arr.length); // 34
});
