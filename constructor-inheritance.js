function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second);
  this.third = third;
}

//PersonPlus.prototype.__proto__ = Person.prototype;
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
};

var kim = new PersonPlus("kim", 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
console.log("kim.constructor", kim.constructor);

// class에서 상속을 하기 위한 키워드는? extends
// class에서 부모의 속성과 함수를 호출하기 위해 사용해야하는 키워드는? super
// JS에서는 class뿐만 아니라 객체간에도 상속을 정의할 수 있다.
// 객체에서 상속을 정의하는 것을 prototype link라고 한다.
// prototype link를 정의하기 위해 '__proto__'를 사용하면 된다.
// 객체를 상속받기 위한 코드 : var subObj = Object(superObj);
// 30
// JS에서 객체는 클래스 또는 객체에 종속될 수도 있지만, 독립적인 개체가 될 수도 있다.
// call()은 함수를 호출할 때 this값을 바꾸기 위한 함수이다.
// bind()는 함수에 this를 고정하기 위한 함수이다.
// 20
// sum.call(kim, '>>');

// Prototype Link = __proto__ = 객체가 가지고 있지 않은 함수나 값을 찾으려고 할때 찾아보는 속성의 이름
// 함수를 new 키워드를 이용하여 객체로 만들 때 같이 생성되는 객체로,
// 동일한 함수를 이용하여 생성된 객체가 모두 공유하여 사용하는 객체 : prototype
// sum() 함수는 kim과 lee 객체에 각각 저장된다.
// function PersonPlus(name, age){Person.call(this, name); this.age = age;}
// PersonPlus.prototype.__proto__ = Person.prototype;
// PersonPlus.prototype.__proto__ = Object.create(Person.prototype);
// new와 함께 사용하면 다른 객체를 만들어준다.
// call 함수와 함께 사용하면 다른 객체를 위해 동작하는 함수가 된다.
// bind 함수와 함께 사용하면 특정 객체를 위해서만 동작하는 함수를 무한히 복제할 수 있다.
