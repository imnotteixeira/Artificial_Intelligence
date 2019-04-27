const fs = require('fs');
 

const readFile = path => {
    let content = fs.readFileSync(path, 'utf8');
    return content;
}

const parseProblemInput = (input) => {
    const lines = input.split("\n");
    
    const info = lines[0].split(" ");

    const num_slots = parseInt(info[0], 10);
    const num_unit_courses = parseInt(info[1], 10);

    let unit_course_registrations = {};
    let num_students = 0;

    for (let i = 0; i < num_unit_courses; i++) {
        unit_course_registrations[i]= lines[i+1].split(" ");
        const max_student_num = Math.max(...unit_course_registrations[i]);
        num_students = max_student_num > num_students ? max_student_num : num_students;
    }

    console.log("Problem Info:\n", "Number of Slots: ", num_slots, "\n Number of Unit Courses: ", num_unit_courses,"\n Number of Students: ", num_students, "\n");

    // for (const unit_course in unit_course_registrations) {
    //     console.log("Course ", unit_course, " => ", unit_course_registrations[unit_course]); 
    // }

    return {
        num_slots,
        num_unit_courses,
        unit_course_registrations,
        num_students
    }
}


module.exports = {
    readFile,
    parseProblemInput
}