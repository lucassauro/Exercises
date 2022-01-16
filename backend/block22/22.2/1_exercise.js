exports.promise1 = (a, b, c) => {
  const args = [a,b,c];
  console.log(args);
  const promise = new Promise((resolve, reject) => {
    if (args.some((elem) => {
      if(typeof(elem) !== 'number') reject(new Error('Informe apenas números'))
    }));
    const result = (a + b) * c;
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  })
  return promise;
}
