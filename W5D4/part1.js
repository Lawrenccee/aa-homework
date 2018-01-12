// TODO var can be reset anywhere and keep it value from inner scope
// function mysteryScoping1() {
//   var x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// TODO Const can be reset anywhere and keeps its value from the scope
// it was defined in
// function mysteryScoping2() {
//   const x = 'out of block';
//   if (true) {
//     const x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// TODO ERROR, cant reset const with var
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// TODO let can be reset anywhere and keeps its value from the scope
// but cannot be set again using let in the same scope
// function mysteryScoping4() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
//
// TODO ERROR, let is per scope
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }


function madLib(verb, adjective, noun) {
  console.log(`We shall ${verb.toUpperCase()} ` +
    `the ${adjective.toUpperCase()} ${noun.toUpperCase()}`);
}

madLib('uppercase', 'following', 'words');

function isSubstring(searchString, subString) {
  return searchString.indexOf(subString) !== -1;
}

console.log(isSubstring("time to program", "time"));
console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz(array) {
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    if (element % 3 === 0 && element % 5 === 0) {
      continue;
    }

    if (element % 3 === 0 || element % 5 === 0) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(fizzBuzz([3, 5, 15, 10]));

function isPrime(num) {
  if (num < 2)
    return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(15485863));
console.log(isPrime(3548563));

function sumOfNPrimes(n) {
  let i = 2;
  let sum = 0;

  while (n > 0) {
    if (isPrime(i)) {
      sum += i;
      n -= 1;
    }

    i++;
  }

  return sum;
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(4));
