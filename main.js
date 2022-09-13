// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbners 0 to 4:
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value. 

const arr = N => {
  const numbers =[];
  while (N) numbers.unshift(--N);
  return numbers
};