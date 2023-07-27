/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

import { refError } from "../error/refError.js";

/* callback --------------------------------------------- */

// 객체 구조 분해 할당 

export function xhr({ 
  method = 'GET', 
  url = '', 
  onSuccess = null, 
  onFail = null, 
  body = null, 
  headers = {
  'Content-Type':'application.json',
  'Access-Control-Allow-Origin':'*'
  } 
} = {}) {

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.addEventListener('readystatechange', () => { //readystatechange method로 check
    const { status, readyState, response } = xhr; //구조분해할당
    if (readyState === 4) { //마지막 complete 됐을 때 한 번만 체크하려고 
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body)); //35번째 줄에 가도 됨. 보내기만 하면 되니까 위치는 상관X
}


// method, url, onSuccess, onFail, body, headers

// xhr({
//   method:'PUT',
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result){
//     console.log( result );
//   },
//   onFail(err){
//     console.log( err );
//   },
//   body:{
//     name:'tiger'
//   },
// });


// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자 
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자 !! 


/**
 * 
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수 
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url,onSuccess,onFail)=>{
  xhr({
    url,
    onSuccess,
    onFail
  })
}


xhr.post = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'POST',
    url,
    body,
    onSuccess,
    onFail
  })
}


xhr.put = (url,body,onSuccess,onFail)=>{
  xhr({
    method:'PUT',
    url,
    body,
    onSuccess,
    onFail
  })
}

xhr.delete = (url,onSuccess,onFail)=>{
  xhr({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}



  /* promise API -------------------------- */
  
  const defaultOptions = {
    method:'GET',
    url: '',
    body:null,
    errorMessage:'서버와의 통신이 원활하지 않습니다.',
    headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
    }
  }
  
  
  export function xhrPromise(options){
  
    // mixin 
    
    // const config = {...defaultOptions,...options}
    const {method,url,body,errorMessage,headers} = Object.assign({},defaultOptions,options)//명시적인 방법도 있다. {}빈객체 꼭 넣어야 원형 훼손 안됨.
    
    if(!url) refError('서버 url은 필수값입니다.');
    const xhr = new XMLHttpRequest();
    
    xhr.open(method,url);
  
  
    Object.entries(headers).forEach(([key,value])=>{
      xhr.setRequestHeader(key,value);
    })
  
    
    xhr.send(JSON.stringify(body))
  
    return new Promise((resolve, reject) => {
      xhr.addEventListener('readystatechange',()=>{
        if(xhr.readyState === 4){
          if(xhr.status >= 200 && xhr.status < 400){
            resolve(JSON.parse(xhr.response))
          }else{
            reject({message:errorMessage})
          }
        }
      })
    })
  }
  
  xhrPromise.get = (url)=>{
    return xhrPromise({ url })
  }
  
  xhrPromise.post = (url,body)=>{
    return xhrPromise({
      url,
      body,
      method:'POST'
    })
  }
  
  xhrPromise.delete = (url)=>{
    return xhrPromise({
      url,
      method:'DELETE'
    })
  }
  
  
  xhrPromise.put = (url,body)=>{
    return xhrPromise({
      url,
      body,
      method:'PUT'
    })
  }