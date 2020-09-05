/******************************************/
/************* Insert Queries *************/
/******************************************/

/*
1.
Query - insertOne()
    db.getCollection('query_collection').insertOne({first_name:"Kartik", last_name:"Gupta", age:{age:21, dob:new Date(1999,2,25)}})

Description
    Insert the document and return the Acknowledgement with the inserted document Id

*/

/*
2.
Query - insert()
    db.getCollection('query_collection').insert({first_name:"Kartik", last_name:"Gupta", age:{age:21, dob:new Date(1999,2,25)}})

Description
    Insert the document and returns only the Acknowledgement

*/

/*
3.
Query - insertMany()
    db.getCollection('query_collection').insertMany([
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

// Last Query
// Before going to findQueries*.js use the below Query
/* 
db.getCollection('query_collection').insertMany([
    {
        "_id" : ObjectId("5f50c3ef8266ceb0c368dfef"),
        "first_name" : "Mandeep",
        "last_name" : "Singh",
        "age" : {
            "age" : 21.0,
            "dob" : ISODate("1999-03-04T18:30:00.000Z")
        },
        "skills" : [ 
            "Java", 
            "Javascript"
        ],
        "marks" : {
            "english_1" : 79.0,
            "english_2" : 42.0,
            "maths" : 63.0,
            "science" : 61.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 9.0,
                "priority" : 4.0
            }, 
            {
                "project_name" : "Project 2",
                "ratings" : 7.0,
                "priority" : 2.0
            }, 
            {
                "project_name" : "Project 3",
                "ratings" : 9.0,
                "priority" : 1.0
            }, 
            {
                "project_name" : "Project 4",
                "ratings" : 10.0,
                "priority" : 2.0
            }, 
            {
                "project_name" : "Project 5",
                "ratings" : 10.0,
                "priority" : 4.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50c3ef8266ceb0c368dff0"),
        "first_name" : "Zeel",
        "last_name" : "Thakker",
        "age" : {
            "age" : 21.0,
            "dob" : ISODate("1999-06-07T18:30:00.000Z")
        },
        "skills" : [ 
            "Angular", 
            "React"
        ],
        "marks" : {
            "english_1" : 56.0,
            "english_2" : 71.0,
            "maths" : 72.0,
            "science" : 93.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 8.0,
                "priority" : 2.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50c3ef8266ceb0c368dff1"),
        "first_name" : "Shubham",
        "last_name" : "Sharma",
        "age" : {
            "age" : 21.0,
            "dob" : ISODate("1999-01-18T18:30:00.000Z")
        },
        "skills" : [ 
            "Angular", 
            "Vue"
        ],
        "marks" : {
            "english_1" : 43.0,
            "english_2" : 79.0,
            "maths" : 99.0,
            "science" : 92.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 10.0,
                "priority" : 4.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dff3"),
        "first_name" : "Vishnu",
        "last_name" : "Pandit",
        "age" : {
            "age" : 52.0,
            "dob" : ISODate("1968-12-17T18:30:00.000Z")
        },
        "skills" : [ 
            "Python", 
            "Nodejs", 
            "HTML", 
            "Angular", 
            "Javascript"
        ],
        "marks" : {
            "english_1" : 48.0,
            "english_2" : 63.0,
            "maths" : 53.0,
            "science" : 57.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 8.0,
                "priority" : 3.0
            }, 
            {
                "project_name" : "Project 2",
                "ratings" : 9.0,
                "priority" : 1.0
            }, 
            {
                "project_name" : "Project 3",
                "ratings" : 7.0,
                "priority" : 3.0
            }, 
            {
                "project_name" : "Project 4",
                "ratings" : 9.0,
                "priority" : 4.0
            }, 
            {
                "project_name" : "Project 5",
                "ratings" : 8.0,
                "priority" : 3.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dff4"),
        "first_name" : "Ganesh",
        "last_name" : "Gaur",
        "age" : {
            "age" : 33.0,
            "dob" : ISODate("1987-04-18T18:30:00.000Z")
        },
        "skills" : [ 
            "HTML", 
            "CSS", 
            "Angular", 
            "Python"
        ],
        "marks" : {
            "english_1" : 86.0,
            "english_2" : 81.0,
            "maths" : 84.0,
            "science" : 96.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 10.0,
                "priority" : 2.0
            }, 
            {
                "project_name" : "Project 2",
                "ratings" : 6.0,
                "priority" : 2.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dff5"),
        "first_name" : "Chatur",
        "last_name" : "Randhawa",
        "age" : {
            "age" : 33.0,
            "dob" : ISODate("1987-06-10T18:30:00.000Z")
        },
        "skills" : [ 
            "Angular"
        ],
        "marks" : {
            "english_1" : 49.0,
            "english_2" : 69.0,
            "maths" : 85.0,
            "science" : 86.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 6.0,
                "priority" : 3.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dff6"),
        "first_name" : "Kanada",
        "last_name" : "Panda",
        "age" : {
            "age" : 52.0,
            "dob" : ISODate("1968-08-18T18:30:00.000Z")
        },
        "skills" : [ 
            "Angular"
        ],
        "marks" : {
            "english_1" : 62.0,
            "english_2" : 53.0,
            "maths" : 39.0,
            "science" : 89.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 8.0,
                "priority" : 1.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dff7"),
        "first_name" : "Sumit",
        "last_name" : "Kusari",
        "age" : {
            "age" : 27.0,
            "dob" : ISODate("1993-09-07T18:30:00.000Z")
        },
        "skills" : [ 
            "MongoDB"
        ],
        "marks" : {
            "english_1" : 73.0,
            "english_2" : 66.0,
            "maths" : 82.0,
            "science" : 90.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 7.0,
                "priority" : 3.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dff8"),
        "first_name" : "Ashutosh",
        "last_name" : "Bhagat",
        "age" : {
            "age" : 15.0,
            "dob" : ISODate("2005-06-14T18:30:00.000Z")
        },
        "skills" : [ 
            "Django", 
            "CSS", 
            "Java", 
            "Python"
        ],
        "marks" : {
            "english_1" : 99.0,
            "english_2" : 98.0,
            "maths" : 43.0,
            "science" : 47.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 7.0,
                "priority" : 1.0
            }, 
            {
                "project_name" : "Project 2",
                "ratings" : 7.0,
                "priority" : 1.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dff9"),
        "first_name" : "Manas",
        "last_name" : "Prabhu",
        "age" : {
            "age" : 26.0,
            "dob" : ISODate("1994-04-03T18:30:00.000Z")
        },
        "skills" : [ 
            "Angular", 
            "HTML", 
            "Java", 
            "MongoDB"
        ],
        "marks" : {
            "english_1" : 98.0,
            "english_2" : 94.0,
            "maths" : 54.0,
            "science" : 83.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 8.0,
                "priority" : 1.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34a8266ceb0c368dffa"),
        "first_name" : "Sackhcham",
        "last_name" : "Badakar",
        "age" : {
            "age" : 22.0,
            "dob" : ISODate("1998-12-05T18:30:00.000Z")
        },
        "skills" : [ 
            "Django", 
            "Python", 
            "Nodejs", 
            "CSS"
        ],
        "marks" : {
            "english_1" : 63.0,
            "english_2" : 76.0,
            "maths" : 47.0,
            "science" : 35.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 7.0,
                "priority" : 2.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34b8266ceb0c368dffb"),
        "first_name" : "Hala",
        "last_name" : "Havaldar",
        "age" : {
            "age" : 33.0,
            "dob" : ISODate("1987-04-06T18:30:00.000Z")
        },
        "skills" : [ 
            "Javascript", 
            "CSS", 
            "Python", 
            "Angular"
        ],
        "marks" : {
            "english_1" : 67.0,
            "english_2" : 91.0,
            "maths" : 51.0,
            "science" : 64.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 10.0,
                "priority" : 3.0
            }, 
            {
                "project_name" : "Project 2",
                "ratings" : 10.0,
                "priority" : 3.0
            }, 
            {
                "project_name" : "Project 3",
                "ratings" : 9.0,
                "priority" : 2.0
            }, 
            {
                "project_name" : "Project 4",
                "ratings" : 9.0,
                "priority" : 1.0
            }, 
            {
                "project_name" : "Project 5",
                "ratings" : 6.0,
                "priority" : 3.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f50d34b8266ceb0c368dffc"),
        "first_name" : "Viswarupa",
        "last_name" : "Pande",
        "age" : {
            "age" : 23.0,
            "dob" : ISODate("1997-08-23T18:30:00.000Z")
        },
        "skills" : [ 
            "Django"
        ],
        "marks" : {
            "english_1" : 43.0,
            "english_2" : 94.0,
            "maths" : 72.0,
            "science" : 43.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 7.0,
                "priority" : 1.0
            }, 
            {
                "project_name" : "Project 2",
                "ratings" : 6.0,
                "priority" : 3.0
            }, 
            {
                "project_name" : "Project 3",
                "ratings" : 8.0,
                "priority" : 4.0
            }, 
            {
                "project_name" : "Project 4",
                "ratings" : 7.0,
                "priority" : 1.0
            }
        ]
    },
    {
        "_id" : ObjectId("5f51cdd690874b9f193fa09a"),
        "first_name" : "Kartik",
        "last_name" : "Gupta",
        "age" : {
            "age" : 21.0,
            "dob" : ISODate("1999-03-24T18:30:00.000Z")
        },
        "skills" : [ 
            "Angular", 
            "Nodejs", 
            "MongoDB", 
            "Java", 
            "Javascript", 
            "HTML", 
            "CSS", 
            "Python", 
            "Django"
        ],
        "marks" : {
            "english_1" : 79.0,
            "english_2" : 35.0,
            "maths" : 88.0,
            "science" : 39.0
        },
        "projects" : [ 
            {
                "project_name" : "Project 1",
                "ratings" : 7.0,
                "priority" : 3.0
            }
        ]
    }
])
*/