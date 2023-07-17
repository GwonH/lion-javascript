/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty(){
  //   return '이게 된다고..?'        조상의 능력이 훼손되니까 object의 property에 접근해서.
  // }
};


// in 문 :객체 안에 내가 원하는 값(property)이 있어?
// in문을 쓰면 js 엔진 object의 능력까지 다 찾아버려서 문제임.

// const key = 'valueOf';  
// console.log( key in javaScript );
// console.log( javaScript);


Object.prototype.nickName = 'ham';  //찐객체에 추가하는 거. 이거보다 안 전하게
// Object 진짜 객체. 얘 능력을 빌려 쓸때 call이라는 허락이 있어야 함.
// console.log(Object.prototype.hasOwnProperty.call(javaScript,key););





// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty(key));
// hasOwnProperty는 찐 객체의 능력을 빌려다 쓰는 거라서 나중




// String.prototype.includes.call(123,'a') 
// 숫자 123이 string 문자의 include라는 문자만의 능력을 빌려서(call)쓸 수 있다.





// for(let key in javaScript) {
//   console.log(key);
// }

// nickName은 객체가 아닌데 같이 출력됨. 그래서 Object.prototype.has~ 이걸 쓰는 거.


for(let key in javaScript) {
  if(Object.prototype.hasOwnProperty.call(javaScript,key)){
    console.log(key);
  }
  
}
// 이제 nickName없이 출력됨. 이게 올바른 것!

// if(({}).hasOwnProperty.call(javaScript,key))이렇게 줄여쓰기 가능 Object.prototype = ({})



// for ~ in 문
// - 객체 자신의 속성만 순환하려면? for~ in
// - 배열 객체 순환에 사용할 경우....? 가능은 하지만 적합하지 않다. 굳이 반복해야한다면 Array.prototype.forEach(),for...of를 권장한다.

const tens = [10,100,1000,10000];

for(let key in tens){
  console.log(key);
}


for(let key in tens){
  console.log(tens[key]);
} 
