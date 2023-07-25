/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* callback --------------------------------------------- */

function xhr({ //구조분해할당 기본값 설정
  method = 'GET', 
  url = '', 
  onSuccess = null, 
  onFail = null, 
  body = null, 
  headers = {
    'Content-Type':'application.json',
    'Access-Control-Allow-Origin':'*'
  }
} = {}) { //전달받은 객체가 없을때의 기본값 설정

  
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value);
  })

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));

}


// method, url, onSuccess, onFail, body, headers
xhr({ //구조분해할당 기본값 설정으로 지워진 options
  url:'https://jsonplaceholder.typicode.com/users',
  onSuccess:()=>{},
  onFail:()=>{},
  body:{
    name:'tiger'
  }
});







