// (강의) 타입 확정하기 Narrowing & Assertion
function 내함수(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
내함수(123);
function 내함수1(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    else {
    }
}
// 방법1) narrowing  -if else 를 통해서 타입을 명확히 지정해줄수 있다.
//  if else 문을 사용할때 else문을 설정하지않으면 오류가나올수도 있다 
// 방법2) narrowing - assertion문법 (타입 덮어쓰기 )
//  array[0] = x as number; 
//  x를 number타입으로 덮어 씌어주는것 
//  as문법의 용도 -->
// 1. Narrowing할때 쓰는것 맞음 
//  타입을 a 에서 b로 변경 할때 사용하는것은아님 
// 예시 
var 이름 = 'kim';
// 이름 as number; 이런식으로 a에서 b로하는것이아님 
// 2. 무슨타입이 들어올지 100% 확실할때 쓰는것
// 숙제 1 array 자료형에 문자 타입이 섞여있어서 숫자로 만드는 함수 만들기
function 변환기(arr) {
    var done = [];
    arr.forEach(function (a) {
        if (typeof a === "string") {
            done.push(parseInt(a));
        }
        else {
            done.push(a);
        }
    });
    return done;
}
console.log(변환기([123, '45']));
// 숙제 2 
function 과목뽑기(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        "없음";
    }
}
var 동물 = 123;
var 사람 = { name: 'kim', age: 20 };
// 규칙 ) 보통 타입변수로 만들때는 대문자로 설정 Animal 
// ts에서는 const로 변수설정한 객체의 값을 못바꾸도록 lock을 걸수있음
//  자바스크립트일때----
var girl = {
    name: '가나다'
};
girl.name = "마바사";
var Girl1 = {
    name: '가나다'
};
var hi = "hi";
var position = { x: 123, y: 111 };
var 테스트용변수 = {
    color: "red",
    size: 123,
    position1: [1, 2, 3, 4]
};
var 테스트용변수3 = { name: '임재원', phone: 41465622, email: "nemo0824" };
var 테스트용변수4 = { name: '임재원', phone: 41465622, email: "nemo0824", adult: true };
