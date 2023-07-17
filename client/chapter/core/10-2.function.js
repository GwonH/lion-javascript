/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
// let calculateTotal = function(priceA,priceB,priceC,priceD) {
//   return priceA + priceB + priceC + priceD;

// };

// const result = calculateTotal(1000,500,200,6500);

// console.log(result);
// =>허접. 이유는 사용자가 4개에 맞춰서 넣지 않으면? 초과해서 넣으면 파라미터를 계속 추가해? 낭비.
// argument를 한 번에 받아서 처리하는 함수 내장 기능 이용하기.


// 핵심 : 여러가지 인수가 전달됐을때 그걸 받아서 처리하는 여러 방법들

let calculateTotal = function() {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 것은? : arguments. 우리가 뭘 던지던 다 유사배열로 저장하는 실체는 객체인 놈.
  // console.log( arguments );
  // let total = 0;
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }
  // return total;


  // // arguments는 유사배열, symbole.iterator가 있으니까 for of 문 사용 가능! 
  // let total = 0;
  // for(let key of arguments){
  //   total += key;
  // }
  // return total

  // 능력 빌려오기 ...인데 안쓴대.. 
  // 누구의 능력.어떤거.누가.
  // let total = 0;
  // Array.prototype.forEach.call(arguments,function(item){
  //   total += item;
  // })
  // return total;


  // 빌려쓰지말고 그냥 배열로 만들어버리면 되는 거 아냐?라는 관점에서의 접근법. 근데 레거시~ 안쓴다지만.. 가면 누가 써놨겠지; 알아봐야지..
  // let total = 0;
  // // slice를 빌려써서 배열로 만들기
  // let realArray = Array.prototype.slice.call(arguments);
  // // 도려내서 진짜 배열로 만듦
  // console.log(realArray);

  // realArray.forEach(function(item){
  //   total += item;
  // })
  // return total


  //5. Array.from() 이건 종종 씀
  let realArray = Array.from(arguments);
  // console.log(realArray);
  // realArray.forEach(function(item){
  //   total += item;
  // })


  //6. spread syntax 최신구문이기도 하고 제일 많이 씀
//   let realArray = [... arguments ];
//   console.log(realArray);
//   return total


// 7. Array.reduce 
// acc => 누적값 let total로 했었는데 앞에선. reduce는 애초에 acc로 있음.
// item은 순회도는 아이템.
// initValue 최초값 = 0. 하는 일은 acc의 초기값 설정할때 씀. 0부터 시작~!~!
// reduce는 값이 나와야해서 return이 필요함.
  return realArray.reduce((acc,item)=>{
    return acc + item
  },0)
};



const result = calculateTotal(1000,500,200,6500);

console.log(result);





// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){

};
// console.dir(anony~); 속을 볼수있음.

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};
// 그냥 함수라는 객체의 이름일뿐이지 그 이름으로 호출할순 없어. 별로 이렇게 쓰는 경우X 위에거를 씀.



// 콜백 함수 (표현)식
let callbackFunctionExpression = function(callback){
  // 이걸 써야 됨.
  callback();
};

callbackFunctionExpression(
  function(){
    console.log('콜백 함수 실행!');
  })

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// 변수의 보호. var가 함수스코프를 가지니까 var 쓰던 시절에 쓰던 것. 전역을 보호하려고.
// 은닉화 incapsulation(캡슐화)
// IFFE패턴 이걸 해주지만~~ 요즘은 잘 안 씀. 이유는 모듈이 이 기능을 해줌.
const MASTER = (function (){
  // 밖을 못 나가는 캡슐화가 된 x. 
  var x = 10;
  console.log('즉시 함수!');
  
  return '퉤';
})()


console.log(MASTER);

