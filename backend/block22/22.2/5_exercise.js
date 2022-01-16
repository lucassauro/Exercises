const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createFiles() {
  await Promise.all([
    fs.writeFile('file1.txt', array[0]),
    fs.writeFile('file2.txt', array[1]),
    fs.writeFile('file3.txt', array[2]),
    fs.writeFile('file4.txt', array[3]),
    fs.writeFile('file5.txt', array[4])
  ]);

  await Promise.all([
    fs.readFile('file1.txt', 'utf-8'),
    fs.readFile('file2.txt', 'utf-8'),
    fs.readFile('file3.txt', 'utf-8'),
    fs.readFile('file4.txt', 'utf-8'),
    fs.readFile('file5.txt', 'utf-8')
  ]).then((values) => values.join(' '))
  .then((data) => fs.writeFile('fileAll.txt', data))
}
createFiles();