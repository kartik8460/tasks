/******************************************/
/************* Find Queries 2 *************/
/******************************************/

/*********************** Queries to get only specified fields/properties in result ***********************/
/* 
PS  :-  _id is defaultly set to 1.
        If you do not specify _id, it is implicitly set to 1.
        You should explicitly set it to 0 if you don't want _id in result.
*/

/*
Description - To get only "skills", "project" field/property of the documents in which first_name is "Kartik"

Query -
    db.getCollection('query_collection').find({"first_name": "Kartik"}, {skills:1, projects:1})

*/


/*
Description - To get only "first_name", "last_name", "age" field/property of all the documents of the query_collection

Query -
    db.getCollection('query_collection').find({}, {"first_name": 1, "last_name": 1, age: 1})

*/


/*
Description - To exculde specified from the result

Query -
    db.getCollection('query_collection').find({}, {projects: 0})

*/


/*
Description - To get only specified fields from the nested documents (method 1)

Query -
    db.getCollection('query_collection').find({}, {"first_name": 1, "last_name": 1, "age.age": 1})

*/


/*
Description - To get only specified fields from the nested documents (method 2) available in mongodb version above 4.4

Query -
    db.getCollection('query_collection').find({}, {"first_name": 1, "last_name": 1, "age":{dob:1}})

*/


/*
Description - To exculde specified from the result of the nested documents (method 1)
              PS : when excluding from nested document you cannot include or exclude main document fields
Query -
    db.getCollection('query_collection').find({}, {"age.age": 0})

*/


/*
Description - To get only specified fields from the array of nested documents (method 1)

Query -
    db.getCollection('query_collection').find({}, {"first_name": 1, "last_name": 1, "projects.project_name": 1})

*/


/*
Description - To get only the required array using $slice

Query -
    db.getCollection('query_collection').find({}, {"first_name": 1, "last_name": 1, "projects": {$slice: -1}})

*/

