
// Ex #0:
// 
// console.log("Hello world!")



// Ex #1:
// 
// var student1 = {
//     name: "Jan",
//     adress: "Gdańsk",
//     studentId: "111",
//     profile: "biologia",
//     displayFullInfo: function() {
//         console.log(this.name + this.adress + this.studentId + this.profile)},
//     changeId: function(newId) {this.studentId = newId}
// }
// student1.displayFullInfo();

// var student2 = {
//     name: "Piotr",
//     adress: "Gdynia",
//     studentId: "222",
//     profile: "chemia",
//     displayFullInfo: function() {
//         console.log(this.name + this.adress + this.studentId + this.profile)},
//     changeID: function(newId) {this.student_id_number = newId}
//     }
// student2.displayFullInfo();



// Ex #2:

// var studentsList = [];

// var Pearson = {
//     name: "",
//     adress: "",
//     studentId: "",
//     profile: "",
//     setName: function(name) {this.name = name},
//     setAdress: function(adress) {this.adress = adress},
//     setStudentId: function(studentId) {this.studentId = studentId},
//     setProfile: function(profile) {this.profile = profile},
    
// }
// var student1 = Object.create(Pearson);
// student1.setName("Jan");
// student1.setAdress("Gdańsk");
// student1.setStudentId("111");
// student1.setProfile("biologia");

// studentsList.push(student1);

// var student2 = Object.create(Pearson);
// student2.setName("Olek");
// student2.setAdress("Gdynia");
// student2.setStudentId("222");
// student2.setProfile("chemia");

// studentsList.push(student2);

// console.log(studentsList);

// // lub:

// var studentsList = [];

// var Pearson = {
//     name: "",
//     adress: "",
//     studentId: "",
//     setData: function(name, adress, studentId){
//         this.name = name;
//         this.adress = adress;
//         this.id = studentId;
//     }
//     displayInfo: function() {
//         console.log(this.name + this.adress + this.studentId);
//     }
// }

// var student1 = Object.create(Student);
// student1.setData("Karol", "Gdańsk", "111");
// studentsList.push(student1);

// for (let i = 0, i < 10, i++) {
//     studentsList.push(Object.create)
// }

// Ex #3:
// var studentsList = [];

// function Person(name, adress, studentId, profile) {
//     this.name = name;               
//     this.adress = adress;
//     this.studentId = studentId;
//     this.profile = profile;
//     this.displayInfo = function() {
//         console.log(this.name + this.adress + this.studentId);
//     }

//     studentsList.push(this);
// }


// var student1 = new Person ("Jan", "Gdańsk", "111", "biol");
// var student2 = new Person ("John", "NY", "222", "chem");
// var student3 = new Person ("Ewa", "Gdynia", "333", "matem" );

// console.log(studentsList)

// studentsList.map((element) => element.displayInfo());

// Ex #4

// var studentsList = [];

// function Person(name, adress, studentId, profile) {
//     this.name = name;               
//     this.adress = adress;
//     this.studentId = studentId;
//     this.profile = profile;
//     studentsList.push(this)
//        }

//     Person.prototype.displayInfo = function() {
//         console.log(this.name + " " + this.adress + " " + this.studentId + " " + this.profile);
//     }

//     function Student(name, adress, studentId, profile) {
//         Person.call(this, name, adress, studentId, profile);
//         this.role = "student";
//     }
    
//     function Teacher(name, adress, studentId, profile) {
//         Person.call(this, name, adress, studentId, profile);
//         this.role = "teacher";
//     }
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
    
// var student1 = new Student ("Jan", "Gdańsk", "111", "biol");
// var student2 = new Teacher ("John", "NY", "222", "chem");
// var student3 = new Student ("Ewa", "Gdynia", "333", "matem" );

// console.log(studentsList)

// studentsList.map((element) => element.displayInfo());

// function renderList(element) {
//     element.map((el) => {
//         console.log(el.name + el.adress);
//     })
// }

// renderList(studentsList);  *// gdy chcemy wyświetlić z listy tylko niektóre parametry


// Ex #5

class People {
    constructor(name, address, idNumber, age) {
        this.name = name;
        this.address = address;
        this.idNumber = idNumber;
        this.age = age;

    }
    displayFullInfo = function() {
        console.log(this.name);
    }
    changeId(newId) {
        this.idNumber = newId}
}

class Student extends People {
    constructor(name, address, idNumber, age) {
        super(name, address, idNumber, age);
        this.profile = 'student';
    }
    
}
class Teacher extends People {
    constructor(name, address, idNumber, age) {
        super(name, address, idNumber, age);
        this.profile = 'Teacher';
    }
}
// 

const student1 = new Student ("Jan", "Gdańsk", "111", "20");
const student2 = new Student ("John", "NY", "222", "21");
const student3 = new Student ("Ewa", "Gdynia", "333", "22" );
const studentList = [student1, student2, student3];

const teacher1 = new Teacher ("Tomek", "Gdańsk", "111", "40");
const teacher2 = new Teacher ("Adam", "NY", "222", "51");
const teacher3 = new Teacher ("Ola", "Gdynia", "333", "62" );
const teacherList = [teacher1, teacher2, teacher3];

console.log(studentList, teacherList);

// Ex #6

class Render {
        static renderList(list, goal) {
           const table = document.querySelector(`.${goal}`);
           let htmlValue = "";
           list.map((element)=>{
            // htmlValue += `<div>Imię: ${element.name},</div><div>Miasto: ${element.address},</div><div>Wiek: ${element.age},</div>`;
            htmlValue += `<div><span>Imię: ${element.name}, </span><span>Miasto: ${element.address}, </span><span>Wiek: ${element.age}, </span></div>`; 
            });
            table.innerHTML = htmlValue;
        }
    }
Render.renderList(studentList, "students");

Render.renderList(teacherList, "teachers");






