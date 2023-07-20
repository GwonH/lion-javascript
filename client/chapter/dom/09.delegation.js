/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
// 하나 하나에 다 이벤트를 걸기보다는 큰 부모에게 이벤트를 하나 걸고 나눠주는 형태로.

const container = getNode('.container');

function handleDelegation(e) {
  // console.log(this); 나를 호출한 대상(container)이 호출됨
  // console.log(e.currentTarget); 이벤트가 걸린 대상. container.
  // e.currentTarget === this 일반함수일때.

  // console.log(e.target);//버튼 클릭시 버튼이 나옴! 마우스가 제일 처음 만나는 대상이 target임.
  // console.log('이벤트위임');

  let target = e.target;
  //니가 잡은 대상의 class를 가져와줘.
  // let className = target.getAttribute('class')
  // let className = attr(target,'calss');

  // if(className === 'a'){
  //   console.log('a버튼 클릭했구나?');
  // }
  // if(className === 'b'){
  //   console.log('b버튼 클릭했구나?');
  // }
  // if(className === 'c'){
  //   console.log('c버튼 클릭했구나?');
  // }
  // if(className === 'd'){
  //   console.log('d버튼 클릭했구나?');
  // }

  // data-name에 접근하기

  // console.log(target.dataset.name);target의 dataset에서 name을 검색해줘
  // let dataName = target.dataset.name;
  // let dataName = attr(target,'data-name') 이거랑 위에랑 같음.

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');
  console.log(className);
}

container.addEventListener('click', handleDelegation);

// 부모에게 이벤트를 줘서 그 영역에 전부 이벤트 걸림. 내가 클릭한 대상에만 걸리도록.

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
