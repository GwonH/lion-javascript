/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// photos라는 건 없어서. photo라고!
// console.log(portableFan.photos.animate);


// console.log(portableFan.photos?.animate); 이러면 오류 안 남.
// 없는 것의 하위에 접근할때만 에러.

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.



// sync 동기 async 비동기
// 순서대로 실행하는 게 동기 코드



// console.log('첫번째 실행');

// windo의 method setTimeOut()

// 요녀석은 코드의 순서를 무시하고 비동기로 실행됐다!
setTimeout(()=>{

  console.log('두번째 실행.');
},3000)

// console.log('세번째 실행');



// 어따 쓰냐? 애니메이션.  clearInterval로 멈추게 가능. 조건 걸고

// let count = 0;
// setInterval(()=> {
//   console.log(++count);
// },100)


// 멈추기
// const timer = setTimeout(()=>{

//   const button = /* html */`
//     <button type="button">clickMe</button>
//   `

//   document.body.insertAdjacentHTML('beforeend',button);

// },5000)
// clearTimeout(timer)



// 메모리 누수가 심해서 다른탭으로 이동하면 멈추고 다시 돌아오면 계속 실행됨.
// 이거보다 좋은 거! requestAnimationFrame() //재귀






setTimeout(()=>{

  const button = /* html */`
    <button type="button">clickMe</button>
  `

  document.body.insertAdjacentHTML('beforeend',button);

},3000)












const button = document.querySelector('button');

console.log( button );

button?.addEventListener('click',function(){
  this.style.backgroundColor = 'orange';
})

