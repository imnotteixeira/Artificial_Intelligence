const {readFile, parseProblemInput} = require("./file_reader.js");
const {calcOverlappingTable, getNumOverlappingStudents} = require("./helpers.js");
const {calcPopulationFitness} = require("./fitness.js");

const problem_input = parseProblemInput(readFile("./problems/1.in"));
const num_students = problem_input.num_students;

const overlappings = calcOverlappingTable(problem_input.unit_course_registrations);

const solution1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const solution2 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 1];
const solution3 = [1, 1, 4, 2, 2, 2, 3, 3, 3, 4, 4, 1];
const solution4 = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
console.log(calcPopulationFitness(overlappings, solution1, num_students));
console.log(calcPopulationFitness(overlappings, solution2, num_students));
console.log(calcPopulationFitness(overlappings, solution3, num_students));
console.log(calcPopulationFitness(overlappings, solution4, num_students));


