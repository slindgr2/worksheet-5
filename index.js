"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.
/*global console*/ // This line tells jsLint that you're allowed to use console.log for printing.

 function SumOfNumbers(list) {
  var result;
  result = 0;
  for (var index = 0; index < list.length; index = index + 1) {
    result = result + list[index];
  }
  return result;
}
SumOfNumbers([1,2,3,4]);

7

// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}   
//[1,2,3,4,5].equals([1,2,3,4,5])
//[2,3,4,5,6].equals([1,2,3,4,5])

function large_straight(list) {
  var result;
  if (list.equals([1,2,3,4,5])) {
    (result = 40);
  } else if (list.equals([2,3,4,5,6])) {
    (result = 40);
  } else {
    (result = 0);
  }
  return result;
}
large_straight([3,2,3,4,5]);

//http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
// used for comparing list.


