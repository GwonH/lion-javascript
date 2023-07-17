/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우
// 그냥 객체 만든 것! 단점 = > 새로 상속해줘야함.
// 생성자함수는 계속 찍어내기 가능. 단점 => 실수로 함수실행으로 일반함수처럼 쓰이면 객체 생성이 안됨. 


// const animal = {
//   legs: 4,
//   tail: true,
//   stomach:[],
//   set eat(food){                    //이게 setter 근데 set 붙이면 메서드지만 animal.eat = '사료' 이게가능
//     this.stomach.push(food);
//   },
//   get eat(){
//     return this.stomach;       //이게 getter  get, set 표기하면 이름 똑같아도 됨!
//   }
// }

// // animal.eat = '사료' 로 set으로 넣고, animal.eat까지만 쓰면 가져옴! 
// // get, set은 열거가능한 값이 아님. for~in문 못 돌드라고.

// const tiger = {
//   pattern: '호랑이무늬',
//   prey:'',
//   hunt(target){
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`
//   }
// }

// // animal의 능력을 tiger에게 상속시키기.

// tiger.__proto__ = animal;
// // 이거랑 tirger 안에 __proto__:animal로 넣는 거랑 똑같음.


// const fox = {
//   prey:'',

// }

// fox.__proto__ = animal;









// 생성자 함수 


// function Button (name) {    //첫머리 대문자 생성자함수!
//   this.name = name;
// }


// const a = button() //얘랑 b랑 다르다~~ 일반함수다~~ 
// const b = new Button('버튼') //생성자함수





// function User (name,age,email) {
//   this.name = name;
//   this.age = age;
//   this.email = email
// }

// function button(){

// }


// // const a = button()

// const person1 = new User('선범',32,'tiger@naver.com');





// 생성자 함수 
// const str = new String('a');
// 객체를 만드는 것!


function Animal(){
  this.stomach = [];
  this.legs = 4;
  this.tail = true,
  this.eat = function (food){         //함수라 get, set 못 씀.
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}


const tiger = new Animal();

tiger.pattern = '호랑이무늬';
tiger.hunt = function(target){
  this.prey = target,
  console.log(`${target}에게 슬금슬금... 크크큭.`);
}




const cat = new Animal();

cat.say = () => '니야아아아옹';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();

// 주의할 거 const horse = Animal();이렇게 쓰는 거. 에러도 안 나고... 