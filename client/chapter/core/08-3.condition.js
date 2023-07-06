/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = MORNING;

switch (thisTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

// 한줄로 쓰는 게 더 보기 편함.
// switch (thisTime) {
//   case MORNING:
//     console.log('뉴스 기사 글을 읽는다.');break;
//   case LUNCH:
//     console.log('자주 가는 식당에 가서 식사를 한다.');break;
//   case DINNER:
//     console.log('동네 한바퀴를 조깅한다.');break;
//   case NIGHT:
//     console.log('친구에게 전화를 걸어 수다를 떤다.');break;
//   case LATE_NIGHT:
//   case DAWN:console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');break;
// }

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

if (thisTime == DAWN) {
  console.log('뉴스 기사 글을 읽는다.');
} else if(thisTime == LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
}else if(thisTime == DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
}else if(thisTime == NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if(thisTime == LATE_NIGHT || DAWN){
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}



/* switch vs. if -------------------------------------------------------- */

// 0~6부터 랜덤한 수 체크하고 각 수에 할당된 일~토 출력되게
// 랜덤한 수 생성
// 조건 비교 switch case
// 해당 결과값 출력

// 0~1 사이의 난수 생성. *7 해줘서 0~6.999까지 랜덤생성.
// floor로 내림 처리. 0~6까지 반환.
// const day = ( Math.floor(Math.random() * 7) );

// switch (day) {
//   case 0: console.log('일');break;
//   case 1: console.log('월');break;
//   case 2: console.log('화');break;
//   case 3: console.log('수');break;
//   case 4: console.log('목');break;
//   case 5: console.log('금');break;
//   case 6: console.log('토');break;
// }


// 함수 만들기 -> 쪼개기. 함수는 하나의 기능만을 수행해야함.

const day = ( Math.floor(Math.random() * 7) );
function getDay(dayValue) {
  switch (dayValue) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }
}

// getDay(day);
console.log(getDay(day));
// console.log(getDay(day)); => return 없으면 undefined.


// 랜덤한 값 뽑아내보자 . 함수로!

function getRandom(n) {
 return Math.floor(Math.random() * n);
}

const s = getRandom(7);
// console.log(s);


function sum(a, b){
  return a + b;
}

// console.log(sum(1, 3)); //return 없으면 undefined.


// 요일 출력 함수
// 요일로 주말이냐? 아니냐? isWeekend 함수 만들기

function isWeekend(dayValue) {
  const today = getDay(getRandom(dayValue));
  
  // 방법은 많구나
  return  today.includes('토') ? '토요일' : today.includes('일')? '일요일' : '평일'

  // return today === '토' || today === '일';

  // if(today === '토' || today === '일'){
  //   return true;
  // } else {
  //   return false;
  // }
}


const today = isWeekend(7);
console.log(today);
