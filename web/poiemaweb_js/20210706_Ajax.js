const obj = {name: "Kim", age: 27, gender: "male"};


function filter(key, value){

    return typeof value === 'number'? undefined: value;
}


const strObj = JSON.stringify(obj, filter, 2);
console.log(strObj);
console.log(typeof strObj);


const arr = [1, 2, 5, 6];

function arrfilter(key, value){
    return value > 5? null: value;
}

const strArr = JSON.stringify(arr, arrfilter, 2);
console.log(strArr);
console.log(typeof strArr);