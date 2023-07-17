// 호랑이 납치

// closure = 폐쇄
// 

function earth(){
  
  let water = true;
  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }
  let gravity = 10;
  
  return function (value){
    // console.log( apple );          //return (value) => {g~} 줄이기 가능.
    gravity = value;                //외계인 입장에서 써먹는게 호랑이든 사자든 이름 알게뭐임! 그래서 이름 없이 쓸수있다~!
    
  }

  // return tiger

}

const ufo = earth()

// ufo가 클로저. 
ufo(5)

// ufo의 매개변수는 earth()의 매개변수를 거치지 않음

//그럼 클로저를 통해 earth() 안의 정보를 가져오고 싶을 때는
// 내부 function에 적어줘야만 가져올 수 있음.
// 외부에서 water, apple은 접근 못함.
// 그럼 보통 외부 function에는  변수를 지정하고 내부function에는 실행시킬내용을 지정하면되는거임.




const button = document.querySelector('button');


// let isClicked = true; // 전역 오염 ...

function handleClick(){
  
  let isClicked = true; 

  return function (){
    if(isClicked){
      document.body.style.backgroundColor = 'orange';
    }else{
      document.body.style.backgroundColor = 'transparent';
    }
  
    isClicked = !isClicked;
  }
}


button.addEventListener('click',handleClick())





function useState(initValue){
  
  let value = initValue

  function read(){
    return value
  }

  function write(overValue){
    value = overValue
  }

  return [read,write]
}


// setClick()
// const [click,setClick] = useState(true);

