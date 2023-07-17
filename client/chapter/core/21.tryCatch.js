/* ---------------------------------------------------------------------- */
/* Try Catch                                                              */
/* ---------------------------------------------------------------------- */

// 왜 필요한가. 
// 바로 실행되는 게 아닌, 사용자가 어떤 인터랙션(행동)을 했을 때 코드 로직이 실행됨.
// 에러가 생기면 그 밑의 코드는 싹 무시되고 페이지가 망가짐. 

// try안에 코드 실행하고 아무일도 없으면 그냥 넘어가고 생기면 catch문 안으로 들어감. 
try{
  let a = 5;
  // let b = 10;
  a + b;

  // let value;
  // if(!value){
  //   throw new TypeError('타입이 유요하지않어')
  // }

}catch(e){
  console.log(e);
  console.log(e.name);
  console.log(e.message);
  console.log(e.stack);

}


// try ... catch 동작 알고리즘
// 1. try { ... } 코드 실행
// 2-1. 오류가 발생하지 않은 경우, 내부 코드가 실행 됨 (catch 블록 무시)
// 2-2. 오류가 발생했다면, try 코드 중단 catch 블록으로 흐름이 넘어 감


// JavaScript 엔진은 코드를 읽고 난 후 코드를 실행
// 그러므로 try ... catch 문은 유효한 코드에서만 오류를 처리할 수 있음
// 이러한 오류 유형을 "런타임 오류" 또는 "예외(exception)"라고 부름
// 그래서 try catch를 예외 처리라고 말하기도 함. 

// try ... catch는 동기적으로 동작하므로 비동기 처리 과정 내부에서 사용해야 함


// 오류 객체(Error Object)
// - name, message, stack 정보 제공


// 직접 오류 객체 생성
// throw 연산자는 오류 객체를 생성할 때 사용 됨
// 생성 가능한 오류 객체
// - Error
// - TypeError
// - SyntaxError
// - ReferenceError

// throw new Error('큰일남')

// finally 절
// 오류가 있던, 없던 상관없이 항상 실행
// try ... catch를 빠져나가는 어떠한 경우에도 항상 실행



let data = JSON.stringify({
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
})

// console.log(typeof data);

try{
  const user = JSON.parse(data) //서버에서 넘어온 결과값을 객체로 변경했다
  // console.log(user.value); //undefined 
  if(!user.value){
    throw new ReferenceError('해당 키 값은 존재하지 않습니다.')
  }
}catch(e){
  
  console.log(e); //에러 메세지 넘어온 거 확인
  console.log('JSON Error : ' + e.message); //우리가 정확히 에러 제시할 수 있음.
  // confirm('해당 데이터를 불러오는데 실패했습니다. 다시 시도할까요?')
  document.body.innerHTML = `해당 데이터를 불러오는데 실패했습니다.`
}