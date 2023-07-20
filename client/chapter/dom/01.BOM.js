/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

// 구조분해 할당의 장점 : 바로 변수처럼 뽑아서 쓸 수 있다. 
const { alert, confirm, prompt, setTimeout, setInterval } = window;


// 코드의 흐름을 강제로 제어할수 있는 기능이 있다. 
const timer = setTimeout(()=> {
  console.log('몇초 뒤에 해당 코드가 작동합니다.');
},3000)

console.log(3);

// 타이머를 제거.
clearTimeout(timer)

//callback, debounce


const cancelInterval = setInterval(()=>{
  console.log('이 코드는 1초마다 실행되는 코드입니다');
},1000)

clearInterval(cancelInterval)








/* Location 객체 --------------------------------------------------------- */
// 내 서버에 맞게 포트 번호 설정
// http://localhost:5500/index.html?type=listing&page=2#title

// console에 href쓰면 저 주소 뜸.

// http: 프로토콜
// http://localhost 호스트
// http://localhost:8000 포트넘버  네트워크 개발자의 영역. 정해준 거 쓰면 됨.
// 그냥 hash 쓰면 값을 가져오는 거고 location.hash = '#~~'이렇게 할당할수도.
// http://localhost:5500/index.html 경로명
// http://localhost:5500/index.html?type=listing&page=2 검색
// http://localhost:5500/index.html?type=listing&page=2#title 해시

// location.replace('https:~') 뒤로가기 x
// location.href = 'https:~' 되돌아가기 o
// reload 새로고침



// 구조분해로 변수처럼 바로바로 쓸수있는거지 원래는 window.location.host이런식으로 찍어봐야됨.
const { href, protocol, host, port, search, hash, replace, reload } = location;
// window안의 location이라는 객체가 가지고 있는 method


const urlParams = new URLSearchParams(location.search);

for (const value of urlParams){
  console.log(value);
}


// for (const [key, value] of urlParams) {
//   console.log(`${key}:${value}`);
// }


/* Navigator 객체 -------------------------------------------------------- */

// platform : 브라우저가 실행되는 플랫폼 정보를 반환
// userAgent : 브라우저와 운영체제 정보를 반환
// language : 브라우저에서 사용되는 언어를 반환
// onLine : 브라우저가 온라인인지 여부를 반환
// geolocation

const { platform, userAgent, language, onLine, geolocation } = navigator;


// 있으면 몇번째인지, 값 없으면 -1 반환
// console.log(navigator.userAgent.toLowerCase().indexOf('chrome'));

// 브라우저 어떤 건지 알려주는 유틸함수 
function browserName() {
  const agent = userAgent.toLowerCase();
  let browserName;
  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS edge';
      break;
    case agent.indexOf('opr') > -1:
      browserName = 'Opera';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('trident') > -1:
      browserName = '🤬IE ?';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Mozilla Firefox';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;

    default:
      browserName = 'other';
      break;
  }
  return browserName;
}

console.log(browserName());


// 권한 허용하면 위도 경도 반환
geolocation.getCurrentPosition((data)=>{
  console.log(data.coords.latitude);
  console.log(data.coords.longitude);
})


function getLocationPosition(){

  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((data)=>{

      if(!data){
        reject({message:'위치 서비스를 활성화 해주세요.'})
      }else{
        const {latitude,longitude} = data.coords;
        console.log(2);
        resolve({latitude,longitude})
      }
    })
  })
}





/* Screen 객체 ----------------------------------------------------------- */
// height : 모니터 사이즈!
// availHeight : 브라우저 크기
// innerHeight : 브라우저 해상도 크기 === css의 100vh랑 같음! 이걸 많이 씀.
// orientation : primary 정방향 secondary 역방향.
// 모니터방향 가로 landscape 세로 portrait 



const { width, height, availWidth, availHeight, orientation } = screen;






/* History 객체 ---------------------------------------------------------- */


// 방문 내역 관리

const { back, forward, go, length, pushState, replaceState } = history;

// 카메라 사용 요청
navigator.mediaDevices.getUserMedia({video:true})

//ssr
//csr 