/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;

// console.log(typeof empty);
// object 출력. 언어상의 실수. 오류.


// 2. 값이 할당되지 않은 상태

// const X
let unknwon;
// console.log(typeof unknwon);

// =>undefined 출력.
// 값 비워놓고자 할때는 null을 넣고 undefined를 직접 할당하지 말자.

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

// 이렇게 문자를 생성할수도 있다. 문자 생성자(constructor). 이런 생성자를 잘 쓰진 않지만! 있다.
const hi = new String('hello'); //type object나오는데 쓰임의 차이는 없다...

const double = "hello"; //문자 리터럴 
const single = 'hi';
const backtick = `hola`;
const templateString = `hi ${ 1 + 3 }`;

console.log(typeof hi);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123); //숫자 생성자. 역시 이것도 잘 안 쓰죠~
const integer = 123;
const floatingPointNumber = 10.45;

// console.log(typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInteger = 123n;
const big = BigInt (123);
// new 키워드 안 붙임. 최근에 나온 애라.. 얘랑 symbol이 그렇다.


// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;
// console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {}  //객체
const Obj = new Object ({}); //역시 constructor의 힘으로 이렇게 생성 가능!


// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid');

console.log(typeof unique);


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

console.log( typeof 1 + 2 ); //number2
console.log( typeof (1 + 2) ); //number


// 언어 상, 오류


// Object

const user = {
  name : 'ham',
  age : 31,
  sayHi: function(){
    console.log('hello~');
  }
}
// user의 property가 name, age.
// 메서드는 객체 안에 함수를 정의하면 그게 메서드다. 그냥 함수는 객체 바깥의 함수.

console.log(user);
// 점 찍고 property에 접근
console.log(user.age);
// 메서드는 괄호로 실행해주기
console.log(user.sayHi());

// +메서드 정의 방식. 그냥 이런 게 있다~ 정도만.

// alert1: function () {} //normal function
// alert2 () {} //consise(축약) method
// alert3:()=>{} //arrow function 


// Array 0번 부터~

const arr = [10,100,1000,1,2,3];
console.log(arr);
console.log(arr[3]);

// const new Array(); 배열의 생성자


// function

// 재료=인자 parameter

function 붕어빵틀(재료) {
  return 재료 + '붕어빵 나왔어요^^';
}
// 붕어빵틀() //실행

console.log(붕어빵틀('슈크림'));


const f = new 붕어빵틀();
// 얘는 클래스
console.log(typeof f);


// this



