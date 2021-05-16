// getter 와 setter 이해


class A {
    _name = "no name";

    get name() {
        return this._name + "@@@";
    }

    set name(value){
        this._name = value + "!!!";
    }
}

const a = new A();
console.log(a);

a.name = "Mark"; // setter 사용.
console.log(a);
console.log(a.name); // getter 사용.
console.log(a._name);

// readonly

class B {
    _name ="no Name";

    get name() {
        return this._name + "@@@"
    }
}

const b = new B();

console.log(b);
b.name = "mark"; // setter가 없기 때문에 반응하지 않음.
console.log(b);