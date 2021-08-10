class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "prototype : " + (this.first + this.second);
  }
}

// Person 이라는 함수가 만들어질 때마다 아래 함수가 실행되지 않으니 성능 저하를 막을 수 있고
// 여러 개의 객체가 하나의 함수를 같이 쓰니 메모리를 절약할 수 있게 된다.
// 먼저 자신의 객체가 있는 함수가 있는지 보고 없다면 prototype을 찾아서 사용한다.
// Person.prototype.sum = function () {
//   return this.first + this.second;
// };

// var kim = new Person("kim", 10, 20);
// var lee = new Person("lee", 10, 10);
// console.log("kim.sum()", kim.sum());
// console.log("lee.sum()", lee.sum());

// 기존에 있던 class를 가져오고 상속을 통해서 따로 class를 만들 수 있어서 코드가 중복되지 않는다.
class PersonPlus extends Person {
  avg() {
    return (this.first + this.second) / 2;
  }
}
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

// super를 통해서 class 안의 constructor 중복을 방지할 수가 있다.
