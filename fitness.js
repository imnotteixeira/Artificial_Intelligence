const {getNumOverlappingStudents} = require('./helpers.js');

/**
 * Calculates a population fitness, based on the amount of overlappings
 * @param {*} overlapping_table 
 * @param {*} slot_assignments 
 * @param {*} num_students 
 */
const calcPopulationFitness = (overlapping_table, slot_assignments, num_students) => {
    
    
    let total_overlappings = 0;

    for (let unit_course = 0; unit_course < slot_assignments.length - 1; unit_course++) {
        for (let candidate_unit_course = unit_course + 1; candidate_unit_course < slot_assignments.length; candidate_unit_course++) {

            //if on the smae slot, update overlappings
            if(slot_assignments[unit_course] === slot_assignments[candidate_unit_course]) {
                const curr_overlappings = getNumOverlappingStudents(overlapping_table, unit_course, candidate_unit_course);
                // DEBUG
                // if(curr_overlappings > 0) {
                //     console.log("There are ", curr_overlappings, " overlappings between unit courses ", 
                //         unit_course, " and ", candidate_unit_course, "on slot ", slot_assignments[unit_course]);
                // }
                total_overlappings += curr_overlappings; 
            }
        }
    }

    console.log("Num of overlappings is: ", total_overlappings);
    //if the value is negative, it gets cropped at 0
    return Math.max(0, 1-total_overlappings/num_students);
}

module.exports = {
    calcPopulationFitness
}