const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// is at least one person 19 or older?
// const test1 = people.filter(person => (2021 - person.year) >= 19);
const ans1 = people.some(person => (2021 - person.year) >= 19);
// console.log(ans1);

// is everyone 19 or older?
const ans2 = people.every(person => (2021 - person.year) >= 19);
// console.log(ans2);

// find the comment with the ID of 823423
const ans3 = comments.find(comment => comment.id === 823423);
// console.log(ans3);

// Find the comment with this ID
// delete the comment with the ID of 823423
const ans4 = comments.findIndex(comment => comment.id === 823423);
comments.splice(ans4, 1);
console.table(comments);