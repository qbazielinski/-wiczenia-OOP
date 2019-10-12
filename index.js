// console.log("Hello world!")

var student1 = {
    name: "Jan",
    adress: "Gdańsk",
    studentId: "111",
    profile: "biologia",
    displayFullInfo: function() {
        console.log(this.name + this.adress + this.studentId + this.profile)},
    changeId: function(newId) {this.studentId = newId}
}
student1.displayFullInfo();

var student2 = {
    name: "Piotr",
    adress: "Gdynia",
    studentId: "222",
    profile: "chemia",
    displayFullInfo: function() {
        console.log(this.name + this.adress + this.studentId + this.profile)},
    changeID: function(newId) {this.student_id_number = newId}
    }
student2.displayFullInfo();