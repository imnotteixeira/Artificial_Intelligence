
require('dotenv').config();

const {readFile, parseProblemInput} = require("./file_reader.js");
const {calcOverlappingTable} = require("./helpers.js");
const Population = require("./population.js");

const problem_input = parseProblemInput(readFile("./problems/1.in"));

const overlappings = calcOverlappingTable(problem_input.unit_course_registrations);

if(process.env.PROFILING_MODE === "true") {
    const {runStatistics} = require("./statistics");
    runStatistics(problem_input, overlappings);
} else {
    const MAX_GENERATIONS = 1000;
    const population = new Population(problem_input.num_unit_courses, problem_input.num_slots, overlappings, problem_input.num_students);
    const solutions = population.evolve(MAX_GENERATIONS);

    if(solutions.length > 0) {
        console.log('====================================');
        console.log("Found ", solutions.length, " solutions: ");
        console.log(solutions.map(elem => elem.genes));
        console.log('====================================');
    } else {
        console.log('====================================');
        console.log("Couldn't find any optimal solution in the given generation limit. The Best Solution was, however:");
        console.log(this.best_solution.genes);
        console.log("Fitness: ", this.best_solution.fitness);
        console.log('====================================');

    }
}


