const { mkdirSync, open, writeFileSync } = require('fs');

const makeDirName = process.argv[2];

mkdirSync(makeDirName, err => {
  if(err && err.code === 'EEXIST') {
    console.error(`ERROR: already exist ${makeDirName}`);
    return;
  }
});

open(`${makeDirName}/stdin.txt`, 'w', (err) => {
  if(err) {
    console.error(`ERROR: ${err}`);
  }
});

open(`${makeDirName}/${makeDirName}.js`, 'w', (err) => {
  if(err) {
    console.error(`ERROR: ${err}`);
    return;
  }
});


const TEMPLATE = `
  const product = '/dev/stdin';
  const example = './${makeDirName}/stdin.txt'; 
  const fs = require('fs');
  let [input] = fs.readFileSync(example).toString().trim().split('\\n');
  
  solution(input);
  
  function solution(input) {
    let answer = null;

    console.log(answer);
  }
`;
writeFileSync(`${makeDirName}/${makeDirName}.js`, TEMPLATE, 'utf8', err => {
  if(err) {
    console.error(`ERROR: ${err}`);
    return;
  }
});