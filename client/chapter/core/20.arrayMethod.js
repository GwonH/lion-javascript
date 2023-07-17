/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// 가장 중요한 것 : map, filter, reduce


// Array.isArray
// 진짜 배열이 맞는지 체크하는 method

console.log(Array.isArray([]));
// true

Object.prototype.toString()
// 진짜 객체가 가지고 있는 toString => 내 진짜 타입이 뭔지 완벽하게 체크 가능.
// 던지는 것들을 다 문자로 반환하는... 


Object.prototype.toString.call([])

console.log(Object.prototype.toString.call([]));
// [object Array] 
// 우리가 필요한 결과값은 Array
console.log(Object.prototype.toString.call([]).slice(8,-1).toLowerCase());
// array


console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(Math));



function isArray(data){
  Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}
// typeof 보다 정확하게 체크할수 있는 util function

// 화살표함수로 
// const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'

const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}


console.log(isNull(null));

console.log(isArray([]));



const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]











/* 요소 순환 ---------------------------- */

// forEach

// 안에 callback 함수
// 중요! forEach : 값을 반환하지 않음. 일처리만 하고 끝.
arr.forEach((item) => {
  console.log(item);
})
// forEach 좋은 점은 index 받을 수 있음
// arr.forEach((item,index) => {
//   console.log(item,index);
// })


// 객체로 나오니까 객체에 접근할 수 있는 쩜 연산자로 접근 가능
people.forEach((item) => {
  console.log(item.name);
})


// 이벤트 처리 할 때 이 방식이 제일 좋은가 ? => no. 개수가 많아지면 부하가 너무 많이 걸림. 10개 이하일때만~ 가끔..
// 더 좋은 건 이벤트 위임 처리. event delegation.
// 내 부모에게 이벤트 걸고 한 번만 처리한다고.
// const span = document.querySelectorAll('span');

// span.forEach((item) => {
//   item.addEventListener('click', function(){
//     console.log(this);
//   })
// })


/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse 순서 뒤집기
arr.reverse()
console.log(arr);
// 다시 복구
arr.reverse()

// splice : 맥가이버 칼
// 배열의 1번 인덱스부터 2개 제거하겠다!
// arr.splice(1,2)
// 1번부터 2개 지우고 2개 추가하겠다!
// arr.splice(1,2, 'javascript', 'css')
// console.log(arr);


// 1번부터 0개 삭제하고 5, 13을 추가해주세요
arr.splice(1,0,5,13)
console.log(arr);
// sort 정렬
arr.sort()
console.log(arr);
// 유니코드식 정렬? 자릿수별로 비교해서 정렬.

// 이거보다 정교한 정렬 compare function이랑 쓴다. 내부 알고리즘까지 알 필요는 없음.
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환값 == 0 : a와 b의 순서를 바꾸지 않는다.
// 반환값 > 0 : b가 a보다 앞에 있어야 한다. b - a하면 뒤집어짐.
// return 꼭 해주기!
arr.sort((a,b)=> {
  return a - b;
})

console.log(arr);





/* 새로운 배열 반환 ------------------------ */

const user = ['선범','효윤','준석'];

// concat
// 기존 arr라는 배열에 user라는 배열을 합치겠다.
const newArray = arr.concat(user); //담아서 쓸 수 있다!
console.log(newArray);

// spread syntax 방법도 좋지
const newArr = [...arr, ...user,'javascript','css'];
console.log(newArr);


// slice
// 2번인덱스 부터 5번 인덱스 전까지 잘라서 그 부분을 내보내줘. =>3개 반환
const slice = arr.slice(2,5)
console.log(slice);

// toSorted 얘도 compare function이 callback으로 들어감.
const toSorted = arr.toSorted((a,b)=>{
  return a - b;
})
console.log(toSorted);


// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2,0,'js','css','react');
console.log(toSpliced);



// 배열로 반환하는게 중요한 이유 => react에서 list rendering할때 다 배열로 내보냄. 그래서 map과 filter는 꼭 알고 있어야 함!

// map

people.map((item) => {
  console.log(item);
}) //item 찍으면 객체들이 튀어나옴. index로 찍어주기 가능. forEach랑 여기까지 비슷.

const job = people.map((item,index) => {
  return item.profession
})

console.log(job); //profession value들만 뽑아서 새로운 배열을 반환해줌!
// 아~ 내가 원하는 항목들만 새로운 배열로 만들어줄 수 있구나~
// 이걸 어디다가 쓰냐?

document.body.insertAdjacentHTML('beforeend',job);
console.log(job);


const jobb = people.map((item,index) => {
  return `<div>${item.profession}</div>`
})
document.body.insertAdjacentHTML('beforeend',jobb);
console.log(jobb);


// 콤마가 같이 나오더라.. => 반복문을 돌아서 하나하나씩 뿌려주는 생각을 해보자. forEach는 값을 내보내는게 아님 그냥 뿌려주고 끝남. 어디 담아서 쓰는게 아니잖아
job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})


// 어떻게 쓰냐...면!
// const jobb = people.map((item,index)=>{
//   return /* html */`
//     <div class="userCard">
//       <div class="imageField">
//         <img src="${item.imageSrc}" alt="" />
//       </div>
//       <span>이름:${item.name}</span>
//       <span>직업:${item.profession}</span>
//       <span>나이:${item.age}</span>
//     </div>
//   `
// })





/* 요소 포함 여부 확인 ---------------------- */

// indexOf
console.log(arr.indexOf(10)); //10이 몇번인덱스에 있어?

// lastIndexOf
console.log(arr.indexOf(10));

// includes
console.log(arr.includes(1000)); //여부를 찾는 거 ture



/* 요소 찾기 ------------------------------ */

// find : 해당하는 아이템 하나를 반환! 배열반환XXXX
const find = people.find((item)=>{
  return item.id > 1   //id값 내가 원하는 항목만 찾아줘! 더 이상 다 돌지 않음.
})
console.log(find); 



// findIndex
// index값 반환
const findIndex = people.findIndex((item)=>{
  return item.id === 3
})

console.log(findIndex);


/* 요소 걸러내기 --------------------------- */

// filter : 배열을 반환
const filter = people.filter((item)=>{
  return item.id > 2
})

console.log(filter); 

// filter는 필터링으로 모든 걸 다 거쳐서 반환. find는 찾으면 거기서 끝남.




/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc,cur)=>{
  return acc + cur.age
},0)
// 초기값을 설정하지 않으면 문자와숫자의 접합이 일어나서 이상한 값 나옴.

//people을 까뒤집었을때 객체들이 남음 그 중 첫번째를 acc에 할당하게 됨.
//객체[object Object]로 나가고 + 숫자 접함 => [object Object]에 계속 숫자 접합하게 되는 거.



console.log(totalAge);


// reduce로도 태그를 만들 수 있더라~ 초기값 object 안 나오게 하고 문자로 받으려고 ,''씀
const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');
document.body.insertAdjacentHTML('beforeend',template);




// reduceRight

/* string ←→ array 변환 ------------------ */


const str = '봉석 윤진 예나 시연 진만 정아';

// split : 문자 -> 배열
const stringToArray = str.split(' ');

console.log(stringToArray);

// join : 배열 -> 문자
const arrayToString = stringToArray.join('/');
console.log(arrayToString);

console.log(str);




// map 예제 하나 더
// people 자료구조에서 나이만 모아놓은 배열이 필요하다. => 가공처리 - 1 내보내고 싶다.
const newAge = people.map((item) => {
  return item.age - 1;
})

console.log(newAge);