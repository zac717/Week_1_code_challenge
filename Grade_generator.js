// Challenge 1: Student Grade Generator (Toy Problem)

// prompt the user to input the score
const prompt = require('prompt-sync')();
let studentScore = prompt("Enter student's score  ? \n");

function grading(studentScore){
console.log("student's score is : " + studentScore);
// if else is used to generate the grade depending on the score
if (studentScore > 79 && studentScore <= 100) {
    console.log("grade is A")
}
else if (studentScore >= 60 && studentScore < 79) {
    console.log("grade is B")
}
else if (studentScore >= 49 && studentScore <= 59) {
    console.log("grade is C")
}
else if (studentScore >= 40 && studentScore < 49) {
    console.log("grade is D")
}
else if (studentScore >= 0 && studentScore <40) {
    console.log("grade is E")
}
else{
    console.log("student's score is invalid")
}
}
// call out the function
grading(studentScore)
