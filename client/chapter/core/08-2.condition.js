/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
// 첫번째 F&& 반환 


// 논리합(또는) 연산자
let AorB = a || b;
// 첫번째 T|| 반환
console.log(AorB);

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy : false};
// [] 는 true임.. Boolean([])로 확인. 빈 객체도 트루임..Boolean({});
// 다 true니까 마지막 게 반환.



// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruty:true};
// f, f, 2, true. 2만나는 순간 true니까~ 원래값 2 퉤!
console.log(whichTruthy);