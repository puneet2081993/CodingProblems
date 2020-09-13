var d1Eggs = [79,82,42,44,43,55,62,87,85,88,89,81];
var d2Eggs = [81,77,45,41,39,48,71,78,81,84,82,72];
var d3Eggs = [77,53,33,32,49,53,68,71];
var max = 0;
var min = 0


var day1avg = (d1Eggs.reduce(function(a, b){
  return a + b;
}, 0)/d1Eggs.length);

var day2avg = (d2Eggs.reduce(function(a, b){
  return a + b;
}, 0)/d2Eggs.length);

var day3avg = (d3Eggs.reduce(function(a, b){
  return a + b;
}, 0)/d3Eggs.length);


if(day1avg > day2avg && day1avg > day2avg){
    max = day1avg;
    min = day2avg;
}else{
    max = day2avg;
    min = day1avg;
}

let median = (max+min)/2;
let avgEgg = 0;

if(median > day3avg && median > max){
   avgEgg = med; 
}else if(max > median && max < day3avg){
  avgEgg = max; 
}else{
  avgEgg = day3avg;
}

console.log(avgEgg*12+" eggs requred to reduce wastage."); //total eggs required for 12 hours 10AM to 10PM




