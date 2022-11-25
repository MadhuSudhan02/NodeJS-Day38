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
