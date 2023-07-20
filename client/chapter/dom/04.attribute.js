/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.

const first = getNode('.first');
console.log(first);
console.dir(first); //객체 찍기

console.log(first.id); //property 접근

console.log(first.class); //undefined. class 있는데 왜?
// 이미 js에 class라는 문법이 있어서 html class에 접근할때는 className이라는 이름으로 접근해야 정확한 결과를 얻을수있음.
console.log(first.className); //first

console.log(first.size);//비표준 속성 undefined. "접근하기 싫어!"


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인
// - elementNode.getAttribute(name) – 속성값을 가져옴
// - elementNode.setAttribute(name, value) – 속성값을 변경함
// - elementNode.removeAttribute(name) – 속성값을 지움
// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함

first.hasAttribute('class') //first에 class라는 속성이 있어?
// console.log(first.hasAttribute('class')); boolean 반환
console.log(first.hasAttribute('size'));  //true. 비표준이지만 알려는 준다.

first.getAttribute('class') //first에 class를 가져와줘~!
console.log(first.getAttribute('class'));
console.log(first.getAttribute('size')); // 비표준도 가져옴.

first.setAttribute('title','메시지');//first라는 대상에 title이라는 속성을 '메시지'로 세팅을 하겠다. 값을 반환하는 거 아니라서 console에 찍을 필요X.

// first.setAttribute('class', 'second');//기존 first클래스를 삭제하고 새로 만듦. 조심하기! 보통 classList에 add하거나 remove로 접근. 이거는 기존값 지워서 위험.

// first.removeAttribute('title');//지우기. setAttribute 빈문자로 값만 지우는 것도 가능.

console.log(first.attributes);//모든 속성을 객체로 반환해줌
// 까보면 Symbole(symbol.iterator) => for of를 돌릴수 있겠군

for(let value of first.attributes){
  console.log(value);
}


//함수만들기1.
// first.getAttribute('id') 매번 이렇게 던지지 말고 유틸함수 만들어서 쓰고 싶다.

function getAttr(node, prop){
//확장성을 고려한 설계
// 1. 넘어온 대상이 문자인지 체크
// 2. 체크 후 element node로 변경해줘야 함.
  if(typeof node === 'string'){
    node = getNode(node) //문자 '.first(예시)'받으면 document.queryelector로 갖고오는거.
  }
  return node.getAttribute(prop);
  

}

// getAttribute DOM의 능력이기 때문에 앞에 돔이 와야 되고 '.first'얘를 앞에 들이밀면 안되지.

getAttr('.first','class') //message
// 위에서 first에서 getNode로 받아놔서 getAttr(first,)이렇게 받아도 됨.
// 문자로 받았으니 조건 처리를하자.



//함수만들기2.
// function setAttr(node, prop, value){
  
//   if(typeof node === 'string'){
//     node = getNode(node);
//   }

//   if(typeof prop !== 'string'){
//     throw new TypeError ('setAttr 함수의 두번째 인수는 문자 타입이어야 합니다.')  //에러에는 함수이름을 기재하는게 리팩토링에 좋음
//   }


//   node.setAttribute(prop, value); //값 내보내지 않아도 돼서 return 안 썼음! 
// }


// setAttr('.first','title','인사멘트')


//더 나아가보기
function setAttr(node, prop, value){
  
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof prop !== 'string'){
    throw new TypeError ('setAttr 함수의 두번째 인수는 문자 타입이어야 합니다.')  //에러에는 함수이름을 기재하는게 리팩토링에 좋음
  }

  if(!node[prop] && prop !== 'class'){
    node.dataset[prop] = value;
    return; //여기서 끝나고 124번째줄 실행X.
  }


  node.setAttribute(prop, value); //값 내보내지 않아도 돼서 return 안 썼음! 
}


setAttr('.first','title','인사멘트')
// 비표준 property를 인수로 던져도 data-를 달고 처리되도록 하고 싶다.
// first가 dom의 property가 있는지부터 조회 (dir으로 찍어보기)
// first.animation은 비표준이라 안되고 
// first['animation'] computed 단축 표기법. 이게 없다면! 
// node.dataset[prop] = value; value로 지정해라. 
// 문제는 class 넣어도 data-class로 처리됨.. 그래서 && prop !== 'class' 이것도 넣음. 클래스가 아닐 경우에만 해주세요~~
// return을 넣어서 if문 안의 값 셋팅하면 종료되도록.
// title도 data-title로 셋팅되니까 && prop !== 'title'로 추가 해주면 됨. 



// 작은 함수를 만들고 큰 함수로 만드는 단계!

//getAttr() 이거랑 setAttr()를 따로따로 쓰지말고 합쳐서

attr('.first','class')//getter
attr('.first','class','second')//setter 이렇게 동작하도록 

function attr(node,prop,value){

  // if(!value){
  //   return getAttr(node,prop);
  // }else{
  //   setAttr(node,prop,value);
  // }

  // 삼항식으로 줄이기. setAttr도 return받는데 셋팅만 하고 끝나서 상관없음.
  return !value ? getAttr(node,prop) : setAttr(node,prop,value);

}

// 화살표함수
const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);






/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset


console.log(first.data);//undefined. 
console.log(first.dataset);//사용자 정의 속성은 data-붙이고 쓰고 dataset 객체 안에 저장됨. 
console.log(first.dataset.size);//10. getter
console.log(first.dataset.animation = 'pasued');//setter. 속성 추가됨.
