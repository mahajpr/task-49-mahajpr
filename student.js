function addStudent(name , age , course){
    return {name , age , course};
}

function getStudent(student){
    console.log("Student Details");

    console.log("Student Name:",student.name);

    console.log("Student age:", student.age);

    console.log("Student Course:",student.course);
}

module.exports = {addStudent , getStudent};