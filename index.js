function generateFibonacci() {
  const length = parseInt(document.getElementById("length").value);

  let fibSequence = [];
  let a = 0,
    b = 1;

  // generate Fibonacci sequence up to specified length
  for (let i = 0; i < length; i++) {
    fibSequence.push(a);
    const temp = a + b;
    a = b;
    b = temp;
  }

  // display the generated Fibonacci sequence in the output element
  document.getElementById("fib-sequence").textContent = fibSequence.join(", ");
}
