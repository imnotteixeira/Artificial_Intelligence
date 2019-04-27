let plotly = require('plotly')(process.env.PLOTLY_USERNAME, process.env.PLOTLY_KEY);
const Population = require("./population.js");
const DNA = require("./dna.js");


const runStatistics = (problem_input, overlappings) => {
    const MAX_GENERATIONS = 1000;

    const test_configs_population = [
        {
            population_size: 4,
            mutation_rate: 0.01
        },
        {
            population_size: 10,
            mutation_rate: 0.01
        },
        {
            population_size: 20,
            mutation_rate: 0.01
        },
        {
            population_size: 50,
            mutation_rate: 0.01
        },
        {
            population_size: 75,
            mutation_rate: 0.01
        },
        {
            population_size: 100,
            mutation_rate: 0.01
        },
        {
            population_size: 120,
            mutation_rate: 0.01
        },
        {
            population_size: 140,
            mutation_rate: 0.01
        },
        {
            population_size: 160,
            mutation_rate: 0.01
        },
        {
            population_size: 180,
            mutation_rate: 0.01
        },
        {
            population_size: 200,
            mutation_rate: 0.01
        },
        {
            population_size: 300,
            mutation_rate: 0.01
        },
        {
            population_size: 400,
            mutation_rate: 0.01
        },
        {
            population_size: 500,
            mutation_rate: 0.01
        },
        {
            population_size: 600,
            mutation_rate: 0.01
        },
        {
            population_size: 700,
            mutation_rate: 0.01
        },
        {
            population_size: 800,
            mutation_rate: 0.01
        },
        {
            population_size: 900,
            mutation_rate: 0.01
        },
        {
            population_size: 1000,
            mutation_rate: 0.01
        },
    ]

    const test_configs_mutation_200 = [
        {
            population_size: 200,
            mutation_rate: 0.01
        },
        {
            population_size: 200,
            mutation_rate: 0.02
        },
        {
            population_size: 200,
            mutation_rate: 0.05
        },
        {
            population_size: 200,
            mutation_rate: 0.1
        },
        {
            population_size: 200,
            mutation_rate: 0.2
        },
        {
            population_size: 200,
            mutation_rate: 0.5
        },
        {
            population_size: 200,
            mutation_rate: 0.8
        },
        {
            population_size: 200,
            mutation_rate: 0.9
        },
        {
            population_size: 200,
            mutation_rate: 1
        },
    ];

    const test_configs_mutation_500 = [
        {
            population_size: 500,
            mutation_rate: 0.01
        },
        {
            population_size: 500,
            mutation_rate: 0.02
        },
        {
            population_size: 500,
            mutation_rate: 0.05
        },
        {
            population_size: 500,
            mutation_rate: 0.1
        },
        {
            population_size: 500,
            mutation_rate: 0.2
        },
        {
            population_size: 500,
            mutation_rate: 0.5
        },
        {
            population_size: 500,
            mutation_rate: 0.8
        },
        {
            population_size: 500,
            mutation_rate: 0.9
        },
        {
            population_size: 500,
            mutation_rate: 1
        },
    ];
    
    const test_configs_mutation_1000 = [
        {
            population_size: 1000,
            mutation_rate: 0.01
        },
        {
            population_size: 1000,
            mutation_rate: 0.02
        },
        {
            population_size: 1000,
            mutation_rate: 0.05
        },
        {
            population_size: 1000,
            mutation_rate: 0.1
        },
        {
            population_size: 1000,
            mutation_rate: 0.2
        },
        {
            population_size: 1000,
            mutation_rate: 0.5
        },
        {
            population_size: 1000,
            mutation_rate: 0.8
        },
        {
            population_size: 1000,
            mutation_rate: 0.9
        },
        {
            population_size: 1000,
            mutation_rate: 1
        },
    ];

    const small_population = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 1],
        [1, 1, 4, 2, 2, 2, 3, 3, 3, 4, 4, 1],
        [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4],
    ];

    const test_configs_mutation_small = [
        {
            population_size: 4,
            mutation_rate: 0.01,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.02,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.05,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.1,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.2,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.3,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.4,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.5,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.6,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.7,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.8,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 0.9,
            initial_population: small_population
        },
        {
            population_size: 4,
            mutation_rate: 1,
            initial_population: small_population
        },
    ];

    test(test_configs_population, MAX_GENERATIONS, problem_input, overlappings, {
        output_filename: "population_variation_performance",
        title: "Genetic Algorithm Performance with 1% Mutation",
        x_label: "Population Size",
        y_label: "Elapsed Time (ms)",
        test_type: "POPULATION_SIZE"
    });

    test(test_configs_mutation_200, MAX_GENERATIONS, problem_input, overlappings, {
        output_filename: "mutation_variation_performance_200p",
        title: "Genetic Algorithm Performance with 200 population",
        x_label: "Mutation Probability",
        y_label: "Elapsed Time (ms)",
        test_type: "MUTATION"
    });
    // test(test_configs_mutation_500, MAX_GENERATIONS, problem_input, overlappings, {
    //     output_filename: "mutation_variation_performance_500p",
    //     title: "Genetic Algorithm Performance with 500 population",
    //     x_label: "Mutation Probability",
    //     y_label: "Elapsed Time (ms)",
    //     test_type: "MUTATION"
    // });
    test(test_configs_mutation_1000, MAX_GENERATIONS, problem_input, overlappings, {
        output_filename: "mutation_variation_performance_1000p",
        title: "Genetic Algorithm Performance with 1000 population",
        x_label: "Mutation Probability",
        y_label: "Elapsed Time (ms)",
        test_type: "MUTATION"
    });

    // test(test_configs_mutation_small, MAX_GENERATIONS, problem_input, overlappings, {
    //     output_filename: "mutation_variation_performance_4p",
    //     title: "Genetic Algorithm Performance with small population",
    //     x_label: "Mutation Probability",
    //     y_label: "Elapsed Time (ms)",
    //     test_type: "MUTATION"
    // });
}

