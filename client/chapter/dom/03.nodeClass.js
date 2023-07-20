/* ------------------------------ */
/* DOM Node Class                 */
/* ------------------------------ */

// Object
//   ↓
// EventTarget
// - 이벤트 관련 기능을 제공
//   ↓
// Node
// - 공통 DOM 노드 프로퍼티를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// Element              Text                Comment
// - 요소 노드 메서드를 제공
//   | ————————————————————
//   ↓                    ↓
// HTMLElement       SVGElement
// - HTML 요소 메서드와 getter, setter를 제공
//   | —————————————————————————————————————————
//   ↓                    ↓                    ↓
// HTMLBodyElement  HTMLDivElement     HTMLButtonElement

// console.dir($0) 아무 태그 하나 찍어서 이거 계속 까보면 조상 추적 가능


/* ------------------------------------------------------------------------ */

// EventTarget – EventTarget가 모든 DOM 노드의 베이스에 있기때문에 DOM 노드에서 '이벤트’를 사용할 수 있습니다.


// Node – getter 역할을 하는 parentNode, nextSibling, childNodes 등의 주요 트리 탐색 기능을 제공합니다. 
//        Text 클래스, Element 클래스, Comment클래스는 Node클래스를 상속받습니다.


// Element – nextElementSibling, children 이나 getElementsByTagName, querySelector 같이 요소 전용 탐색을 도와주는 프로퍼티나 메서드가 이를 기반으로 합니다. 
//           SVGElement, XMLElement, HTMLElement 클래스의 [베이스] 역할을 합니다.


// HTMLElement – HTML 요소 노드의 베이스 역할을 하는 클래스입니다.
//               HTMLInputElement – <input> 요소에 대응하는 클래스
//               HTMLBodyElement – <body> 요소에 대응하는 클래스
//               HTMLAnchorElement – <a> 요소에 대응하는 클래스 

// 위로 올라갈수록 공통으로 가지는 능력. 내려갈수록 개개인의 능력.


/* 노드 정보 ------------------------------------------------------------- */

const first = getNode('.first')

// - nodeType
console.log(first.nodeType); //1
console.log(first.nodeType === document.ELEMENT_NODE);
console.log(first.nodeType === 1); //보통 이렇게 비교 

// - nodeName (vs. tagName)
console.log(first.nodeName); //SPAN 대문자로 나옴.
console.log(first.nodeName === 'SPAN'); // 대문자로 비교하거나 toLowerCase해줘서 비교하기.

console.log(first.tagName === 'SPAN'); //똑같은데 왜 나눠져있냐? nodeName은 앞에 대상이 TAG가 아니라 주석이 와도 그거에 대한 이름을 출력해줌. tagName은 진짜 태그의 이름만! 


/* 노드 콘텐츠 읽기/쓰기 ---------------------------------------------------- */

// - innerHTML 좀 위험해...! react에선 innerHTML을 dangerouslySetInnerHTML이라고 함. 이름 길면...잘 안쓰는 거. 악성스크립트로 인한 해킹의 위험이 있다. 
// first.innerHTML = 'helloooooooo'
// XSS에 대한 위험이 있다.


// 값을 비울때 가끔 씀.
// * 기존 내용 삭제
// first.innerHTML = ''

// * 기존 내용과 새로운 내용을 합친 새로운 내용을 씀
first.innerHTML = '<div>안녕!</div>'

// - textContent
console.log(first.textContent); //getter
console.log(first.textContent = ''); //setter
console.log(first.textContent = '야!'); //이렇게 안전하게 문자 넣을수있다.

// * 요소 내의 텍스트에 접근
// * 태그는 제외하고 오로지 텍스트만 추출


/* hidden -------------------------------------------------------------- */

// - hidden
// * hidden은 HTML 속성으로, DOM 프로퍼티로 사용 가능 (1:1로 매핑 된다.)
// * hidden 프로퍼티는 기술적으로 style="display:none"와 동일

const h1 = getNode('h1');

// 이게 프로퍼티로 쓴 거
h1.hidden = false;

// display block이랑 둘다 같이 주면 js코드는 안 먹음. 우선순위 css가 더 높아서

setInterval(() => {
  h1.hidden = toggle? false:true;

  toggle = !toggle;

},100)