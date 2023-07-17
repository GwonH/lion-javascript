/* --------------- */
/* For Of Loop     */
/* --------------- */

// iterable = '반복가능한' 요소들~ '이터러블 하다!'
// iterable = String, Array, Array-like(배열같은데~~ 배열은 아니여. 유사배열.)
// 배열 = index, length가 있다. 근데 이게 있어도 배열이 아닌!애들이 있다...

// const arrayLike = {
//   0: 'body',
//   1: 'head',
//   2: 'div',
//   length: 3
// }

// for(let value of arrayLike){
//   console.log(value);
// }

// 객체. 객체는 iterable하지 않아서 for of 못 씀.
// symbol의 iterator 능력 쓰기.
// const arrayLike = {
//   0: 'body',
//   1: 'head',
//   2: 'div',
//   length: 3,
//   [Symbol.iterator]{...}
// }

const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

// for(let value of languages){
//   console.log(value.name);               // console.table(value); 
// }


for(let value of languages){
  const name = value.name;
  
  if(name.includes('Java') && name.length < 5) break;

  console.log(name);
  
}



// for ~ of 문
// - 특정 조건에서 건너띄기
// - 특정 조건에서 중단하기




const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문


// - for ~ of 문으로 객체를 순환시키려고 아래의 것들을 쓴다.
// Object.keys()
// Object.values()
// Object.entries()

// console.log( Object.keys.(randomUser)); //키값만 쫙
// console.log( Object.values.(randomUser)); 
// console.log( Object.entries.(randomUser)); 객체 자체의 열거가능한 속성 key, value를 가진 쌍의 배열을 반환


for(let value of Object.values(randomUser)){
  console.log(value);
}



// - 성능 비교 진단