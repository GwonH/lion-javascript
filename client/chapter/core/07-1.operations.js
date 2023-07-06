/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

const a = '10';
const b = '30';

// 단항 연산자
let unary = +a;
// console.log(unary); 문자를 숫자로 형변환~ 10 출력.

// 이항 연산자
let binary = a + b;

// 삼항 연산자
let ternary = a === 10 ? true : false;
// 문자 10이랑 숫자 10이랑 달라서 false

let ternary2 = Math.random() > 0.5 ? 'big' : 'small';
console.log(ternary2);

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;
// 1 출력. 어디에 써먹냐 -> 홀짝 구분할때.

// 산술 연산자: 거듭 제곱
let power = 2 ** 53 - 1; 
let power2 = Math.pow(2, 53) - 1;
// 결과 똑같음~ 이렇게도 쓸 수 있다.


// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];

console.log( typeof (onlyWorkDefaultValues)); // 1,2,34,5,6 나옴.. 타입은 string...

let firstArray = [1,2,3];
let secondArray = [4,5,6];

//  배열의 메서드 사용. 근데 concat은 구식이야~
const newArray =  firstArray.concat(secondArray);
console.log( newArray );

//spread syntax 최신 문법 쓰자! 근데 이건 배열이 아님
console.log( ...firstArray, ...secondArray );
// []로 배열 됐다 짜잔. 
console.log( [...firstArray, ...secondArray] );


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --
let counter = 0;
counter++; //0
counter; //1



// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // 135

let total = count % 4;
count = count / 2;
let pow = count ** 3;
total = total * count + pow;

console.log(total);

