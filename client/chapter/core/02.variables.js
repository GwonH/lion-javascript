/* ------------------ */
/* Variables          */
/* ------------------ */

// 변수 가지고 놀기
let admin;
let name;
// 줄그은건 JS 예약어라서 지양.
//  참조에 의한 복사.
name = 'Ham';
admin = name;

name = 'ham';
// Ham이 나옴.
// console.log(admin);

// 올바른 변수 선언
const ourPlanetName = 'Earth';
const currentOnlineUserName = 'Ham';


// cosnt BIRTHDAY = ~ 안 변 하니까 찐상수!
// 런타임이 계산이 이루어지고 값이 할당되니까 소문자로
// const age = somecode(BIRTHDAY);




/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let eachProductCostCalc;
let calcProductPriceQuantity;

// - 구매 제품 가격의 총 합
let totalCost;
let totalProductPrice;

// - 1년 기준 일(day)자 수
const ONEYEARDAYS = 365;
const DAYS_PER_YEAR = 365;

// - 구매 결제 여부(했어 안했어 / 있어 없어 => 앞에 is로 붙임. 관례.)
let payment;
let isPayment = false;
// 가지고 있어?! 
let hasClassName = true;


// - 구매 결제 내역
// const paymentInfo;
let paymentHistory;


// - 브랜드 접두사
// const brandPrefix;
const BRAND_PREFIX = 'NIKE';


// - 오늘의 운세 
let todaysLuck;
let fortuneOfToday;

// - 상품 정보
// const ProductInfo;
const ProductInformation = '';

/* variables ----------------------------------------------------------- */



/* constant variables -------------------------------------------------- */


// redux, recil, ajax 이런 상태관리도구쓸때
// panding 아무것도 안함
// loading 로딩중, 요청 대기
// fulfilled, resolved 응답 성공
// rejected 실패

// const PADING = 'api/panding';
// const LOADING = 'api/loading';
// const FULFILLED = 'api/fulfilled';
// 이런식으로 찐상수 정의해놓고 쓰는 경우가 많다.
