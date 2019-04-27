const DNA = require("./dna.js");

const GENETIC_PARAMS = Object.freeze({
    POPULATION_SIZE: 2000,
    MUTATION_RATE: 0.01
})

class Population {
    
    constructor(num_unit_courses, num_slots, overlappings, num_students, {initial_population, population_size, mutation_rate}) {
        this.num_unit_courses = num_unit_courses;
        this.num_slots = num_slots;
        this.overlappings = overlappings;
        this.num_students = num_students;

        if(population_size) {
            this.population_size = population_size;
        } else {
            this.population_size = GENETIC_PARAMS.POPULATION_SIZE;
        }

        if(mutation_rate) {
            this.mutation_rate = mutation_rate;
        } else {
            this.mutation_rate = GENETIC_PARAMS.MUTATION_RATE;
        }
        
        if(!initial_population) {
            this.population = this.generatePopulation(
                population_size, 
            );
        } else {
            this.population = initial_population.map((individual)=> new DNA(this, individual));
        }

        this.num_generations = 1;
        this.mating_pool = [];
        this.population_fitness = [];

        this.best_solution = this.population[0];

        this.population.forEach(individual => {
            if(individual.fitness > this.best_solution.fitness) {
                this.best_solution = individual;
            }
        });

    }

    /**
     * Generates population_size arrays of num_unit_courses elements with values from 1 to num_slots
     * @param {*} population_size 
     * @param {*} num_unit_courses 
     * @param {*} num_slots 
     * @param {*} overlappings 
     */
    generatePopulation(population_size) {
        let population = new Array(population_size).fill(0);

        return population.map(() => {
            return new DNA(this);
        });
    }

    /**
     * Main evolution loop. Re generates population until an optmal has been found, or the max generations limit has been reached
     * @param {*} max_generations 
     */
    evolve(max_generations) {
        let solutions;
        while((solutions = this.evaluate()).length === 0 && this.num_generations < max_generations) {
            // console.log('====================================');
            // console.log("Generation: ", this.num_generations);
            // console.log("Fitness Average: ", this.calculateAverageFitness());
            // console.log('====================================');
            this.calculateFitness();
            this.naturalSelection();
            this.generateNextGeneration();
        }

        return solutions;
        // if(solutions.length > 0) {
        //     console.log('====================================');
        //     console.log("Found ", solutions.length, " solutions: ");
        //     console.log(solutions.map(elem => elem.genes));
        //     console.log('====================================');
        // } else {
        //     console.log('====================================');
        //     console.log("Couldn't find any optimal solution in the given generation limit. The Best Solution was, however:");
        //     console.log(this.best_solution.genes);
        //     console.log("Fitness: ", this.best_solution.fitness);
        //     console.log('====================================');

        // }


    }
    
    /**
     * Calculates the relative fitness of every element of the population, storing it in population_fitness
     */
    calculateFitness() {
        const total_fitness = this.population.reduce((acc, currentIndividual) => acc + currentIndividual.fitness, 0);

        this.population_fitness = this.population.map(elem => elem.fitness / total_fitness);
    }

    /**
     * Calculates the average fitness of the individuals of the population
     */
    calculateAverageFitness() {
        const total_fitness = this.population.reduce((acc, currentIndividual) => acc + currentIndividual.fitness, 0);

        return total_fitness / this.population.length;
    }

    /**
     * Selects the most fit to reproduce based on the relative fitness calculated into population_fitness
     * and places them into a mating_pool
     */
    naturalSelection() {
        this.mating_pool = [];

        for (let i = 0; i < this.population.length; i++) {
            
            const fitness_normalized = this.population_fitness[i] * 100;

            for (let j = 0; j < fitness_normalized; j++) {
                this.mating_pool.push(i);
            }
            
        }
    }

    /**
     * Creates a new generation, through Crossing and Mutation
     */
    generateNextGeneration() {
        let next_generation = [];

        while(next_generation.length < this.population.length) {
            const random_parent_a = Math.floor(Math.random() * this.mating_pool.length);
            const random_parent_b = Math.floor(Math.random() * this.mating_pool.length);
    
            const parent_a_idx = this.mating_pool[random_parent_a];
            const parent_b_idx = this.mating_pool[random_parent_b];
 
            const parent_a = this.population[parent_a_idx];
            const parent_b = this.population[parent_b_idx];
    
            const child = parent_a.cross(parent_b);
            
            child.mutate(this.mutation_rate)
            
            next_generation.push(child);
        }

        this.population = next_generation;

        this.num_generations++;
    }

    /**
     * Verifies if the population is ideal, i.e. the goal conditions are met
     * Returns true if there is a solution in the population
     */
    evaluate() {
        this.population.forEach(individual => {
            if(individual.fitness > this.best_solution.fitness) {
                this.best_solution = individual;
            }
        });

        const solutions = this.population.filter((individual) => individual.fitness == 1);
        return solutions;
    }

    /**
     * Prints the current population
     */
    print() {
        console.log('====================================');
        console.log(this.population);
        console.log('====================================');
    }
}

module.exports = Population