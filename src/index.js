function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  const arr = str.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  return newArr.join('');
}

function calculator(a, b, operator) {

}

export {
  sum,
  capitalize,
  reverseString,
  calculator,
};