// (강의) 타입 확정하기 Narrowing & Assertion
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
내함수(123);
function 내함수1(x) {
    var array = [];
    if (typeof x === "number") {
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
var 이름 = "kim";
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
console.log(변환기([123, "45"]));
// 숙제 2
function 과목뽑기(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        ("없음");
    }
}
var 동물 = 123;
var 사람 = { name: "kim", age: 20 };
// 규칙 ) 보통 타입변수로 만들때는 대문자로 설정 Animal
// ts에서는 const로 변수설정한 객체의 값을 못바꾸도록 lock을 걸수있음
//  자바스크립트일때----
var girl = {
    name: "가나다",
};
girl.name = "마바사";
var Girl1 = {
    name: "가나다",
};
var hi = "hi";
var position = { x: 123, y: 111 };
var 테스트용변수 = {
    color: "red",
    size: 123,
    position1: [1, 2, 3, 4],
};
var 테스트용변수3 = {
    name: "임재원",
    phone: 41465622,
    email: "nemo0824",
};
var 테스트용변수4 = {
    name: "임재원",
    phone: 41465622,
    email: "nemo0824",
    adult: true,
};
//(강의) Literal Types --- 변수에 뭐가들어올지 더 엄격하게 관리가능 , 자동완성 가능
var 이름1;
이름1 = 123;
// 매개변수로 무조건 '리터럴만'이 들어올수있음
// reutrn 으로 1 또는 2만 나와야함
function 함수리터럴(a) {
    return 1;
}
function 가위바위보함수(a) {
    return ["보"];
}
// literal type은 const변수의 업그레이드버전.
// as const ---- 1.object value값을 그대로 타입으로 지정해줌 2. object 속성들에게 모두 readonly 붙여줌
var 자료 = {
    name: "kim",
};
function 자료내함수(a) { }
자료내함수(자료.name);
// 객체안에있는 메서드 타입지정
var 회원정보 = {
    name: "Lim",
    age: 29,
    plusOne: function (a) {
        return a + 1;
    },
    ChangeName: function () {
        console.log("changeName입니다");
    },
};
회원정보.plusOne(2);
회원정보.ChangeName();
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
var removeDash = function (a) {
    var result = a.replace(/-/g, "");
    return parseFloat(result);
};
function 만들함수(a, p1, p2) {
    var result = cutZero(a);
    var result1 = removeDash(result);
    console.log(result1);
    return result1;
}
console.log(만들함수("010-1111-2222", cutZero, removeDash));
// type 함수타입1 = (a: string) => string;
// type 함수타입2 = (a: string) => number;
// function 만들함수(a: string, func1: 함수타입1, func2: 함수타입2) {
//   let result = func1(a);
//   let result2 = func2(result);
//   console.log(result2);
// }
만들함수("010-1111-2222", cutZero, removeDash); //1011112222 출력잘됨
function 홍길동(a) {
    if (a) {
        return console.log("안녕하세요" + a);
    }
    else {
        return console.log("이름이없습니다");
    }
}
//숫자 문자 자릿수 세어주는 출력해주는 함수
function 자릿수카운트(a) {
    return a.toString().length;
}
function 자릿수카운트1(a) {
    if (typeof a === "string") {
        return a.length;
    }
    else {
        return a.toString().length;
    }
}
function 결혼확률(수입, 집, 점수) {
    var sum = 0;
    sum = sum + 수입 * 1;
    if (집 === true) {
        sum = sum + 500;
    }
    if (점수 === "상") {
        sum = sum + 100;
    }
    if (sum >= 600) {
        return "결혼가능";
    }
}
function 숫자로변환하는함수(arr) {
    var 이미숫자 = [];
    arr.forEach(function (a) {
        if (typeof a === "string") {
            이미숫자.push(parseFloat(a));
        }
        else {
            이미숫자.push(a);
        }
    });
    return 이미숫자;
}
function 클리닝함수(a) {
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
        if (typeof b === "string") {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
//
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }
function 과목처리기(a) {
    if (typeof a.subject === "string") {
        return a.subject;
    }
    else if (Array.isArray(a.subject)) {
        return a.subject[a.subject.length - 1];
    }
    else {
        ("없음");
    }
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = "KIM";
        this.width = 111;
        this.height = 222;
    }
    Person.prototype.함수 = function (a) {
        console.log("안녕 prototype 연습" + a);
    };
    return Person;
}());
var 사람1 = new Person();
console.log(사람1);
var 사람2 = new Person();
console.log(사람2);
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word("123", 4, 5, 6, "123");
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
function 최댓값() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (a) {
        if (result < a) {
            result = a;
        }
    });
    return result;
}
function destruct(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
destruct({ user: "kim", comment: [1, 2, 3, 4, 5], admin: false });
function destructArr(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
var TestPrivate = /** @class */ (function () {
    function TestPrivate(a) {
        this.familyName = "Lim";
        this.name = this.familyName + a;
    }
    TestPrivate.prototype.changefamilyName = function () {
        this.familyName = "Park";
    };
    return TestPrivate;
}());
var 유저3 = new TestPrivate("재원");
console.log(유저3);
유저3.changefamilyName();
console.log(유저3);
// 유저1.name = "park";
// 유저1.familyName
// private은 클래스 밖에서 바꿀수가 없음
