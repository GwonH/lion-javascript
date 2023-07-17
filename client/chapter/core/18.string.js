/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log(stringTotalLength);
// iterator 내장해서 순환 가능
// for(let key of message){
//   console.log(key);
// }


// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log(extractCharacter);



// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(1,3);
console.log(slice); //es.    숫자 하나만 적으면 거기서부터 끝까지.
// 끝에 하나 지우려면 뒤에꺼 -1.


let subString = message.substring(1,3);
console.log(subString);

// let subStr = message.subStr(1,3);
// console.log(subStr); //요즘 많이 안 씀. 1부터 3개. 에러나넴


// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
console.log(indexOf); //-1. -1은 없다는 거~! 

let indexOff = message.indexOf('i');
console.log(indexOff); //5. 다섯번째에 있어. 조건처리할때 써먹기.




let lastIndexOf = message.lastIndexOf('m');
console.log(lastIndexOf); //뒤에서부터 찾아줌. 마지막m을 찾는 거. 여러개있을때.


let includes = message.includes('Less');
console.log(includes); //있니? 


let startsWith = message.startsWith('Less');
console.log(startsWith); //해당 문자를 시작점으로 갖고있어? Less로 시작해?


let endsWith = message.endsWith('more.');
console.log(endsWith);



// 공백 잘라내기
// let trimLeft = message.trimLeft(); //얘 이제 안 쓰고 밑에거
let trimLeft = message.trimStart(); //왼쪽 공백 제거

// let trimRight = message.trimRight();얘 이제 안 쓰고 밑에거
let trimRight = message.trimEnd();

let trim = message.trim(); //양쪽 다 제거


let str = '         avdd    '
let trimm = str.trim();
console.log(trimm);


// 모든 공백 제거
let strr = ' dwd d d w w asd   dda';
console.log(strr.replace(/\s*/g,''));
// 매번 이렇게 규식이 쓰는게 아니고 유틸함수 만들어서 쓰면 더 빠르게 할 수 있다. 


function normalText(string){
  return string.replace(/\s*/g,'')
}





// 텍스트 반복
let repeat =message.repeat(3);

console.log(repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log(toLowerCase);
let toUpperCase = message.toUpperCase();
console.log(toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log(toPascalCase(message));
console.log(toCamelCase(message));