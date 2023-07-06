
/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR)); //명시적 형변환
console.log( YEAR + ''); //암시적 형변환

// undefined, null
let days = null;
console.log( typeof String(null));
console.log( null + '');

let undef = undefined;
console.log( typeof String(undefined));
console.log( undefined + '');

// boolean
let isClicked = true;
console.log( String(isClicked) );
console.log( isClicked + '' );


/* 데이터 → 숫자 -------------------중요-------------------- */

// undefined
let friend;
console.log(Number(friend)); //NaN

// null
let bankbook = null;
console.log(Number(bankbook)); //0   undefined랑 다른 걸 기억해.


// boolean
let cutie = false;
console.log(Number(cutie)); //0


// string
let num = '250';
console.log(Number(num));
console.log(+num); //암시적 형변환 +num, num*1, num/1 

// numeric string
let width = '105.3px';

console.log(width);
console.log(Number(width)); //NaN

// PX빼고 값만 가지고 오기
let w = window.parseFloat(width); //window는 생략가능.
console.log( w ); //105.3까지 출력. 우와! 

// 값이 '105.3px213423'이러면 문자 뒤에는 다 짤리는 거임.


/* 데이터 → 불리언 -----------제일 중요------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean('')); // 여기까지 전부 false
// ---------명시적 형변환

console.log(!false); //true 
console.log('암시적 형 변환 : ' + !false); // true
console.log('암시적 형 변환 : ' + !!false); // 부정의 부정은 트루~ false 다시 뒤집어서 true 됨.  




// console.log(Number(true));
// // 1

// console.log(Number(null));
// // 0

// console.log(Number(undefined));
// // NaN

// console.log(Number('         123 '));
// // 공백 제거 123

// console.log(Number('123px'));
// // NaN




// // 암시적 형변환
// let str = '123';
// // 남의 코드를 봤을때 아 형 변환을 하고 있는 거구나~ 이해하기.
// console.log(+str);
// console.log(str*1);
// console.log(str/1);


// console.log(Boolean(' '));
// //공백도 문자. 트루!
// console.log(Boolean('0'));
// // 문자열 0도 트루!

// // 암시적 boolean 형변환 앞에 !! 쓰기.
// console.log(!!0);
// console.log(!!1);
// console.log(!!undefined);