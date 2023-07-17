/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);



// 함수 선언
function calaSumPrice(priceA, priceB, prcieC){

  // priceC ||= 0; 이거 넣는 것도 방법.


  if(typeof priceC === 'undefined'){
    prcieC = 0;
  } //혹은 if(!priceC) priceC = 0; undefined는 false. !false => true가 되니까 뒤에 실행.
  return priceA + priceB + prcieC;
}

// 함수 호출
const result = calaSumPrice(10000,3500); 
// 세번째 값 전달 안하면 그 자리에 undefined가 전달 돼서. 
// 이 문제를 정리하려면~ validation 해주기. if문으로 조건처리.
// 매개변수에 기본값처리 priceC = 0


// function getRandomValue() {
//   return Math.random() > 0.5 ? 1 : 0;
// }

// function calcPrice (
//   priceA,
//   priceB,
//   priceC = getRandomValue(),
//   priceD = getRandomValue()
// ){

//   if(!priceA || !priceB){
//     throw new Error('calcPrice 함수 첫번째 매개변수 필수값이야!')
//   }
//   return priceA + priceB + priceC + priceD;
// }


// const result2 = calcPrice()
// console.log(result2); //return이 있어야~.. 없으면 undefined.





// 함수 값 반환


// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */
// 함수 작성의 단계
// 1. function name
// 2. validation
// 3. return value
// 4. parameter, argument
// 5. test [test driven development]


// rem(pxValue: number|string, base: number):string;

function rem(pxValue, base = 16){ 

  if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue,10);
  }
  return `${pxValue / base}rem`

}

rem('20px');


// 테스트는 console.assert(여기에 함수)


// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.



function su(a,b){
  return a + b;
}

const sum = (a,b) => a + b; //return 없어도 됨
const summ = (a,b) => {return a + b}; // 괄호 쓰면 return 써야됨.

const sum = (a,b)=> {a + b};//값 반환 X return 써야지~

// 매개변수가 하나 면 ()도 지울 수 있다!.
//cosnt s = a => a*10;


//arrow function 많이 쓰는 건 콜백함수
