var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
// '나는' = this = 메소드가 속해있는 객체를 가리키도록 약속된 특수한 예약어
console.log("kim.sum(kim.first, kim.second)", kim.sum());
