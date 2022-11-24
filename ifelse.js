//Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

// for(var i=0 ; i<5 ; i++){
//     var c = Math.floor(Math.random()*999)+1;
//     console.log("the random values are : " +c);
// }
// console.log("the random values are : " +c);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
