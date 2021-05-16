//  2. 객체에 속성 추가하기
//  Property

//  값을 속성으로 넣기

//함수지만, 생성자로 사용할 수 있다. 함수 또한 객체이기 때문.
function A() {
    this.name = "Mark";
}

const a = new A();
console.log(a);

//  함수를 속성으로 넣기

function B(){
    this.hello = function(){
        console.log("Hello B!");
    }
}

(new B()).hello();

new B().hello(); // new B()를 한묶음으로 인식.

// new Function(); => 표준 내장 객체인 Function 생성자.