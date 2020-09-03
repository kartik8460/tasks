// Test 1
/*
var name = 'ABC XYZ.123 .jpg'
let filename = name.split(' ').join('-');
console.log(filename);
filename = filename.split('.');
console.log(filename);
const fileExtension = filename.pop();
console.log(filename);
filename = `${filename.join('-')}-${Date.now()}.${fileExtension}`;
console.log(filename);
console.log(fileExtension);
*/

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const names = [
"Vishnu Pandit",
"Ganesh Gaur",
"Chatur Randhawa",
"Kanada Panda",
"Sumit Kusari",
"Ashutosh Bhagat",
"Manas Prabhu",
"Sackhcham Badakar",
"Hala Havaldar",
"Viswarupa Pande"
]
const skillsArr = ["Angular", "Nodejs", "MongoDB", "Java", "Javascript", "HTML", "CSS", "Python", "Django"]
for(var name of names) {
    let age = randomIntFromInterval(15,60);
    let year = new Date().getFullYear() - age;
    let skills = [];
    let randomSkills = randomIntFromInterval(0, 5);
    for(let i = 0; i<= randomSkills; i++) {
        let ranNum = randomIntFromInterval(0, skillsArr.length-1);
        if(!skills.includes(skillsArr[ranNum])) {
            skills.push(skillsArr[ranNum]);
        }
    }
    db.query_collection.insert({
        first_name: name.split(' ')[0],
        last_name: name.split(' ')[1],
        age: {
            age: age,
            dob:new Date(year, randomIntFromInterval(0, 11),randomIntFromInterval(1, 28))
        },
        skills: skills
    });
}


