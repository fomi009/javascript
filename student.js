// Student Marks Manager
let Students = [];
const maxMarks = 5;
const addMark = (marks, newMark) => marks.push(newMark);

function addStudent() {
    count = Number(prompt(`How many srudents you want to eneter: `))
    for (let i = 0; i < count; i++) {
        let Student = {
            name: '',
            marks: []
        }
        Student.name = prompt("Enter student name:");
        for (let j = 0; j < maxMarks; j++) {
            let mark = Number(prompt("Enter student marks"));
            addMark(Student.marks, mark);
        }
        Students.push(Student)
    }
}

// Closure
function topStudentCounter() {
    let topStudents = [];
    return function (name, ave) {
        if (ave >= 80) {
            topStudents.push({ name, ave });
        }
        return topStudents;
    }
}

let topStudent = topStudentCounter();

function calculateAverage(student) {
    let { name, marks } = student;
    let ave = marks.reduce((a, b) => a + b, 0) / marks.length;
    return ave;
}

function showAverage() {
    console.log("Averae of Students\n");
    for (let s of Students) {
        let ave = calculateAverage(s);
        console.log(`Average of ${s.name}: ${ave}`);
    }
}

// top students
function showTopStudents() {
    topStudent = topStudentCounter();
    for (let s of Students) {
        let ave = calculateAverage(s);
        topStudent(s.name, ave);
    }
    console.log("Top Students\n");
    let tops = topStudent();
    for (let t of tops) {
        console.log(`Name: ${t.name}, Average: ${t.ave}`);
    }
}
let addMore = "yes";
while (addMore === "yes") {
    addStudent();
    addMore = prompt("Do you want to add another student? (yes/no)");
}

//displayInfo();
function processStudents(callback) {
    console.log("Displaying info of all students\n");
    for (let s of Students) {
        callback(s);
    }
}

function displayInfo(student) {
    let { name, marks } = student;
    console.log("Name:", name);
    console.log("Marks:", marks);

    let ave = marks.reduce((a, b) => a + b, 0) / marks.length;
    console.log("Average:", ave);

    let grades = marks.map(m => {
        if (m >= 80) return "A";
        if (m >= 70) return "B";
        if (m >= 60) return "C";
        if (m >= 50) return "D";
        return "F";
    });
    console.log("Grades:", grades);

    topStudent(name, ave);
}
function moreStudents(newStudents) {
    Students = [...Students, ...newStudents];
    console.log("Students added");
}

function showMenu() {
    let choice;
    do {
        choice = prompt(`Student Marks Manager\n1.Add Students\n2.Display All Students\n3.Show Average\n4.Show Top Students(above 80%)\n5.Merge Sample Students\n6.Exit\nEnter your choice:`);

        switch (choice) {
            case "1":
                addStudent();
                break;
            case "2":
                processStudents(displayInfo);
                break;
            case "3":
                showAverage();
                break;
            case "4":
                showTopStudents();
                break;
            case "5":
                moreStudents([{ name: "Ali", marks: [80, 90, 56, 45, 89] }]);
                break;
            case "6":
                console.log("Exiting .....");
                break;
            default:
                console.log("Invalid choice. Try again");
        }
    } while (choice !== "6");
}
showMenu();


