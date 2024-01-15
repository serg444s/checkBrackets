/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/

// function checkBrackets(str) {
//   const stack = [];
//   const obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   for (let i = 0; i < str.length; i++) {
//     const bracket = str[i];
//     if (bracket === "(" || bracket === "{" || bracket === "[") {
//       stack.push(bracket);
//     }
//     if (bracket === "}" || bracket === ")" || bracket === "]") {
//       const lastEl = stack.pop();
//       if (bracket !== obj[lastEl]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length) return false;
//   return true;
// }

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

function checkBrackets(str) {
  const arr = str.split("");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "{" ||
      arr[i] === "(" ||
      arr[i] === "[" ||
      arr[i] === "}" ||
      arr[i] === ")" ||
      arr[i] === "]"
    ) {
      newArr.push(arr[i]);
      for (let e = 0; e < newArr.length; e++) {
        if (newArr[e] === "(" && newArr[e + 1] === ")") {
          newArr.splice(e, 2);
        }

        if (newArr[e] === "[" && newArr[e + 1] === "]") {
          newArr.splice(e, 2);
        }

        if (newArr[e] === "{" && newArr[e + 1] === "}") {
          newArr.splice(e, 2);
        }
      }
    }
  }
  return newArr.length === 0;
}

console.log(checkBrackets(someFn));
