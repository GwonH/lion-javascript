import { jujeobData } from './data/data.js';

import { 
  shake,
  getNode, 
  addClass,
  showAlert,
  getRandom, 
  insertLast,
  removeClass,
  clearContents,
  isNumericString,
  toggleClass,
  copy,
} from './lib/index.js';

const submit = getNode('#submit')
const nameField = getNode('#nameField')
const resultArea = getNode('.result')

//[phase-1]
// 1. 주접떨기 버튼 클릭할 수 있는 핸들러 연결
// 2. namefield에 있는 값 가져오기
// 3. jujeob 데이터 가져오기
// 4. jujeob 데이터에서 랜덤한 주접 하나 가져오기
// 5. pick 항목을 result에 랜더링

//[phase-2]
// 1. 아무 값도 입력받지 못했을 때 에러처리
// 2. 공백도 작동 안되도록... replace => regEXP
// 3. 숫자형 문자를 받았을 때(e.g 123, 기안84)

//[phase-3]
// 1. 잘못된 정보를 입력받으면 사용자에게 알려주기
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. aniamtion 모듈화

//[phase-4]
// 1. result를 클릭 이벤트 바인딩



function handleSubmit(e) {
  e.preventDefault(); // 새로고침 되는 기본 동작 차단
  let name = nameField.value;
  const list = jujeobData(name)
  // jujeobData(name)[n] jujeobData는 배열이라 이렇게 뽑아오기 가능
  const pick = list[getRandom(list.length)];
  
  
  // name = ' '쓰면 두개 들어가면 안 걸러짐. 그래서 정규표현식!
  if(!name || name.replace(/\s*/g,'') === ''){
    showAlert('.alert-error','이름을 입력해주세요!!',2000);

    shake.restart();

    return;
  }
  
  if(!isNumericString(name)){
    showAlert('.alert-error','제대로된 이름을 입력해주세요',2000)

    shake.restart();

    return;
  }



  clearContents(resultArea)
  insertLast(resultArea, pick)



}


// 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// let state = false;
// state = true;
// if(State){ ... logic}


function handleCopy(){
  const text = resultArea.textContent;
  
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!');

  })
  


}


submit.addEventListener('click', handleSubmit)
resultArea.addEventListener('click', handleCopy);