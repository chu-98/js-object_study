// 다른 객체의 속성을 바꾸어준다.
var superObj = { superVal: "super" };
// var subObj = { subVal: "sub" };
// subObj.__proto__ = superObj;
var subObj = Object.create(superObj);
console.log("subObj.subVal =>", subObj.subVal);
console.log("subObj.superVal =>", subObj.superVal);
