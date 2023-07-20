/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

// first.className  => getter
// first.className  = 'box' => setter 기존의 class 사라지는 문제가 있음.
// first.className  = 'first box' => 2개를 써야됨.


// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList

//add
//remove
//toggle
//contains

first.classList.add('hello');
first.classList.remove('hello'); 
// first.className ='';//여러개의 클래스를 한 번에 다 지우는 방법
// 아니면 우리가 만들어놨던 attr 함수 이용
// attr(first,'class'.' ');인데 코드 개량이 좀 더 필요함.

first.classList.toggle('is-active'); //=>boolean 값 반환. 추가되면 true, 지워지면 false.

first.classList.contains('hello') //얜 값 반환해서  console에 찍기
console.log(first.classList.contains('hello')); //first에 hello라는 class가 있어?



addClass('.first','ahello')




const toggleClass = (node,className) => {
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두번째 인수는 문자타입이어야 합니다.')
  }

  return node.classList.toggle(className);
}




/* 스타일 변경 방법 --------------------------------------------------------- */

// first.style //console에 찍으면 쓸수있는 css 속성들 나옴

first.style.backgroundColor = 'orange'; //setter로 가능.

// 그럼 가져오는 거! getter~ 이렇게? nono
// console.log(first.style.backgroundColor); 
// 원래 안 나오는게 맞는데 지금 가져올 수 있었던 건 위에 orange라는 js값을 할당했기때문에 가져오는 거임. 그래서 이렇게 가져올수는 없다~~~~~




// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// getter의 역할은 이렇게~
console.log(getComputedStyle(first).fontSize);
console.log(getComputedStyle(first).getPropertyValue('font-size')); //명시적으로 쓰는 방법. 둘은 똑같다!


//객체 안에 키 값이 있는지 확인 하는 방법 in문 (prop으로 전달받은 값이 style에 없으면 에러띄우도록)

// function setCss(node,prop,value){
  
//   if(typeof node === 'string'){
//     node = getNode(node);
//   }
//   if(!(prop) in document.body.style){
//     throw new SyntaxError('setCss 함수의 두번째 인자인 prop은 유효한 css 속성이 아닙니다.')
//   }
//   if(!value) throw new SyntaxError('setCss 함수의 세번째 인수는 필수값입니다.');

//   // node.style.prop = value; //객체의 속성에 접근할 때 .표기법은 못 쓴다. []써야됨.
//   node.style[prop] = value;
// }



setCss('.first','color','tomato')

