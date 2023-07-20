// 모듈 프로그래밍 => js 의 어려운 방법X. 방법론

// const a = 'hello';
// console.log(a); //못 찾음.

//getNode 가져오기 getNode에서 export 하고 

import { getNode, } from "./lib/dom/getNode.js";

// eslintrc.js 에서 no-undef': 'off',주석처리







// -------------------------------------------------
const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
const clear = getNode('#clear');

function handleInput(){
  let firstValue = +first.value; //암시적 형변환
  let secondValue = Number(second.value); //명시적 형변환
  let total = firstValue + secondValue
  

  // 기존값 지우는 처리 
  clearContents(result)
  // 사용자가 보이게 렌더링 처리
  insertLast(result, total);

} 


//[page-2]
//clear버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어보기.

function handleClear(){
  

  clearContents(first)
  clearContents(second)
  clearContents(result)

  result.textContent = '-'

  // result.value = 'dd'
  // if(first.value && second.value){
  //   first.value= '';
  //   second.value= '';
  //   result.value= '-';  //안 된 이유: first 는 input이고 result는 div였고 innerHTML보다 가벼운 사용.
  // }

}



clear.addEventListener('click',handleClear)
first.addEventListener('input',handleInput)
second.addEventListener('input',handleInput)



// function page2(){


//   const calculator = getNode('.calculator');
//   const clear = getNode('#clear');
//   const result = getNode('.result');
//   const numberInputs = Array.from(
//     getNodes('input:not(#clear)')
//   )
  
//   console.log( numberInputs );
  
  
//   function handleInput(){
    
//     const total = numberInputs.reduce((total,input)=> total + Number(input.value),0)
  
  
//     console.log(  );
  
//     clearContents(result);
//     insertLast(result,total);
    
//   }
  
//   function handleClick(){
  
  
//     numberInputs.forEach(clearContents);
//     result.textContent = '-'
//   }
  
//   calculator.addEventListener('input',handleInput);
//   clear.addEventListener('click',handleClick);

  
  
//   }



// [page-3]
// 위 내용을 이벤트 위임으로 변경
// .calculator 이벤트 input






// 


