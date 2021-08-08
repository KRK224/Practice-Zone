/**
 *  리터럴 방식으로 생성한 객체의 프로토타입 체인은...
 *  Object 생성자 함수의 prototype 프로퍼티를 [[Prototype]]을 갖고,
 *  Object 생성자 함수는 함수이므로, Function.prototype을 [[Prototype]]으로 갖고,
 *  다시, Function 생성자 함수는 객체인데... Object()로부터 나옴...??
 * 
 */


var student  = {
    name: "Chris",
    score: 100
};

console.log(student.__proto__ === Object.prototype); //true
console.log(Object.__proto__ == Function.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); // Object.prototype => __proto__는 null
console.log(Function.__proto__ === Function.prototype); // true, 근데 Function.prototype은 empty 객체이다.
// Function 함수는 생성자 함수로서, 결국 함수니까 자기를 자기가 만든거지...
console.log(Function.prototype); // {} ????
console.log(Function.prototype.__proto__ === Object.prototype); // true : 결국 Function.prototype도 객체
console.log(Object.__proto__.__proto__ === Object.prototype); // true...

function Cup(size, current){
    this.size = size
    this.current = current
}

Cup.prototype.status = function(){
    if(this.size >= this.current){
        console.log("물이 넘치지 않았습니다.");
    }
    else console.log("물이 넘쳤습니다.")
}

var testPrototypeObj = {
    status: function(){
        console.log("switched prototype Obj by __proto__ setter")
    }
};

var cup = new Cup(10,7);
var cup2 = new Cup(5, 7);

cup.status();
cup2.status();

cup2.__proto__.status2 = function() {console.log("__proto__ set test");}
cup2.status3 = function() {
    console.log("프로토타입 체인으로 set 가능할까?");
}

cup2.status2();
cup2.status3(); // 되는데?;;


cup2.__proto__ = testPrototypeObj; // 다 잘되는데 왜 set이 안된다는거야...??

cup2.status();
cup.status(); // 각 객체별로 Prototype을 설정 가능하구나...


