import { getNode } from "../dom/getNode.js"

// memoization

const cache = {}

export const memo = (key, callback)=> {

  if(!callback) return cache[key]; //getter. key를 가지고 있는 value를 return
  
  if(cache[key]){
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key]
  }
  cache[key] = callback(); //함수 본문을 전달받아서 함수 안에서 ()실행! 콜백함수.

  console.log(cache);
}

memo('cube',()=> getNode('#cube')) //setter
memo('cube') //div#cube 

// 객체를 만들어서 key:value 쌍으로 저장

console.log(memo('cube'));