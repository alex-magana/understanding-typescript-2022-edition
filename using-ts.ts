const button = document.querySelector("button");
// The exclamation (!) instructs typescript that the element
// will never yield null.
// HTMLInputElement employs the use use a syntax called type casting
// to instruct typescript what form the derived value will take.
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// <control>.value return a STRING.
// For this reason adding input1.value
// and input2.value results in a concatenated string instead
// of the desired artithmetic addition operation
function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
