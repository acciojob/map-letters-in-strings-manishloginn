//your JS code here. If required.
 
const mapLetters = (str) => {
  // Write your code here
 
  const obj = {};
 
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    obj[char] = obj[char] || [];
    obj[char].push(i);
  }
 
  return obj;
};
 
// Do not change the below code
 
const input = prompt("Enter the string");
console.log(mapLetters(input.trim()));