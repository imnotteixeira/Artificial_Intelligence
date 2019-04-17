let plotly = require('plotly')(process.env.PLOTLY_USERNAME, process.env.PLOTLY_KEY);
const Population = require("./population.js");


const runStatistics = (problem_input, overlappings) => {
    const MAX_GENERATIONS = 1000;

    const NUM_EXPERIMENTS = 10;
    const test_configs = [
        {
            population_size: 4,
            mutation_rate: 0.01
        },
        {
            population_size: 10,
            mutation_rate: 0.01
        },
        {
            population_size: 100,
            mutation_rate: 0.01
        },
        {
            population_size: 500,
            mutation_rate: 0.01
        },
        {
            population_size: 1000,
            mutation_rate: 0.01
        },
    ]

    
    let experiments = {};

    for (let curr_test = 0; curr_test < test_configs.length; curr_test++) {

        

        const population = new Population(problem_input.num_unit_courses, problem_input.num_slots, overlappings, problem_input.num_students, test_configs[curr_test]);
        let start = process.hrtime();
        const solutions = population.evolve(MAX_GENERATIONS);
        const time = process.hrtime(start)[1] / 1000000;


        experiments[curr_test] = {
            config: test_configs[curr_test],
            time,
            solutions: solutions.map(solution => solution.genes)
        }
    }
    
    const fs = require('fs');
    try {
        fs.writeFileSync('tests.json', JSON.stringify(experiments))
        console.log('The Test Results were written to tests.json!');
    } catch (err) {
        /* Handle the error */
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }
}

const genGraph = () => {
    let trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 15, 13, 17],
        type: "scatter"
    };
    let trace2 = {
        x: [1, 2, 3, 4],
        y: [16, 5, 11, 9],
        type: "scatter"
    };
    let data = [trace1, trace2];
    let graphOptions = {filename: "", fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
}

module.exports = {
    runStatistics
}