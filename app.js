const {readFile, parseProblemInput} = require("./file_reader.js");
const {calcOverlappingTable} = require("./helpers.js");
const Population = require("./population.js");

const problem_input = parseProblemInput(readFile("./problems/1.in"));

const overlappings = calcOverlappingTable(problem_input.unit_course_registrations);


const population = new Population(problem_input.num_unit_courses, problem_input.num_slots, overlappings, problem_input.num_students);

const MAX_GENERATIONS = 100;
population.evolve(MAX_GENERATIONS);