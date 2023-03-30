## 백준 알고리즘 node.js 문제 풀이 템플릿

백준 알고리즘의 입력 받는 소스를 자동생성 및 실행하는 스크립트를 추가한 패키지입니다.

### 사용법
```
백준 문제는 모두 번호로 구분 가능하기에 번호를 추천드립니다.

yarn make 1000 
```

```
작성한 문제 실행

yarn start 1000 
```

### !!문제 제출시
```
  백준 사이트에서 과제 제출시 템플릿 소스 중 일부 수정해야 한다.
  아래 텦플릿에서 fs.readFileSync(example) -> fs.readFileSync(product)

  const product = '/dev/stdin';
  const example = './1000/stdin.txt'; 
  const fs = require('fs');
  let [input] = fs.readFileSync(example).toString().trim().split('\n');
  .
  .
  .
```