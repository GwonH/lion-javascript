/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler 알아서 onclick발생해서 ()안넣음.
// 3. 메서드 : element.addEventListener(event, handler[, phase]) 이걸쓴다!

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode('.first');

function handler() {
  // console.log('HTML 속성에서 이벤트를 실행합니다.');
  console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}

// first.onclick = handler;
// first.onclick = handler2; 얘까지 만들어서 쓰면 위에거 무시됨. 하나만 넣을 수 있다!=>onclick도 지양~!

function handleClick() {
  console.log('이벤트 메서드를 호출합니다.');
}

// click, mousemove, mouseover, mouseout, mousedown, mouseup
// first.addEventListener('click',handleClick);

// 이벤트는 꼭 제거하는 것도 써줘야 함! 많아지면 부하가 많이 걸려 성능의 이슈가 있다.
// first.removeEventListener('click',handleClick);

// const remove = bindEvent('.first','click',handler);
// remove에 return된 함수가 담겨서 remove()로 실행가능.

// 특정 시간이 지나면 이벤트가 제거되도록. setTimeout은 윈도우API
// setTimeout(() => {
//   remove()
// },3000)
// 3초 뒤에 이벤트 제거됨.

// 이벤트 객체(event object)
// 이벤트는 자기만의 객체가 존재함.
// 이벤트가 발생하면 브라우저는 이벤트 객체를 만듦.
// 객체에 이벤트에 관한 상세한 정보들을 넣고 핸들러의 인수로 형태를 전달한다.

// function handleClick(e){

//   console.log(e);
//   console.log(this === e.target);
//   console.log(e.target);
//   console.log(e.offsetX);//x좌표 반환
// }

// first.addEventListener('click',handleClick)

//throttle : 특정 시간마다 함수를 실행해라.
//debounce : 사용자가 뭔가를 하고 있을땐 실행하지 않다가 멈추면 함수 실행.
// => 함수를 덜 불러와서 부하가 덜 걸리도록 하기 위함.

function handleClick(e) {
  let x = e.offsetX;
  let y = e.offsetY;

  ball.style.transform = `translate(${x}px,${y}px)`;
}

// first.addEventListener('click',handleClick);

const ground = getNode('.ground');

ground.addEventListener('click', handleClick);
