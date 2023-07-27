/* global gsap */

import { 
  getNode as $,
  changeColor,
  insertLast, 
  renderUserCard, 
  tiger,
  delayP,
  renderSpinner,
  renderEmptyCard,
  getNode,
  attr,
  clearContents
} from "./lib/index.js";


// console.log( xhrPromise );
// const data = tiger.get('https://jsonplaceholder.typicode.com/users')
// console.log( data );



// const URL = 'https://jsonplaceholder.typicode.com/users';

// fetch(URL).then((result)=>{

//   result
//   return result.json()
// })
// .then((result)=>{
//   console.log(result);
// })


// [phase - 1]
// 1. tiger함수 사용해서 user data 가져오기
// 2. 함수 안으로 넣기
// 3. userData 렌더링
//  - html template을 만든다.
//  - user data를 넘겨주기
//  - inserLast 이용
// 4. 함수 분리하기(생성, 렌더)


// [phase - 2]
// 에러가 발생 했을 때
// empty svg를 생성하고 렌더링 해주세요
// 함수 분리

// [phase - 3]
// 1. json-server 구성
// 2. jata 설계
// 3. get, delete 통신 localhost
// delete => 리랜더링(clear,render)





const userCardInner = $('.user-card-inner');
const emptyUserCard = $('.empty-user-card')
async function renderUserList(){
  renderSpinner(userCardInner)
  try{
    await delayP({timeout:1000}) //조금 렌더링 늦게 되는 효과. 
    
    //부드럽게 사라지게(실제로는 사라지지 않음. 계속 돌아가고 있음. 애니메이션 끝나면 아예 제거되도록 해야됨.)
    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        // this.targets[0].remove() this를 못 찾길래 
        $('.loadingSpinner').remove(); //사라진다!
      }
    })

    // 로딩되면 로딩 이미지 삭제 (돔 자체 제거 => 팍 사라짐)
    // $('.loadingSpinner').remove();

    const response = await tiger.get('http://localhost:3000/users') //promise 객체 뚝. 
    // console.log(response); data에 내가 원하는 정보가 들어있구나
    // console.log(response.data);
    
    const userData = response.data;
    
    userData.forEach((item)=>renderUserCard(userCardInner,item))
    // console.log( item ); //객체네. item.name 이런 식으로 접근이 가능!   
      
  
    changeColor('.user-card')
  
    gsap.to('.user-card',{
      x:0, //원래 위치로
      opacity:1,
      stagger:0.1 //순차적으로 작동되게
    })

  }
  catch(err){
    console.log(err);
    renderEmptyCard(userCardInner)
  }
}


renderUserList() //삭제한후에 화면에 다시 뿌려주려고


//버튼을 클릭 했을 때 해당 article의 id값을 가져옴.
// - 이벤트 위임
// - button 선택하기 -> 클릭한 대상의 가장 가까운... method
// - attr(), datekset


function handleDelete(e){

  const button = e.target.closest('button');
  const article = e.target.closest('article') //여기 프로퍼티로 들어가있는 id값을 가져오려고 부름. 해당 article만 지우기 위해서.

  if(!article || !button) return; //button아닌 곳 눌러서도 삭제되면 안되니까 !article, !button 없으면 함수 실행하지 마!
  

  // console.log(article.dataset);
  // console.log(article.dataset.index);
  const id = attr(article,'data-index').slice(5);
  
  tiger.delete(`http://localhost:3000/users/${id}`)
  .then(()=>{
    //컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  })
}


userCardInner.addEventListener('click',handleDelete)

//Delete 통신 잘 됐나 확인 => Network tab에서 확인. 우리 권한은 없으니까 실제로 지워지진 않음. status 200으로 통신 성공만 확인. 
//server 만들어서 확인 해보자.