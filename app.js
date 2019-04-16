const {readFile, parseProblemInput} = require("./file_reader.js");
const {calcOverlappingTable} = require("./helpers.js");
const Population = require("./population.js");

const problem_input = parseProblemInput(readFile("./problems/1.in"));

const overlappings = calcOverlappingTable(problem_input.unit_course_registrations);


const population = new Population(problem_input.num_unit_courses, problem_input.num_slots, overlappings, problem_input.num_students);

while(!population.evaluate() && population.num_generations < 1000) {
    console.log('====================================');
    console.log("Generation: ", population.num_generations);
    console.log("Fitness Average: ", population.calculateAverageFitness());
    console.log('====================================');
    population.calculateFitness();
    population.naturalSelection();
    population.generateNextGeneration();
}

// const solution1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// const solution2 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 1];
// const solution3 = [1, 1, 4, 2, 2, 2, 3, 3, 3, 4, 4, 1];
// const solution4 = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];

