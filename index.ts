// (강의) 타입 확정하기 Narrowing & Assertion
function 내함수(x: string | number) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}
내함수(123);

function 내함수1(x: string | number) {
  let array: number[] = [];

  if (typeof x === "number") {
    array[0] = x;
  } else {
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
let 이름: string = "kim";
// 이름 as number; 이런식으로 a에서 b로하는것이아님

// 2. 무슨타입이 들어올지 100% 확실할때 쓰는것

// 숙제 1 array 자료형에 문자 타입이 섞여있어서 숫자로 만드는 함수 만들기
function 변환기(arr: (number | string)[]) {
  let done: number[] = [];

  arr.forEach(function (a) {
    if (typeof a === "string") {
      done.push(parseInt(a));
    } else {
      done.push(a);
    }
  });
  return done;
}

console.log(변환기([123, "45"]));

// 숙제 2
function 과목뽑기(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    ("없음");
  }
}

// (강의) 타입도 변수에 담아쓰기 type 키워드써서 & readonly

// type alias 만드는법 = 타입변수로 만드는것임
type Animal = string | number | undefined;

let 동물: Animal = 123;

type Object1 = { name: string; age: number };

let 사람: Object1 = { name: "kim", age: 20 };

// 규칙 ) 보통 타입변수로 만들때는 대문자로 설정 Animal

// ts에서는 const로 변수설정한 객체의 값을 못바꾸도록 lock을 걸수있음

//  자바스크립트일때----
const girl = {
  name: "가나다",
};
girl.name = "마바사";

// Typescript일때 ----  실제로는 바뀌지만 에디터에서 못바꾸게 막아주는것임
type Girlfriend = {
  readonly name: string;
};
// ? 도 사용가능
type Girlfriend1 = {
  name?: string; // 이거는 name 타입이 string or undefined
};

const Girl1: Girlfriend = {
  name: "가나다",
};

// Girl1.name = "마바사"

// 타입 지정하는거 합치는방법1)
type Hi = string;
type Hi1 = string;
type NewHi = Hi | Hi1;
var hi: NewHi = "hi";

// 타입 지정하는거 합치는방법2) == object타입을 extend하는거라고보면됨
type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY; // {x: number, y: number}

var position: NewType = { x: 123, y: 111 };

// 참고 type 변수 는 재정의불가능

//숙제 2
type Test2 = { color?: string; size: number; readonly position1: number[] };

let 테스트용변수: Test2 = {
  color: "red",
  size: 123,
  position1: [1, 2, 3, 4],
};

// 숙제 3
type Test3 = { name: string; phone: number; email: string };

let 테스트용변수3: Test3 = {
  name: "임재원",
  phone: 41465622,
  email: "nemo0824",
};

// 숙제 4
type Test4 = { adult: boolean };

let 테스트용변수4: Test3 & Test4 = {
  name: "임재원",
  phone: 41465622,
  email: "nemo0824",
  adult: true,
};

//(강의) Literal Types --- 변수에 뭐가들어올지 더 엄격하게 관리가능 , 자동완성 가능
let 이름1: 123;
이름1 = 123;

// 매개변수로 무조건 '리터럴만'이 들어올수있음
// reutrn 으로 1 또는 2만 나와야함
function 함수리터럴(a: "리터럴만"): 1 | 2 {
  return 1;
}

function 가위바위보함수(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["보"];
}
// literal type은 const변수의 업그레이드버전.

// as const ---- 1.object value값을 그대로 타입으로 지정해줌 2. object 속성들에게 모두 readonly 붙여줌
var 자료 = {
  name: "kim",
} as const;

function 자료내함수(a: "kim") {}

자료내함수(자료.name);

// 함수타입 type
type plusOne1 = (a: number) => number;

// 객체안에있는 메서드 타입지정

let 회원정보: Member = {
  name: "Lim",
  age: 29,
  plusOne(a) {
    return a + 1;
  },
  ChangeName: () => {
    console.log("changeName입니다");
  },
};

회원정보.plusOne(2);
회원정보.ChangeName();

// 숙제 plusOne 숫자 넣어서 숫자뱉기 changeName return x

type Member = {
  name: string;
  age: number;
  plusOne: (a: number) => number;
  ChangeName: () => void;
};

// 숙제
// 1.cutZero 라는 함수 만드릭 -> 문자를 하나입력하면 맨앞에 '0'이있으면 제거하고 문자 type 으로 return 해줍니다
// 2. removeDash() 함수만들기 -> 문자를 하나입력하면 대시기호가 - 있으면 전부제거 하고 그걸 숫자 type으로 return

type CutType = (a: string) => string;
let cutZero: CutType = function (a) {
  let result = a.replace(/^0+/, "");
  return result;
};

let removeDash = function (a: string): number {
  let result = a.replace(/-/g, "");
  return parseFloat(result);
};

type 파라미터1 = (a: string) => string;
type 파라미터2 = (a: string) => number;

function 만들함수(a: string, p1: 파라미터1, p2: 파라미터2) {
  let result = cutZero(a);
  let result1 = removeDash(result);
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

function 홍길동(a?: string) {
  if (a) {
    return console.log("안녕하세요" + a);
  } else {
    return console.log("이름이없습니다");
  }
}

//숫자 문자 자릿수 세어주는 출력해주는 함수

function 자릿수카운트(a: string | number): number {
  return a.toString().length;
}

function 자릿수카운트1(a: string | number): number {
  if (typeof a === "string") {
    return a.length;
  } else {
    return a.toString().length;
  }
}

function 결혼확률(수입: number, 집: boolean, 점수: string): string | void {
  let sum: number = 0;
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

function 숫자로변환하는함수(arr: (string | number)[]) {
  let 이미숫자: number[] = [];

  arr.forEach((a) => {
    if (typeof a === "string") {
      이미숫자.push(parseFloat(a));
    } else {
      이미숫자.push(a);
    }
  });

  return 이미숫자;
}

function 클리닝함수(a: (number | string)[]) {
  let 클리닝완료된거: number[] = [];

  a.forEach((b) => {
    if (typeof b === "string") {
      클리닝완료된거.push(parseFloat(b));
    } else {
      클리닝완료된거.push(b);
    }
  });

  return 클리닝완료된거;
}

//
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 과목처리기(a: { subject: string | string[] }) {
  if (typeof a.subject === "string") {
    return a.subject;
  } else if (Array.isArray(a.subject)) {
    return a.subject[a.subject.length - 1];
  } else {
    ("없음");
  }
}

type aaaa = { color?: string; size: number; readonly position: number[] };

class Person {
  name: string;
  width: number;
  height: number;
  constructor() {
    this.name = "KIM";
    this.width = 111;
    this.height = 222;
  }
}

let 사람1 = new Person();
console.log(사람1);
let 사람2 = new Person();
console.log(사람2);
