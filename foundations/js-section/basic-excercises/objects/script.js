// ejercicio 2
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

for (key in user) {
    console.log(user[key]);
}

// ejercicio 2
let schedule = {};

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

schedule["8:30"] = "get up";
console.log(isEmpty(schedule));

// exc 3 - sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

function salarySum(obj) {
    let sum = 0;
    for (key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(salarySum(salaries));


// ex. 4 multiply numeric properties by 2
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
}

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof (obj[key]) === "number") {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu)
console.log(menu);
