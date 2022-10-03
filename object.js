var student = {
    name: 'Arif khandokar',
    id: 002,
    roll: 69,
    result: 2.78
}
console.log(student);
// how get propertt
var name1 = student.name;
console.log(name1);
// second way
var rollNo = student['roll'];
// third
var properties = Object.keys(student);
var values = Object.values(student);
console.log(properties, values);
// set property

student.name = 'Raad';
console.log(student);
student['name'] = 'Raad';
console.log(student);

student.id = 8;
student.name = 'anisur';
student.result = 3.81;
console.log(student);