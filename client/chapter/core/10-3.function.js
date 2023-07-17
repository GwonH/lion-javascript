/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

// 음~ 함수값을 넣고 있군~ 함수 표현식이구만~! 
const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 화살표함수는 arguments가 없음...;;
// 함수 선언 → 화살표 함수 (표현)식 
//                rest parameter      args여긴 내 마음대로.. 근데 관례적으로 args,rest,children이라고 표기 하는 경우가 많음.
let calcAllMoney = (...args) => {
  console.log( args ); //진 짜 배 열 로 만들어줌.. .허 

  // 일반 함수로 
  // return args.reduce(function(acc, item){
  //   return acc + item;
  // },0)

  // 화살표 함수로
  return args.reduce((acc,item)=> acc + item ,0)


};

const result = calcAllMoney(1000,500,200,3010);

console.log(result);






// 함수선언문, 함수표현식, 화살표함수식을 배웠다. 차이점을 알아보자. 콘솔창에 dir(함수명)으로 속을 파헤쳐보자~. => 화살표함수는 constructor 내장되어있지 않음. 
// ex) const obj = new Object() <-이게 생성자. 이게 있어서 이런식으로 나올수 있는 건데 
// 그냥 함수로서의 기능만 한다~ 화살표함수는... constructor는 상속받은 거라서 꽤 무겁다. 화살표 함수는이 게 없어서 비교적 빠르다.


// function Button(){

// }

// const a = Button()
// // undefined
// console.log(a);

// const b = new Button()
// // b = {} 객체 나옴
// console.log(b);

// 일반 함수 양면의 얼굴.... new 키워드를 붙이면 객체를 생성하는 생성자 함수가 된다...그럴때 함수이름 첫머리를 대문자로 쓴다........


// const Cutton = ()=> {

// }
// const c = Cutton()
// // undefined
// console.log(c);

// const d = new Cutton()
// // TypeError: Cutton is not a constructor
// // 화살표 함수는 컨스트럭터 없으니까 에러나는 거야!
// console.log(d);


// // 1.함수선언문
// function normalFunction(){

// }
// // 2.함수표현식
// const expressionFunction = function() {

// }

// // 3.화살표함수
// const arrowFunction = () => {

// }


// 화살표 함수와 this
// 1.함수선언문
function normalFunction(){
  console.log(this);
}
// 2.함수표현식
const expressionFunction = function() {
  console.log(this);
}

// 3.화살표함수
const arrowFunction = () => {
  console.log(this);
}


// this를 왜 쓰는지




// 객체 안에서 this.  이게 많이 씀!

// 객체의 메서드를 정의할때는 화살표 함수보다 일반함수가 더 좋은 거 아닌가요? 마자요. 그래서 거의 안 써요.
// 근데 객체의 메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋음. forEach 예문 참고.
// 공식같은 거임. 객체 메서드는 일반 함수! 메서드 안에서는 화살표 함수~! 

const user = {
  total:0,
  name:'tiger',
  age:32,
  address:'서울시 중랑구 면목동',
  grades:[80,90,100],
  totalGrades:function(){     
    console.log(this);               
    console.log(this.grades);               
    //일반함수는 호출한 내가 대상이 this 되니까 user가 나 호출했으니까 user객체 뜸
    // 화살표함수로 쓰면 window 나옴~
    // 저건 좀 올드하고... totalGrades(){console.log(this.grades)}
  }
}










/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 