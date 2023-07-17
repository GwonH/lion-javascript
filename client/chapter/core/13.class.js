/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.


class Animal{


  legs = 4;
  tail = true;
  stomach = [];           //class field
  // class 정의시 constructor 필수임. 
  constructor(name){      //최초 1회는 무조건 실행
    this.name = name      //this는 tiger!
  }

  set eat(food){                      //이 형태는 함수처럼 쓰지만 쓸때는 개체처럼 쓴다.
                                      //tiger.eat = '생닭' 
    this.stomach.push(food);
  }
  get eat(){
    return this.stomach
  }

}

// const tiger = new Animal('호돌이')


// Animal 확장해서 Tiger 생성.
class Tiger extends Animal {
  constructor(name,pattern){
    super(name)               //super는 부모의 거(name)를 가져다 쓰겠다. 이거 없으면 name 안 나옴.  
    this.pattern = pattern;
  }

  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  attack(){
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`
  }
}

// 호출
const beom = new Tiger('범','호랑이무늬');



class Champion {
  q = '';
  w = '';
  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});
