function integer(n) {
  return new Promise((resolve, reject) => {
    if(n !== 0 && n % 3 === 0 && n % 5 !== 0) {
      resolve('Fizz')
    } else if (n !== 0 && n % 5 === 0 && n % 3 !== 0) {
      resolve('Buzz')
    } else if (n!== 0 && n % 3 === 0 && n % 5 === 0) {
      resolve('FizzBuzz')
    } else {
      reject(n)
    }
  });
}
integer(15).then((data) => console.log(data), (err) => console.log(err))