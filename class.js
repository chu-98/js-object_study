// class가 도입되었으니 다른 언어에서도 쉽게 배울 수 있다.
// constructor의 대체재라고 할 수 있는 class
// 자바스크립트는 가장 빠르게 발전하는 언어 중에 하나입니다.
// class는 객체의 초기의 값을 지정하기 위해서 객체가 생성될 때 실행되기로 약속된 함수가 있다.
// 바로 constructor 함수 이다.
class Person {
  // 약속된 이름으로 바꾸면 안됩니다.
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "prototype : " + (this.first + this.second);
  }
}

var kim = new Person("kim", 10, 20);
kim.sum = function () {
  return "this : " + (this.first + this.second);
};
var lee = new Person("lee", 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());
