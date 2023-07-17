/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기

// for(let j = 0; j <= 10; j++ ){    //{}요기를 바디 구문이라고 함. 

//   if ( j % 2 === 0){
//     console.log(j);              //j는 for문 밖에서 접근 못함. var는 이걸 뚫어.
//   }
// }


// let j = 0
// for(; j <= 10;){
//   j++                   
//   if ( j % 2 === 0){    
//     console.log(j);
//   }
// }

// 이건 j를 밖에 선언해서 for문 이후에도 호출 가능. scope 차이. 


// 문자를 배열로 반환해주는 녀석 split. 많이 씀.
const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

// let i = 0;
let l = frontEndDev.length;

// while(i < l) {
//   console.log(frontEndDev[i]);
//   i += 1;
// }

// for(let i = 0; i < frontEndDev.length; i++){
//   let value = frontEndDev[i];
//   console.log(value);
// }





// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)


// for(let i = 0; i < frontEndDev.length; i++){
//   let value = frontEndDev[i];
//   // if(value === 'SVG' || value === 'jQuery') continue; //if(value.includes('SVG') || value.includes('jQuery')) continue;라고 써도 됨.
  
//   //   - 조건: JavaScript 까지만 출력하세요.
//   if(lower.includes('jQuery')) break;
//   console.log(value);
// }

// 'svg', 'jquery'도 필터링 되도록
// if(value.toLowerCase().includes('svg') || value.toLowerCase().includes('jQuery')) continue;
// 너무 길면
// let lower = value.toLowerCase(); 이렇게 변수 따로 만들어서 빼내기. 
// if(lower.includes('svg') || lower.includes('jQuery')) continue;





//   - 무한 루프 (브레이크)
//   - for 문 (역순환)

let zero = 0;
for(let i = l - 1; zero < i;){
  console.log(frontEndDev[--i]);
}