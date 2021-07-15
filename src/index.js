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

const calculator = {
  add: (a, b) => {
    return a + b
  },
  substract: (a, b) => {
    return a - b
  },
  divide: (a, b) => {
    return a / b
  },
  multiply: (a, b) => {
    return a * b
  }
}

function caesarCipher(str, shiftBy) {
  function isLetter(inp) {
    let regex = /[a-zA-Z]/;
    return regex.test(inp);
  }

  function shiftLetter(char, shiftBy) {
      let charCode = char.charCodeAt(0);
      let isLowercase = charCode >= 97;
      let firstLetterCode = isLowercase ? 97 : 65;
      let newCharCode = (charCode - firstLetterCode + shiftBy) % 26;

      return String.fromCharCode(newCharCode + firstLetterCode);
  }
  
  let splitStr = str.split("");
    let shifted = splitStr
        .map((char) => {
            if (isLetter(char)) {
                return shiftLetter(char, shiftBy);
            } else return char;
        })
        .join("");
  return shifted;
} 

function analyze(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    };
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {
    average: sum/arr.length,
    length: arr.length,
    min: min,
    max: max
  };
}

export {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyze
};