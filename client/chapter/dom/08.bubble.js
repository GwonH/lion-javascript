/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');



section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
})

article.addEventListener('click',(e)=>{
  e.stopPropagation()
  console.log('%c article','color:dodgerblue');
})

// p.addEventListener('click',()=>{
//   console.log('%c p','color:hotpink');
// })
// p 클릭해도 밑에 깔린 애들 다 같이 클릭됨.



p.addEventListener('click',(e)=>{
  e.stopPropagation() //이걸로 p만 선택되게 함. propagation 번식. 번식멈춰!
  console.log('%c p','color:hotpink');
})




/* 캡처링 ----------------------------------------------------------------- */

// ,true 추가하면 거꾸로 찍음. 
// section.addEventListener('click',()=>{
//   console.log('%c section','color:orange');
// },true)




// 모달창에서 버튼 클릭시 그 버튼에 e.stopPropagation 걸어줘야 해당 모달창을 나오게 한 부모의 버튼의 이벤트로부터 분리돼서 동작하도록 할 수 있음.