const test = (test_configs, max_generations, problem_input, overlappings, {output_filename, title, x_label, y_label, test_type}) => {
    let experiments = {};

    for (let curr_test = 0; curr_test < test_configs.length; curr_test++) {

        const population = new Population(problem_input.num_unit_courses, problem_input.num_slots, overlappings, problem_input.num_students, test_configs[curr_test]);
        
        let start = process.hrtime();
        const solutions = population.evolve(max_generations);
        const time = process.hrtime(start)[1] / 1000000;


        experiments[curr_test] = {
            config: test_configs[curr_test],
            time,
            solutions: solutions.map(solution => solution.genes),
            fitness: population.best_solution.fitness,
            num_generations: population.num_generations
        }
    }


    const fs = require('fs');
    try {
        fs.writeFileSync(`${output_filename}.json`, JSON.stringify(experiments))
        console.log(`The Test Results were written to ${output_filename}.json!`);
    } catch (err) {
        /* Handle the error */
        console.log('====================================');
        console.log(err);
        console.log('====================================');
    }

    genGraph(experiments, output_filename, title, x_label, y_label, test_type);


    return experiments;
}

const genGraph = (experiments, output_filename, title, x_label, y_label, test_type) => {
    x_values = [];
    y_values = [];
    found_solution = [];
    fitness = [];
    generations = [];
    for (const experiment in experiments) {
        if(test_type == "POPULATION_SIZE") {
            x_values.push(experiments[experiment].config.population_size);
        } else if (test_type == "MUTATION") {
            x_values.push(experiments[experiment].config.mutation_rate);
        }
        fitness.push(experiments[experiment].fitness);
        generations.push(experiments[experiment].num_generations);
        y_values.push(experiments[experiment].time);
        found_solution.push(experiments[experiment].solutions.length !== 0);
    }

    var trace1 = {
        x: [...x_values],
        y: [...y_values],
        marker: {color: found_solution.map(found => found ? "#447adb" : "#db5a44")},
        name: "Time",
        type: "bar"
    };
    
    var trace2 = {
        x: [...x_values],
        y: [...fitness],
        name: "Fitness",
        xaxis: "x",
        yaxis: "y2",
        type: "bar",
        marker: {color: "#33ff22"}
    };

    var trace3 = {
        x: [...x_values],
        y: [...generations],
        name: "Generations",
        xaxis: "x",

        type: "bar",
        marker: {color: "#333322"}
    };

    let data = [trace1, trace2, trace3];

    var layout = {
        title: title,
        width: 800,
        xaxis: {
            title: x_label,
            tickfont: {
                size: 14,
                color: "rgb(107, 107, 107)"
            }
        },
        yaxis: {
            title: y_label,
            titlefont: {
                size: 16,
                color: "rgb(107, 107, 107)"
            },
            tickfont: {
                size: 14,
                color: "rgb(107, 107, 107)"
            },
            side: "left"
        },
        yaxis2: {
            title: "Fitness",
            titlefont: {color: "rgb(148, 103, 189)"},
            tickfont: {color: "rgb(148, 103, 189)"},
            overlaying: "y",
            side: "right",
            anchor: "x"
        },
        yaxis3: {
            title: "Generations",
            titlefont: {color: "rgb(140, 30, 30)"},
            tickfont: {color: "rgb(140, 30, 30)"},
            overlaying: "y",
            side: "right",
            anchor: "free",
            position: 1.2
        },
        legend: {
            x: 0,
            y: 1.0,
            bgcolor: "rgba(255, 255, 255, 0)",
            bordercolor: "rgba(255, 255, 255, 0)"
        },
        barmode: "group",
    };

    let graphOptions = {layout:layout, filename: output_filename, fileopt: "overwrite"};
    plotly.plot(data, graphOptions, function (err, msg) {
        console.log(msg);
    });
}

module.exports = {
    runStatistics
}