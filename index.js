// Function expression
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  
  // Arrow function with a single parameter (without parentheses)
  const square = x => x ** 2;
  
  // Arrow function with multiple parameters
  const add = (a, b) => a + b;
  
  // Arrow function with multiple lines of code (requires curly braces and return)
  const multiplyAndLog = (a, b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b;
  };
  
  // Using .map() with an arrow function
  const nums = [1, 2, 3];
  const squares = nums.map(num => num ** 2);
  
  // Example output for validation
  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(square(4)); // 16
  console.log(add(5, 3)); // 8
  console.log(multiplyAndLog(2, 4)); // Logs: "Multiplying 2 and 4", returns 8
  console.log(squares); // [1, 4, 9]

  // Function expression called divide
const divide = function() {
    return 2000 / 100;
  };
  
  // Example usage for testing
  console.log(divide()); // Should log 20
  
