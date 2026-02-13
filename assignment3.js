
// Q1 Remove states starting with vowels

let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Kerala", "Assam"];

let q1 = states.filter(state =>
  !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase())
);

console.log("Q1 Output:", q1);



// Q2 Reverse words in string

let str = "I love my India";
let q2 = str.split(" ").reverse().join(" ");

console.log("Q2 Output:", q2);



// Q3 INDIA → INDONESIA using splice

let word = "INDIA";
let arr = word.split("");

arr.splice(3, 2, "O", "N", "E", "S", "I", "A");

console.log("Q3 Output:", arr.join(""));



// Q4 Count vowels and consonants

let text = "JavaScript is a powerful programming language";

let vowels = 0;
let consonants = 0;

for (let ch of text.toLowerCase()) {
  if ("aeiou".includes(ch)) vowels++;
  else if (ch >= "a" && ch <= "z") consonants++;
}

console.log("Q4 Output:");
console.log("Vowels =", vowels);
console.log("Consonants =", consonants);



// Q5 Replace wrong word with correct word

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(
  "Q5 Output:",
  correctfn("I love JvaScript", "JvaScript", "JavaScript")
);



// Q6 Filter numbers greater than 5

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let q6 = inputArr.filter(num => num > 5);

console.log("Q6 Output:", q6);



// Q7 Student average using map + reduce

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

let q7 = students.map(student => {
  let total = student.scores.reduce((sum, score) => sum + score, 0);
  let avg = total / student.scores.length;

  return { name: student.name, average: avg };
});

console.log("Q7 Output:", q7);



// Q8 Repeated sum of digits until single digit

function singleDigitSum(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

console.log("Q8 Output:", singleDigitSum(456));



// Q9 Count number of words in paragraph

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

console.log("Q9 Output:", countWords("I love my India very much"));



// Q10 Reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Q10 Output:", reverseString("Hello"));



// Q11 Find average marks for each student object

let studentsData = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
};

let result = {};

for (let student in studentsData) {
  let marks = Object.values(studentsData[student]);

  let avg =
    marks.reduce((sum, val) => sum + val, 0) / marks.length;

  result[student] = { average: avg };
}

console.log("Q11 Output:", result);
