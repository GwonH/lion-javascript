
function addClass(node, className){

  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두번째 인수는 문자타입이어야 합니다.')
  }

  node.classList.add(className);   //셋팅만 하고 끝날거라서 return 필요X.
}
function removeClass(node, className){

  if(typeof node === 'string') node = getNode(node); //짧아서 한줄

  if(!className){
    node.className = '';
    return
  }
  if(typeof className !== 'string'){
    throw new TypeError('removeClass 함수의 두번째 인수는 문자타입이어야 합니다.')
  }

  node.classList.remove(className);
}




/* CSS ------------------------------------------------ */

function setCss(node,prop,value){

  if(typeof node === 'string') node = getNode(node);
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }
  
  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value;
}

function getCss(node,prop){
  if(typeof node === 'string') node = getNode(node);
  
  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node).getPropertyValue(prop);
}


//css로 합쳐서 만들기
// css('.first','color') getter
// css('.first','color','orange') setter
// 명시적으로 가져오면 정확하게 font-size이런식으로 입력해야 됨
const css = (node,prop,value) => {
  
  return !value ? getCss(node,prop) : setCss(node,prop,value);

}

