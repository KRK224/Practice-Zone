// var 함수 스코프

var a = 0;
console.log(a);

(function(){
    a++;
    console.log(a);
})(); // 함수 즉시 실행 방법.

console.log(a);

(function(){
    var b = 0;
    console.log(b);
})();

// b++; => 함수를 벗어나 에러 발생.


//var를 블록 스코프에서 사용.

// main? 함수에서 사용해서 블록 안까지 괜춘.
var c =0;

{
    c++;
    console.log(c);
}

// =====================================================

// 블록 안에서 바깥으로 사용. => (ok)

{
    var d =0;
    console.log(d);
}

// 블록과 상관없기 때문에 에러 발생하지 않는다.
console.log(d);


