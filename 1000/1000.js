
  const product = '/dev/stdin';
  const example = './1000/stdin.txt'; 
  const fs = require('fs');
  let [input] = fs.readFileSync(example).toString().trim().split('\n');
  
  solution(input);
  
  function solution(input) {
    let answer = null;
    const [ a, b ] = input.split(' ').map(str => parseInt(str));
    
    answer = a + b;
    console.log(answer);
  }
