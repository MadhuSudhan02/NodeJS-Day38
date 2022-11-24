//generating the random value
let x = Math.floor(Math.random()*10);
console.log(x);

//using the random function to get 1 to 6 values of dice
let a = Math.floor(Math.random()*6)+1;
console.log(a);

//adding the value of two random value and printing it
let c = x + a;
console.log("Sum of random value : " +c)

//to read 2 digit random value and print sum and average
var result = 0;
for(var i=0 ; i<5 ; i++ ){
    let c = Math.floor(Math.random()*99)+1;
    console.log(c);
    result = result + c;
}
console.log("the sum of 5 random value is : " + result);
var avg = result/5 ;
console.log("the average is : " + avg);

