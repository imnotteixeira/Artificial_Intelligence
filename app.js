const {readFile, parseProblemInput} = require("./file_reader.js");
const {calcOverlappingTable, getNumOverlappingStudents} = require("./helpers.js");

const problem_input = parseProblemInput(readFile("./problems/1.in"));

const overlappings = calcOverlappingTable(problem_input.unit_course_registrations);
// console.log(getNumOverlappingStudents(overlappings, 11, 2));


