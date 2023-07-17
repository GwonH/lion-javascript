/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
}


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한


// auth는 중의적인 표현이기때문에 아래의 두 가지 중에 어떤 건지 구분을 해야함.
// authorization: 권한
// authentication : 인증

let authUser = null;

authUser = {
  uid:'user-id-Moyaigo123#!',
  name:'moya',
  email:'moya@gmail.com',
  isSignIn: true,
  permission:'paid' //free | paid 
}

// console.log(authUser);





// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.


// console.log(authUser.uid);




// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log(authUser['email']);




// 계산된 프로퍼티 (computed property)
// let calculateProperty = 'phone'; // phone | tel

// function creatUser(){

//   return {
//     name:'a',
//     email:'dd',
//   }

// }


// const user = creatUser();

// console.log(user);



// // 함수로 객체 만들기

// function creatUser(
//   name,
//   email,
//   computedProp = 'phone',
//   number = '010-0000-0000'
// ){


//   return{
//     name:name,
//     email:email,
//     [computedProp] : number
//   }
// }

// const user1 = creatUser(
//   '진승',
//   'victory@naver.com',
//   'tel',
//   '010-1234-5678'
// );

// // const user2 = createUser('희소', 'happyCow@naver.com');








// // 프로퍼티 포함 여부 확인

// // key in user1
// // 자신(own)의 속성(property)을 가지고(has)있는지

// // for(let key in user1) {
// //   if(Object.prototype.hasOwnProperty.call(user,key)){
// //     console.log(key);
// //   }
// // }




// // 프로퍼티 나열
// // key만 모아놓은 배열 만들어주세요

// let keyArray = Object.keys(authUser);
// // console.log(keyArray);

// // let valueArray = Object.values(authUser);
// // console.log(valueArray);

// // let en = Object.entries(authUser);
// // console.log(en);


// // getProp(object)

// function getProp(object){
//   if(typeof object !== 'object'){
//     throw new Error('getProp함수의 매개변수는 개체 타입이어야 해!')
//   }
//   return Object.keys(object);
// }

// console.log(getProp(authUser));





// //          null            없앰.
// // 프로퍼티 제거(remove) or 삭제(delete)

// // authUser.name = null;

// // delete authUser.uid
// // console.log(authUser);

// function removeProperty(object,key){

//   if(key === 'all'){
//     for(let key of Object.keys(object)){
//       object[key] = null;
//     }
//     return object;
// }
//   object[key] = null;
//   return object;
// }

// removeProperty(authUser, 'all');



// function deleteProperty(object,key){
  
//   delete object[key];

//   return object;

// }

// deleteProperty(authUser, name);







// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


// const student = {
//   name: name,
//   email: email,
//   authorization: authorization,
//   isLogin: isLogin
// }
// console.log(student);

// 위에거랑 똑같다~ 숏핸드~
// const student = { name, email, authorization, isLogin }
// console.log(student);








// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  // 객체가 비어있는지 확인. Object.keys로 배열로 바꾸고 렝스 첵.
  // Object.keys(object).length
  
  return Object.keys(object).length === 0 ? true : false;
}


console.log(isEmptyObject(authUser));


/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

// console.log(color[0]);


// let red = color[0];
// let blue = color[1];
// let green = color[2];   //이렇게 담아서 쓰고 싶다! 좀 더 간편한 문법 => 배열 구조 분해 할당


// 배열은 순서가 중요. 대신 변수의 이름을 바꿀수 있다. 
// let [red, blue, green] = color;
let [,,green] = color;

console.log(green);


// for(let keyValue of Object.entries(authUser)){
//   let key = keyValue[0]; //키값들만
//   let value = keyValue[1]; //벨류들만

//   console.log( keyValue[1]);
// }



// 배열의 구조 분해 할당
for(let [key,value] of Object.entries(authUser)){

  console.log( key);
}















/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  권혜미:5000,
  이수연:3000,
  강예나:500,
  김태일:700,
}
// const 권혜미 = salaries.권혜미

const {권혜미,이수연,강예나,김태일} = salaries;

console.log(권혜미);





function setElementCss(width){
  console.log( width );
}

setElementCss(100)
