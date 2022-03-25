const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

// <control>.value return a STRING.
// For this reason adding input1.value
// and input2.value results in a concatenated string instead
// of the desired artithmetic addiotn operation
// function add(num1, num2) {
//   return num1 + num2;
// }

// The above described scenario canbe resolved by the fix
// below, where we type check the arguments and handle them
// accordingly.
// This is where typescript comes in handy
function add(num1, num2) {
  if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
