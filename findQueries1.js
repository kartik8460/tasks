/******************************************/
/************* Find Queries *************/
/******************************************/

/*
Description - To Match Exact Document

Query -
    db.query_collection.find({
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


/*
Description - To query a nested document

Query -
    db.query_collection.find({
       "age.age": 21
    })
*/


/*
Description - To query a single field for multiple values using $in ($in ismainly used for arrays similar to array.prototype.include())

Query -
    db.query_colletion.find({"first_name": {$in:["Kartik", "Mandeep"]}})
*/


/*
Description - To query a single field for multiple values using $in ($in ismainly used for arrays similar to array.prototype.include())

Query -
    db.query_colletion.find({"first_name": {$in:["Kartik", "Mandeep"]}})
*/


/*
Description - Query using operator $gt, $gte, $lt, $lte, $eq
                $gt     -   greater than
                $gte    -   greater than equal to
                $lt     -   less than
                $lt     -   less than equal to
                $eq     -   equal to

Query - 
    db.query_collection.find({"age.age": {$gt: 21}}) 
*/


/*
Description -   Query Inside an Array

Queries
    db.query_collection.find({"skills": ["Angular", "React"]})

Result
    Returns Documents with skills exactly same to ["Angular", "React"]
*/


/*
Description - Query Inside an Array using $elemMatch

Query -  
    db.query_collection.find({"skills": {$elemMatch: "Angular"}})

Result
    Returns every Document in which skills Array contains Angular in it
*/


/*
Description - Query Inside an Array using $gt and $lt operator

Query -  
    db.query_collection.find({"marks": {$gt: 75, $lt: 100}})

Result
    Returns every Document in which any element of the marks array should be greater than 100 or less than 25
*/

/*
Description - Query Inside an Array using $gt and $lt operator, and $elemMatch

Query -  
    db.query_collection.find({"marks": {$elemMatch: {$gt: 75, $lt: 100}}})

Result
    Returns every Document in which only one element of the marks array should be greater than 100 or less than 25
*/

/*
Description - Query Inside an Array at a particular index

Query -  
    db.query_collection.find({"skills.0": "Angular")
                                      ↑
                                    Index
Result
    Returns every Document in skill Array has the value "Angular" at 0th index
*/

/*
Description - Query to size of an array

Query -
    db.query_collection.find({"skills":{$size: 2}})
Result (respectively)   
    Returns every Document in which skills Array has exactly 2 elements
*/


