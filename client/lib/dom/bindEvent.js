
function bindEvent(node,type,handler){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  // clickqwdg 이런 것도 true가 뜨는데 좀 더 정교한 validation 조건을 걸어주는 것도 고민해보자. 지금은 너무 길어진다고 여기서 끊으셨음~!
  if(!(/mouseenter|click|mousemove|mouseout|mouseover/g).test(type)){
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type,handler);
  
  // 함수가 함수를 내보낸다..! => 클로저
  return ()=> node.removeEventListener(type,handler);

}


