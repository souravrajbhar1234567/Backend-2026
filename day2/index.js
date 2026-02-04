import fs from 'fs';

console.log(fs);


const writeFileSyncFn = (path, data) => {
  try {
    fs.writeFileSync(path, data, 'utf-8');
    console.log('File written successfully');
  } catch (err) {
    console.error(err);
  }
};

const readFileSyncFn = (path) => {
  try {
    return fs.readFileSync(path, 'utf-8');
  } catch (err) {
    console.error(err);
  }
};

writeFileSyncFn('./test.txt', 'Hello Node.js');
const content = readFileSyncFn('./test.txt');
console.log(content);
