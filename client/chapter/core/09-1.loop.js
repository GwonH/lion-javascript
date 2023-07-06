/* --------------- */
/* While Loop      */
/* --------------- */


// let repeat = 0;

// while (repeat < 10) {
//   console.log(repeat);
//   repeat++;   //이거 안 쓰면 무한 루프... 
// }




const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// 성능 체크
let z1 = performance.now();

let i = 0;
while (i < frontEndDev.length ){
  let value = frontEndDev[i];  //변수에 담는 습관 기르자.

  console.log( value );
  i++;
}

let z2 = performance.now();
console.log(z2 - z1); //시간 편차로 성능 체크 출력.




// while 문 (역순환 : 역방향)

let z3 = performance.now();

let l = frontEndDev.length - 1; //1안 빼면 없는 7번 인덱스 값이 undefined로 나옴. 

while (l >= 0){
  let val = frontEndDev[l];
  console.log(val);
  --l;
}

let z4 = performance.now();
console.log(z4 - z3);



// while(frontEndDev.length) {

//   console.log( frontEndDev.pop() ); //얘도 역순환 반환.  pop은 배열의 마지막 값 뽑아냄. 문제는 원래 배열이 원본파괴됨. 
  
// }
// 배열의 깊은 복사로 copy 떠와서 하면 파괴 안 하고도 할 수 있음.

let copyArray = frontEndDev.slice(); //옛날 방식.
// 원본 살려두고 복사해온 걸로 역순환 반환되도록!
// while(frontEndDev.length) {
//   console.log( frontEndDev.pop() ); 
// }


// let copyArray2 = [ ... frontEndDev]; //new

// while(frontEndDev.length) {

//   console.log( copyArray2.pop() ); 
// }






// 성능 진단 : 순환 vs. 역순환
// 역방향으로의 계산이 훨씬 빠름. 
// 순수JS로 구현하는 일이 들물어서 performance로 직접 성능 체크 하는 일이 드물다.
// react나 vue에선 알려줌. 