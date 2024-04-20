// (강의) 타입 확정하기 Narrowing & Assertion
function 내함수(x:string|number){
   if(typeof x === 'string'){
    return x + '1'
   }else{
    return x +1 
   }
}
내함수(123);

function 내함수1(x:string|number) {
    let array:number[] = [];
    
    if(typeof x=== 'number' ){
        array[0] = x;
    }else{

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
    let 이름:string = 'kim'
    // 이름 as number; 이런식으로 a에서 b로하는것이아님 

    // 2. 무슨타입이 들어올지 100% 확실할때 쓰는것



    // 숙제 1 array 자료형에 문자 타입이 섞여있어서 숫자로 만드는 함수 만들기
    function 변환기 (arr:(number|string)[]){
        let done:number[] = [];

        arr.forEach(function(a){
            if(typeof a === "string"){
                done.push(parseInt(a))
            }else{
                done.push(a)
            }
        })
        return done
    }

    console.log(변환기([123,'45']))
    
    // 숙제 2 
    function 과목뽑기(x:{subject:string|string[]}){
        if(typeof x.subject === 'string'){
            return x.subject
        }else if(Array.isArray(x.subject)){
            return x.subject[x.subject.length-1]
        }else{
            "없음"
        }

    }


    



    // (강의) 타입도 변수에 담아쓰기 type 키워드써서 & readonly

    // type alias 만드는법 = 타입변수로 만드는것임
    type Animal = string|number|undefined;

    let 동물 : Animal = 123;

    type Object1 = {name: string, age:number}

    let 사람 : Object1 = {name: 'kim', age: 20}
    
    // 규칙 ) 보통 타입변수로 만들때는 대문자로 설정 Animal 



     // ts에서는 const로 변수설정한 객체의 값을 못바꾸도록 lock을 걸수있음
    
    //  자바스크립트일때----
     const girl= {
        name: '가나다'
    }
    girl.name = "마바사"


    // Typescript일때 ----  실제로는 바뀌지만 에디터에서 못바꾸게 막아주는것임
    type Girlfriend = { 
        readonly name : string
    }
    // ? 도 사용가능 
    type Girlfriend1 = {
        name?: string // 이거는 name 타입이 string or undefined
    }


    const Girl1: Girlfriend ={
        name: '가나다'
    }

    // Girl1.name = "마바사"


    // 타입 지정하는거 합치는방법1)
    type Hi = string;
    type Hi1 = string;
    type NewHi = Hi|Hi1;
    var hi:NewHi = "hi";

    // 타입 지정하는거 합치는방법2) == object타입을 extend하는거라고보면됨
    type PositionX = {x: number};
    type PositionY = {y: number};
    type NewType = PositionX & PositionY; // {x: number, y: number}
    
    var position: NewType = {x:123, y:111}


    // 참고 type 변수 는 재정의불가능 

    //숙제 2
    type Test2 = {color? :string, size:number, readonly position1:number[]}

    let 테스트용변수 : Test2 ={
        color: "red",
        size: 123,
        position1: [1,2,3,4]
    }

    // 숙제 3
    type Test3 = {name:string ,phone:number, email:string}

    let 테스트용변수3 : Test3 = {name: '임재원', phone: 41465622 , email:"nemo0824"}
    

    // 숙제 4
    type Test4 = {adult:boolean}

    let 테스트용변수4: Test3 & Test4  = {name: '임재원', phone: 41465622 , email:"nemo0824", adult: true}
   