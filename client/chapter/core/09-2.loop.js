/* -------------------- */
/* Do While Loop        */
/* -------------------- */


// let i = 0;

// do{
//   if( i === 0){
//     console.log('최초실행');
//   }else {
//     console.log(`${i}번째 실행`);
//   }
//   i++;
// }while( i < 10 );




// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = prompt('몇 번 반복?',0);

// do {

//   console.log(repeat);
//   if(repeat < 0 ){
//     console.log('최초실행입니다.');
//     break;
//   }
//   repeat--;
// }while(repeat)




// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정




// let first = document.querySelector('.first');


// console.log(first);

// text, comment, span => DOM에서 가장 작은 단위 '노드'라고 함.
// 각자 TYPE이나 이름이 존재. 'nodeType'

// Node.ELEMENT_NODE (1) => 태그 노드
// 이런식으로 nodeType번호가 있다. Node.ELEMENT_NODE라고 써도 되고 1번이라고 써도 된다~.

// first.nextSibling.nodeType === Node.TEXT_NODE
// first.nextSibling.nodeType === 3 //타입 번호 외워서 비교할 수 있도록. 전부는 아니더라도 자주 쓰는 것들.

// first = first.nextSibling.nextSibling.nextSibling.nextSibling; //이렇게 써야 두번째 span에 접근. 비효율적.
//이걸 아래처럼 반복문을 통해 수행할 수 있다. 

// do {
//   first = first.nextSibling; //text가 나와서 first에 들어감.
// }while(first.nodeType !== document.ELEMENT_NODE); // document의 text_node랑 document.ELEMENT_NODE가 같지않니?  (document.ELEMENT_NODE 대신 숫자 1 써도 됨.)
// console.log(first);
// => 재사용성 X. 휘발휘발~


// 재사용이 가능한 유틸함수!
// function next(node) {
//   do{
//     node = node.nextSibling;
//   }while(node.nodeType !== 1) 

//   return node;
// }

// const second = next(first); 

// console.log(second);



// 이전 요소 선택하는 것 previousSibling


function prev(node) {
  do{
    node = node.previousSibling; //어떤 값을 받을지 몰라서 자동완성이 안됨.
    
  }while(node.nodeType !== 1)

  return node;
}

const first = prev(second);
console.log(first);



