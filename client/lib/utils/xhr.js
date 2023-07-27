/* 

[readystate] 현재 상태가 어떻게 바뀌었다는 걸 체크

0: uninitialized 
1: loading
2: loaded
3: interacive 
4: complete

*/




// const xhr = new XMLHttpRequest(); //xhr 객체 생성

// console.log( xhr.readyState ); //0 => 값이 안 들어옴. 초기화 상태

// xhr.open('GET','https://jsonplaceholder.typicode.com/users') //GET 통신을 할 거고, 그 주소는 이 거롤 하겠다~


// console.log( xhr.readyState ); //1 => loading




//2~4는 onreadystatechange안에서 확인 가능.
// onreadystatechange, readyState(현재상태), status

//구조 분해 할당 때린 거
// xhr.addEventListener('readystatechange',()=>{
//     const {status,readyState,response} = xhr;
  
//     if(status >= 200 && status < 400){
  
//       if(readyState === 4){
//         console.log(JSON.parse(response));
//     } 
//   }else {
//       console.log('실패');
//     }
  
//   })

// xhr.addEventListener('readystatechange',()=>{
//   // console.log( xhr.status ); 이걸로 조건을 건다.
//   if(xhr.status >= 200 && xhr.status < 400){

//     if(xhr.readyState === 4){
//       console.log(xhr.response); //thunderClient에서 GET 방식으로 가져온 것처럼 가져옴.
//     }
//   } else {
//     console.log('실패');
//   }
//   // console.log(xhr.readyState); //2 3 4 
// })

// xhr.send(); //전송. 


/* callback */
function xhr(options){

  // const {method, url, onSuccess, onFail, body, headers} = options; //구조분해할당. rename 과 기본값 설정이 가능. 아래처럼. 
  const {
    method = 'GET', 
    url = '', 
    onSuccess = null, 
    onFail = null, 
    body = null, 
    headers = {
      'Content-Type':'application.json',
      'Access-Control-Allow-Origin':'*'
    }
  } = options;
  const xhr = new XMLHttpRequest();
  xhr.open(method,url)
  

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value) //POST 내가 보내는 형태를 알려줌.
    
  })
  
  xhr.addEventListener('readystatechange',()=>{
    const {status,readyState,response} = xhr;
  
    if(status >= 200 && status < 400){
  
      if(readyState === 4){
        onSuccess(JSON.parse(response)); //이거 내보낼때 callback. return은 여기 구문 끝날때까지 기다려주지 않아서 내보낼수 없음.
    } 
  }else {
      onFail('실패');
    }
  
  })
  xhr.send(JSON.stringify(body)); //그냥 body는 {name:'tiger'}객체니까 문자화를 해야하기때문에 이렇게 보냄
}


xhr.get = (url,onSuccess,onFail)=>{
  xhr({
    method:'POST',
    url, // url:url 원래 이런식인데 shorted property로 쓴 것.
    onSuccess,
    onFail
  })

}

console.dir(xhr) //object에 method를 정의한 것처럼 들어감. js는 함수도 객체라서 이런 짓거리가 가능하다..




xhr.get(
  'https://jsonplaceholder.typicode.com/users',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
// xhr.post()
// xhr.put()
// xhr.delete()



/**
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와 통신 실패시 실행될 콜백 함수
 * @retrun server data
 */



// put 통신


