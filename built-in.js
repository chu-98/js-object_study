// Math 라는 객체를 만들어주었다.
console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random()); // 객체를 포함한 함수는 Method 라고 부른다.
console.log("Math.floor(3.9)", Math.floor(3.9));

// 객체를 만들어보기
var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};
console.log("MyMath.PI", MyMath.PI); // 나도 객체를 만들었다!
console.log("MyMath.random()", Math.random());
console.log("MyMath.floor(3.9)", Math.floor(3.9));
