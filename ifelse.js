//Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

// for(var i=0 ; i<5 ; i++){
//     var c = Math.floor(Math.random()*999)+1;
//     console.log("the random values are : " +c);
// }
// console.log("the random values are : " +c);

// var arr[i] = Math.floor(Math.random()*999)+100 ;
// console.log(arr[i]);
var arr = [121,234,122,111,456];
var max = arr[0];
for(var i=0; i<arr.length; i++){
    if(arr[i]>=max){
        max=arr[i];
        // console.log('setting max to : ' + max);
    }
}
console.log('the maximum value is : '+max);

var min = arr[0];
for(var j=0; j<arr.length; j++){
    if(arr[j]<=min){
        min=arr[j];
        // console.log('setting max to : ' + min);
    }
}
console.log('the minimum value is : '+min);


//Write a program that takes day and month from the command line and prints true if
// day of month is between March 20 and June 20, false otherwise.




// Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.

let year=2000;
if((year%100==0 && year%400==0) || (year%100!=0 && year%4==0)){
    console.log(year + ' : its a leap year');
}
else{
    console.log(year + ' :not a leap year');
}




// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

var head,tail;
var random = Math.floor(Math.random()*10)+1;
if(random<5){
    console.log('head');
}
else {
    console.log('tail');
}