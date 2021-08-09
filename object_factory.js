function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
  this.sum = function () {
    return this.first + this.second + this.third;
  };
}
// new 라는 constructor를 붙이면 함수가 객체가 된다!
var kim = new Person("kim", 10, 20, 30);
var lee = new Person("lee", 10, 10, 10);

console.log("kim.sum", kim.sum());
console.log("lee.sum", lee.sum());

// 중괄호를 통해 객체를 만들 때마다 계속해서 정의를 해줘야 했었다.
// constructor function을 만들게 되면, 앞에 new를 사용함으로써 실행할 때마다 객체가 양산된다.
// 이에 해당하는 객체가 한꺼번에 바뀌는 폭발적인 효율 증대.
