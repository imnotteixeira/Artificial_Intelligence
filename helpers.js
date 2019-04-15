/**
 * Creates diagonal matrix where the overlapping between itself is 0.
 * The sum of all cells is the total overlapped students
 * @param {*} unit_course_registrations 
 */
const calcOverlappingTable = unit_course_registrations => {
    const unit_courses = Object.keys(unit_course_registrations);
    
    //init matrix
    let overlapping_table = [];
    for(let i=0; i < unit_courses.length; i++) {
        overlapping_table[i] = new Array(unit_courses.length).fill(0);
    }

    for (let i = 0; i < unit_courses.length; i++) {
        
        for (let j = i+1; j < unit_courses.length; j++) {
            overlapping_table[i][j] = calcOverlappingStudents(unit_course_registrations, i, j);
        }
    }

    return overlapping_table;
}

/**
 * Calculates the number of overlapped students between 2 given unit courses
 * @param {*} unit_course_registrations 
 * @param {*} unit_course_1 
 * @param {*} unit_course_2 
 */
const calcOverlappingStudents = (unit_course_registrations, unit_course_1, unit_course_2) => {
    let duplicates = unit_course_registrations[unit_course_1].filter(val => {
        return unit_course_registrations[unit_course_2].indexOf(val) != -1;
    });
    return duplicates.length; 
}

/**
 * Fetches the number of overlapped students between 2 given unit courses in a pre-computed overlappings matrix
 * @param {*} overlappings 
 * @param {*} unit_course_1 
 * @param {*} unit_course_2 
 */
const getNumOverlappingStudents = (overlappings, unit_course_1, unit_course_2) => {
    return unit_course_1 > unit_course_2 ? 
    overlappings[unit_course_2][unit_course_1] : overlappings[unit_course_1][unit_course_2]; 
}

module.exports = {
    calcOverlappingTable,
    getNumOverlappingStudents
} 