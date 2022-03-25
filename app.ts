// Typescript's type system only helps you during
// development (i.e before the code gets compiled).
// The type system enables explicit declaration
// of data types to ensure correctness of 
// the input passed to the program is enforced.
// This facilitates having an additional step of sanity checks
// before the code is deployed.
function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;

// Invoking `tsc app.ts` results in an error
// `Argument of type 'string' is not assignable to parameter of type 'number'`
// because the value set for number1 is a string
// The result of '5' + 2.8 would be 52.8
// because the operands are treated as a string and concatenated.

const result = add(number1, number2)
console.log(result);