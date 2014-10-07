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

