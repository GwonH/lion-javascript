//callback함수 => 늦춰서 실행하도록.

import { getNode } from "../dom/getNode.js";


function delay(callback,timeout=1000){
  setTimeout(callback,timeout);
}
const first = getNode('.first');
const second = getNode('.second');


// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)'
// first.style.top = '0'

// 콜백 지옥
// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)'
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0'
//       second.style.top = '100px'
//     })
//   })
// })

// 쉽게 복잡해지니까 애니메이션은 gsap을 이용한다



//delayP함수를 실행하면 리턴되는 값이 promise 객체임.
function delayP(shouldReject){

  return new Promise((resolve, reject) => {

    if(!shouldReject){
      resolve('성공!')  
    }else{
      reject('실패!')
    }
    // resolve({name:'tiger',age:33})
    // reject({message:'알 수 없는 오류가 발생했습니다.'})
  }) //resolve, reject 매개변수 이름은 변경 가능하지만 순서를 바꿀수는 없음. 
}
// console.log(delayP());

// 객체가 튀어나왔으니까 then 쓸수있다
// delayP()
// // .then((result)=>{ 
// .then((name,age)=>{ 
//   console.log(name);
// },
// ({message})=>{
//   console.log(message);
// })

delayP(false)
.then((res)=>{
  console.log(res);
})

// delayP()
// .then(
//   ({name,age})=>{
//     console.log( name );
//   }
// )
// .catch((err)=>{
//   console.log( err );
// })