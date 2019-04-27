const {getNumOverlappingStudents} = require('./helpers.js');

class DNA {
    constructor(population, genes) {
        this.population = population;

        if(!genes) {
            this.genes = this.selfConstructDNA();
        } else {
            this.genes = genes;
        }

        this.fitness = this.calculateFitness();

        // console.log('====================================');
        // console.log("Genome: ", this.genes);
        // console.log("Fitness: ", this.fitness);
        // console.log('====================================');
        
    }

    selfConstructDNA() {
        let new_genes = new Array(this.population.num_unit_courses).fill(0);

        return new_genes.map(() => {
            return Math.round(Math.random() * (this.population.num_slots - 1) + 1);
        })

    }

    calculateFitness() {
        let total_overlappings = 0;

        for (let unit_course = 0; unit_course < this.genes.length - 1; unit_course++) {
            for (let candidate_unit_course = unit_course + 1; candidate_unit_course < this.genes.length; candidate_unit_course++) {

                //if on the same slot, update overlappings
                if(this.genes[unit_course] === this.genes[candidate_unit_course]) {
                    const curr_overlappings = getNumOverlappingStudents(this.population.overlappings, unit_course, candidate_unit_course);
                    total_overlappings += curr_overlappings; 
                }
            }
        }

        
        return this.population.num_students/(total_overlappings + this.population.num_students);
    }

    cross(partner) {

        let mixed_genes = [];

        let i;
        for (i = 0; i < this.genes.length / 2; i++) {
            mixed_genes.push(this.genes[i]);
        }

        for (let j = i; j < this.genes.length; j++) {
            mixed_genes.push(partner.genes[j]);
        }

        return new DNA(this.population, mixed_genes)
    }

    mutate(mutation_probability) {
        this.genes = this.genes.map((elem) => {
            if(Math.random() < mutation_probability) {
                return Math.round(Math.random() * (this.population.num_slots - 1) + 1);
            } else {
                return elem;
            }
        })
    }
}

module.exports = DNA;