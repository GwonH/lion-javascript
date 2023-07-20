/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

// DOM 
// 내가 원하는 대상을 잘 선택할수 있느냐. 그 방법.

getNode('.first') //<span class="first"></span>

const first = getNode('.first')

const span = getNodes('span')


/* 모든 노드에서 사용(순회) */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling


// 대체적으로 노드 탐색보다 요소 노드만 찾아서 그 값을 반환 시켜줌.

// document.body.childNodes  안에 뭐 있는지 다 알려줌. 
// document.body.children 애들만 반환.

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling




/* 문서 대상 찾기 */
// - getElementById 얘가 query~얘네보다 성능이 좋지만 미미함.
// const message = document.getElementById('message');
// console.log(message);


// - getElementsByTagName
// - getElementsByClassName
// ---------------------------------요기 위에 3개는 유물이라고 함. 아래의 것들을 쓰자~


// - querySelector
// const first  = document.querySelector('.first'); //단일 대상 수집

const list  = document.querySelectorAll('span'); //document가 가지고 있는 모든 span 나옴. 노드리스트로 반환. 구조 분해 할당으로 써먹기 가능.

const [firstSpan,secondSpan] = document.querySelectorAll('span')
console.log(first);
console.log(secondSpan);
// - querySelectorAll
// - closest

console.log(first.closest('h1')); //가장 인접한 부모가 누구여. even delegation 이벤트 위임에서 많이 씀. 

console.log();

/* 문서 대상 확인 */
// - matches 그 값이 맞냐? 

first.matches('.first')
console.log(first.matches('#message')); //야 있어? 일치해?


// - contains
// 선택자의 자식들 중에 해당 element가 있어?
console.log(first.contains(secondSpan)); 

// 클래스를 포함하고 있어? contains랑 다르다!
// node.classList.contains()


console.log(span);