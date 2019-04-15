const calcOverlappingTable = unit_course_registrations => {
    const unit_courses = Object.keys(unit_course_registrations);
    
    //init matrix
    let overlappingTable = [];
    for(let i=0; i<unit_courses.length; i++) {
        overlappingTable[i] = new Array(unit_courses.length);
    }

    for (let i = 1; i <= unit_courses.length; i++) {
        
        for (let j = i; j <= unit_courses.length; j++) {
            overlappingTable[i-1][j-1] = calcOverlappingStudents(unit_course_registrations, i, j);
        }
        
    }

    return overlappingTable;
}

const calcOverlappingStudents = (unit_course_registrations, unit_course_1, unit_course_2) => {
    var duplicates = unit_course_registrations[unit_course_1].filter(val => {
        return unit_course_registrations[unit_course_2].indexOf(val) != -1;
    });
    return duplicates.length; 
}

const getNumOverlappingStudents = (overlappings, unit_course_1, unit_course_2) => {
    return unit_course_1 > unit_course_2 ? 
    overlappings[unit_course_2 - 1][unit_course_1 - 1] : overlappings[unit_course_1 - 1][unit_course_2 - 1]; 
}

module.exports = {
    calcOverlappingTable,
    getNumOverlappingStudents
} 