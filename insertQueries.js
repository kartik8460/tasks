/******************************************/
/************* Insert Queries *************/
/******************************************/

/*
1.
Query - insertOne()
    db.query_collection.insertOne({first_name:"Kartik", last_name:"Gupta", age:{age:21, dob:new Date(1999,2,25)}})

Description
    Insert the document and return the Acknowledgement with the inserted document Id

*/

/*
2.
Query - insert()
    db.query_collection.insert({first_name:"Kartik", last_name:"Gupta", age:{age:21, dob:new Date(1999,2,25)}})

Description
    Insert the document and returns only the Acknowledgement

*/

/*
3.
Query - insertMany()
    db.query_collection.insertMany([
        {
            first_name: "Mandeep",
            last_name: "Singh",
            age: {
                age: 21,
                dob: new Date(1999,2,5)
            },
            skills: ["Java", "Javascript"]
        },
        {
            first_name: "Zeel",
            last_name: "Thakker",
            age: {
                age: 21,
                dob: new Date(1999,5,8)
            },
            skills: ["Angular", "React"]
        },
        {
            first_name: "Shubham",
            last_name: "Sharma",
            age: {
                age: 21,
                dob: new Date(1999,0,19)
            },
            skills: ["Angular", "Vue"]
        },
        {
            first_name: "Kartik",
            last_name: "Gupta",
            age: {
                age: 21,
                dob: new Date(1999,2,25)
            },
            skills: ["Angular", "Nodejs", "MongoDB", "Java", "Javascript", "HTML", "CSS", "Python", "Django"]
        }
    ])

Description
    Insert one or more document and returns Acknowledgement with all the inserted document's id

*/
