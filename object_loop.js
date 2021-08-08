var memberArray = ["egoing", "graphittie", "leezche"];

console.group("array loop");
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("array loop");

var memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezche",
};

console.group("object loop");
for (var name in memberObject) {
  // (현재 원소의 이름이 들어갈 변수) in (객체)
  // 객체에 있는 원소의 개수만큼 중괄호가 실행됩니다.
  console.log(name, memberObject[name]);
}
console.groupEnd("object loop");
