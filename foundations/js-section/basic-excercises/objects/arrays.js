const words = ["hola", "bola", "holabola", "hahahaha"];
const method1 = words.filter(word => word.length > 4);

let method2 = [];
words.forEach(word => {
    if (word.length > 4) { method2.push(word) };
});

let method3 = [];
for (let i = 0; i < words.length; i++){
    if (words[i].length > 4) {
        method3.push(words[i]);
    }
}

console.log(method1);
console.log(method2);
console.log(method3);

const nums = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10];
function mayorA3(el) {
    return el > 3;
}
console.log(nums.filter(mayorA3));

// map
const doublesMap = nums.map(num => num * 2);

// forEach
let doublesFE = [];
nums.forEach(num => {
    doublesFE.push(num * 2);
})

console.log(doublesMap);
console.log(doublesFE);


// reduce

const reducer = (previous, current) => previous + current;
const reduce_1 = nums.reduce(reducer);



console.log(reduce_1);

// sort

const even = element => element % 2 === 0;
console.log(nums.some(even));
