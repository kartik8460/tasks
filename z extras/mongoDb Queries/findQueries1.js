/******************************************/
/************* Find Queries 1 *************/
/******************************************/

// Run the last query from "insertQueries.js" before performing the below queries

/*********************** Normal Queries ***********************/
/*
Description - To find a document using a specific field

Query -
    db.getCollection('query_collection').find({"first_name": "Kartik"})

*/


/*
Description - To Match Exact Document

Query -
    db.getCollection('query_collection').find({
        first_name: "Kartik",
        last_name: "Gupta",
        age: {
            age: 21,
            dob: new Date(1999,2,25)
        },
            skills: ["Angular", "Nodejs", "MongoDB", "Java", "Javascript", "HTML", "CSS", "Python", "Django"]
    })

    PS - If you have _id property no need to match whole document
*/


/*********************** Queries using Operators ***********************/
/* $in Operator
Description - To query a single field for multiple values using $in ($in is mainly used for arrays similar to array.prototype.include())

Query -
    db.query_colletion.find({"first_name": {$in: ["Kartik", "Mandeep"]}})
*/


/* $or Operator
Description - To query a document with 'or' condition for more than one condition using $or operator

Query -
    db.getCollection('getCollection('query_collection')').find({$or:[{"first_name": "Kartik"}, {"first_name":"Mandeep"}]})

*/


/* $and Operator
Description - To query a document with 'and' condition for more than one condition using $and operator

Query -
    db.getCollection('getCollection('query_collection')').find({$and: [{"first_name": "Kartik"}, {"last_name": "Gupta"}]})

*/


/* $gt, $gte, $lt, $lte, $eq Operators
Description - Query using operator $gt, $gte, $lt, $lte, $eq
                $gt     -   greater than
                $gte    -   greater than equal to
                $lt     -   less than
                $lt     -   less than equal to
                $eq     -   equal to

Query - 
    db.getCollection('query_collection').find({"age.age": {$gt: 21}})
    db.getCollection('query_collection').find({"age.age": {$gte: 21}})
    db.getCollection('query_collection').find({"age.age": {$lt: 21}})
    db.getCollection('query_collection').find({"age.age": {$lte: 21}})
    db.getCollection('query_collection').find({"age.age": {$eq: 21}})
*/

/*********************** Queries on Arrays ***********************/
/*
Description -   Query Inside an Array

Query -
    db.getCollection('query_collection').find({"skills": ["Angular", "React"]})

Result
    Returns Documents with skills exactly same to ["Angular", "React"]
*/


/*
Description - Query Inside an Array using $elemMatch

Query -  
    db.getCollection('query_collection').find({"skills": {$elemMatch: "Angular"}})

Result
    Returns every Document in which skills Array contains Angular in it
*/


/*
Description - Query Inside an Array using $gt and $lt operator

Query -  
    db.getCollection('query_collection').find({"marks": {$gt: 75, $lt: 100}})

Result
    Returns every Document in which any element of the marks array should be greater than 100 or less than 25
*/


/*
Description - Query Inside an Array using $gt and $lt operator, and $elemMatch

Query -  
    db.getCollection('query_collection').find({"marks": {$elemMatch: {$gt: 75, $lt: 100}}})

Result
    Returns every Document in which only one element of the marks array should be greater than 100 or less than 25
*/


/*
Description - Query Inside an Array at a particular index

Query -  
    db.getCollection('query_collection').find({"skills.0": "Angular")
                                      ↑
                                    Index
Result
    Returns every Document in skill Array has the value "Angular" at 0th index
*/


/*
Description - Query to size of an array

Query -
    db.getCollection('query_collection').find({"skills": {$size: 2}})
    
Result  
    Returns every Document in which skills Array has exactly 2 elements
*/

/*********************** Queries on Arrays of Embedded Documents ***********************/

/*
Description - Query to exactly match an embedded document of an array

Query -
    db.getCollection('query_collection').find({"projects": {"project_name": "Project 1", "ratings":10, "priority": 2}})

*/

/*
Description - Specify a Query Condition on a Field Embedded in an Array of Documents

Query -
    db.getCollection('query_collection').find({"projects.ratings": {$eq: 10}})

*/

/*
Description - Query Array of Embedded Documents using $elemMatch to match single element for multiple conditions

Query -
    db.getCollection('query_collection').find({"projects":{$elemMatch:{project_name: "Project 1", ratings:10}}})

*/

