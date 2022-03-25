const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

// <control>.value return a STRING.
// For this reason adding input1.value
// and input2.value results in a concatenated string instead
// of the desired artithmetic addiotn operation
function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(input1.value, input2.value));
});
