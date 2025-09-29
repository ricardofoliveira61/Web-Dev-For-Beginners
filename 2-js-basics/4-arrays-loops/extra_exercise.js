// in this exercise there are two grading systems. One from 1 to 5 where the students 3 and above pass.
// THe other has the following grades A, A-, B, B-, C, C- where C is the lowsest  passing grade

function numericGrade(grade) {
  if (grade >= 3) {
    return true;
  }
  return false;
}

function letterGrade(grade) {
  const passingGrades = ["A", "A-", "B", "B-", "C"];

  if (passingGrades.includes(grade)) {
    return true;
  }
  return false;
}

let allStudents = ["A", "B-", 1, 4, 5, 2];
let studentsWhoPass = [];

for (let grade of allStudents) {
  if (typeof grade === "string" && letterGrade(grade)) {
    studentsWhoPass.push(grade)

  } else if (typeof grade === "number" && numericGrade(grade)) {
    studentsWhoPass.push(grade)
  }
}

console.log(studentsWhoPass);
