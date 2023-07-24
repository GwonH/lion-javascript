

import { attr, disableElement, enableElement, diceAnimation, getNodes, getNode, removeClass, insertLast, endScroll, clearContents } from "./lib/index.js";


// [phase-1]주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
// 2-1. 주사위 굴리기 버튼 가져온다.
// 2-2. 이벤트 핸들러를 연결한다.
// 2-3. 애니메이션 코드를 작성한다. 
// 3. 애니메이션 토글 제어
// 4. 클로저 + IIFE 를 사용한 변수 보호

// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 2. hidden 속성 제어하기
// 2-1. 기록 버튼 이벤트 바인딩
// 2-2. hidden 속성 false 만들기
// 3. 주사위 값을 가져와서 랜더링
// 4. 스크롤 위치 내리기
// 5. 함수 분리

// [phase-3] 초기화 시키기
// 1. 아이템 지우기

// 배열 구조 분해 할당
// document.querySelectorAll('buttonGroup > button')  => NodeList
const [startButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper')
const tbody = getNode('.recordList tbody')

// 진짜 쉬운 과제 util function 두개 만들기
// disableElement(node) O
// enableElement(node) O
// isDisableState(node) => true / false 지금 disable상탠지 아닌지

// visibleElement(node)
// invisibleElement(node)
// isVisibleState(node) => true / false

let count = 0; //회차 증가
let total = 0;


function creatItem(value){


  // 값 뿌려줄 템플릿 만들기
  return /* html */`
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${total += value}</td>
    </tr>
  `

}



function renderRecordItem() {
  
  // 큐브의 data-dice 값 가져오기
  const diceValue = +attr('#cube', 'data-dice');


  insertLast(tbody, creatItem(diceValue));
  endScroll(recordListWrapper)
  
}

function handleRollingDice(e) {
  let isClicked = false;
  let stopAnimation; 
  
  return ()=>{
    if(!isClicked){ //주사위 play
      stopAnimation = setInterval(diceAnimation, 100);//setInterval은 고유한 id 반환. 이 id를 이벤트 제거용으로 쓸 수 있음. 그 값을 stopAnimation에 넣음.
      disableElement(recordButton)
      disableElement(resetButton)
    
    }else{ //주사위 stop
      clearInterval(stopAnimation) //실행하고 튀어나온 아이디값을 넣어줘야함. 
      enableElement(recordButton)
      enableElement(resetButton)
    }
  
    isClicked = !isClicked;
  }

}

// 회차 늘어날 수 있도록
// diceValue 들어갈 수 있도록
// total 값이 나올 수 있도록


function handleRecord(){
  recordListWrapper.hidden = false;
  renderRecordItem()

}




function handleReset(){
  recordListWrapper.hidden = true;
  enableElement(recordButton)
  enableElement(resetButton)


  clearContents(tbody);
  count = 0;
  total = 0;

  
}


recordButton.addEventListener('click', handleRecord)

startButton.addEventListener('click',handleRollingDice());//클로저의 튀어나온 함수를 실행하려고 () 붙여준 것.

resetButton.addEventListener('click',handleReset)

//()안쓰고 실행되도록 즉시실행함수 쓰기
// const handleRollingDice = ((e) => {
//   let isClicked = false;
//   let stopAnimation; 
  
//   return ()=>{
//     if(!isClicked){
//       stopAnimation = setInterval(diceAnimation, 100); 
//     }else{
//       clearInterval(stopAnimation) /
//     }
  
//     isClicked = !isClicked;
//   }
// })()
// startButton.addEventListener('click',handleRollingDice)
