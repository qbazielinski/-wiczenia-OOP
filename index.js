// console.log("Hello world!")

var studentsList = [];

var Pearson = {
    name: "",
    adress: "",
    studentId: "",
    profile: "",
    setName: function(name) {this.name = name},
    setAdress: function(adress) {this.adress = adress},
    setStudentId: function(studentId) {this.studentId = studentId},
    setProfile: function(profile) {this.profile = profile},
    
}
var student1 = Object.create(Pearson);
student1.setName("Jan");
student1.setAdress("Gdańsk");
student1.setStudentId("111");
student1.setProfile("biologia");

studentsList.push(student1);

var student2 = Object.create(Pearson);
student2.setName("Olek");
student2.setAdress("Gdynia");
student2.setStudentId("222");
student2.setProfile("chemia");

studentsList.push(student2);

console.log(studentsList);

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