function randomNumberBetweenTwoNumbers(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Script- 1 - Random Users Generation

/*
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
}*/

// User's Id Generated from Above Script are gicen below

const userIds = [
    "5f50c3ef8266ceb0c368dfef",
    "5f50c3ef8266ceb0c368dff0",
    "5f50c3ef8266ceb0c368dff1",
    "5f50d34a8266ceb0c368dff3",
    "5f50d34a8266ceb0c368dff4",
    "5f50d34a8266ceb0c368dff5",
    "5f50d34a8266ceb0c368dff6",
    "5f50d34a8266ceb0c368dff7",
    "5f50d34a8266ceb0c368dff8",
    "5f50d34a8266ceb0c368dff9",
    "5f50d34a8266ceb0c368dffa",
    "5f50d34b8266ceb0c368dffb",
    "5f50d34b8266ceb0c368dffc",
    "5f51cdd690874b9f193fa09a"
];

// Script - 2 - Random marks Generation
/*
let subjects = ['english_1', 'english_2', 'maths', 'science']

for (var userId of userIds) {
    let userMarksObj = {}
    for (let i =0; i < 4; i++) {
        userMarksObj[subjects[i]] = randomNumberBetweenTwoNumbers(35, 100);
    }
    console.log(userMarksObj);
    db.getCollection('query_collection').updateOne(
        {
            _id: ObjectId(userId)
        },
        {
            $set: {
                marks: userMarksObj
            }
        }
    )
}
*/

// Script - 3 - Random Project Generation
for (let id of userIds) {
    let randomNumberOfProjects = randomNumberBetweenTwoNumbers(1,5);
    let projectObjArray = [];
    for(let i=0; i<randomNumberOfProjects; i++) {
        let projectObj = {
            project_name: 'Project ' + (i+1),
            ratings: randomNumberBetweenTwoNumbers(6,10),
            priority: randomNumberBetweenTwoNumbers(1,4)
        }
        projectObjArray.push(projectObj);
    }
    // console.log(projectObjArray);
    db.getCollection('query_collection').updateOne(
        {
            _id: ObjectId(id)
        },
        {
            $set: {
                projects: projectObjArray
            }
        }
    )
    
}

// Script - 4 - Inserting null field in some of the users

const someUserIds = [
    "5f50c3ef8266ceb0c368dfef",
    "5f50c3ef8266ceb0c368dff1",
    "5f50d34a8266ceb0c368dff3",
    "5f50d34a8266ceb0c368dff6",
    "5f50d34a8266ceb0c368dff7",
    "5f50d34a8266ceb0c368dff8",
    "5f50d34a8266ceb0c368dff9",
    "5f50d34b8266ceb0c368dffc",
];
for (let id of someUserIds) {
    db.getCollection('query_collection').updateOne(
        {
            _id: ObjectId(id)
        },
        {
            $set: {
                null_field: null
            }
        }
    ) 
}

