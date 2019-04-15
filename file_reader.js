const fs = require('fs');
 

const readFile = path => {
    let content = fs.readFileSync(path, 'utf8');
    return content;
}

const parseProblemInput = (input) => {
    const lines = input.split("\n");
    
    const info = lines[0].split(" ");

    const num_slots = info[0]
    const num_unit_courses = info[1]

    let unit_course_registrations = {};

    for (let i = 1; i <= num_unit_courses ; i++) {
        unit_course_registrations[i]= lines[i].split(" "); 
    }

    console.log("Problem Info:\n", "Number of Slots: ", num_slots, "\n Number of Unit Courses: ", num_unit_courses, "\n");

    for (const unit_course in unit_course_registrations) {
        console.log("Course ", unit_course, " => ", unit_course_registrations[unit_course]); 
    }

    return {
        num_slots,
        unit_course_registrations
    }
}


module.exports = {
    readFile,
    parseProblemInput
}