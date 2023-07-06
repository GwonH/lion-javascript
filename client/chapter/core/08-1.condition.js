/* ---------------- */
/* Condition        */
/* ---------------- */

// "0"," " 바로 형변환 일어나서 값이 있다~=> true. "" =>false
// if("0") {
//   console.log('이 조건은 항상 실행됩니다.');
// }else{
//   console.log('조건에 부합하지 않습니다.');
// }

// 소문자면 다 OK되도록. 받은 값을 다 소문자 처리하는 String의 능력! toLowerCase
// let question = prompt('자바스크립트의 `공식` 이름은 무엇일까요?', '').toLowerCase();
// // ecmascript로 비교하면 소문자로 다 비교
// if (question === 'ECMAScript') {
//   alert('정답입니다!')
// } else{
//   alert('그것도 모르셨나요? 정답은 ECMAScript입니다!')
// };


// let result = prompt('숫자 하나 줘보슈','');

// if (result > 0) {
//   console.log(1);
// } else if(result < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }


// a랑 b값 없어서 에러는 나겠지만~ 이런식으로 쓴다.
// let result = (a + b < 4) ? "미만" :"이상";


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// let didWatchMovie = 'yes';

// // 영화 볼거니?
// let goingToWatchMovie = 'no';


// // if 문(statement)
// if (didWatchMovie  === 'yes'){
//   console.log('뭐 봄?');
// }else if (goingToWatchMovie === 'yes'){
//   console.log('보러가주시술?');
// } else {
//   console.log('ㅇㅋ...');
// }


// 중첩 조건으로 만들어보자!
// 값을 계속 if 조건에서 받아가면서 문자열을 비교하면 귀찮으니까! confirm으로 불린값을 받음.
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?','');

// 영화 볼거니?
let goingToWatchMovie = 'yes';

if(!didWatchMovie) {
  
  let goingToWatchMovie = confirm('볼겨?')
  if (goingToWatchMovie) {
    let whoWith = prompt('누구랑 볼라고?','');

    if (whoWith === '친구') {
    console.log('그려');
    }else if(whoWith === '가족') {
      console.log('화목하네');
    }else {
      console.log('즐감햐');
    }
  }

} else {
  let alone = confirm('혼자 봄?');
  if(alone) {
    let didCry = confirm('엉엉 울었니...?');
    
    if(didCry) {
      console.log('너.. 울보구나?');
    }else {
      console.log('너 T야?');
    }
  }
}








// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식