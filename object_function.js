var kim = { name: "kim", first: 10, second: 20 };
var lee = { name: "lee", first: 10, second: 10 };
function sum() {
  return this.first + this.second;
}
console.log("sum.call(kim)", sum.call(kim));
console.log("sum.call(lee)", sum.call(lee));
