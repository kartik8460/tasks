/******************************************/
/************* Find Queries 4 *************/
/*************** $Operators ***************/
/******************************************/

/*****************************/
/*** Comparision Operators ***/
/*****************************/
/*
Description - Below are the all Comparision Operators

    $eq     -   Matches values that are equal to a specified value.
    $gt     -   Matches values that are greater than a specified value.
    $gte	-   Matches values that are greater than or equal to a specified value.
    $lt	    -   Matches values that are less than a specified value.
    $in	    -   Matches any of the values specified in an array.
    $lte	-   Matches values that are less than or equal to a specified value.
    $ne	    -   Matches all values that are not equal to a specified value.
    $nin	-   Matches none of the values specified in an array.


Queries

    $eq     -   db.getCollection("query_collection").find({"marks.english_1": {"$eq": 86}});
    $gt     -   db.getCollection("query_collection").find({"marks.maths": {"$gt": 51}});
    $gte	-   db.getCollection("query_collection").find({"marks.maths": {"$gte": 51}});
    $lt	    -   db.getCollection("query_collection").find({"marks.science": {"$lt": 57}});
    $in	    -   db.getCollection("query_collection").find({"first_name": {$in: ["Kartik", "Shubham"]}});
    $lte	-   db.getCollection("query_collection").find({"marks.science": {"$lte": 57}});
    $ne	    -   db.getCollection("query_collection").find({"marks.english_1": {"$ne": 86}});
    $nin	-   db.getCollection("query_collection").find({"first_name": {$nin: ["Kartik", "Shubham"]}});

*/


/*****************************/
/***** Logical Operators *****/
/*****************************/

/*
Description -

    $and    -	Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
    $not    -	Inverts the effect of a query expression and returns documents that do not match the query expression.
                It also returns the document if the fields does not exist in the document
    $nor    -	Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
    $or     -	Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

Queries 

    $and    -	db.getCollection("query_collection").find({$and: [{"marks.maths": {$gt: 70}},{"marks.maths": {$lt: 80}}]});
    $not    -	db.getCollection("query_collection").find({"first_name": {$not: {$eq: "Kartik"}}});
    $nor    -	db.getCollection("query_collection").find({$nor: [{"first_name": "Kartik"},{"first_name": "Mandeep"}]});
    $or     -	db.getCollection("query_collection").find({$or: [{"first_name": "Kartik"},{"first_name": "Mandeep"}]});

*/


/*****************************/
/***** Element Operators *****/
/*****************************/

/*
Description -
    $exists	-   Matches documents that have the specified field.
    $type   -	Selects documents if a field is of the specified type.

Queries -
    $exists	-   db.getCollection('query_collection').find({ null_field : { $exists: true } })
    $type   -	db.getCollection('query_collection').find({ null_field : { $type: 10 } })

*/


/*****************************/
/**** Evaluation Operators ***/
/*****************************/

/*
Description -
    $expr	    -   Allows use of aggregation expressions within the query language.
    $jsonSchema	-   Validate documents against the given JSON Schema.
    $mod	    -   Performs a modulo operation on the value of a field and selects documents with a specified result.
    $regex	    -   Selects documents where values match a specified regular expression.
    $text	    -   Performs text search.
    $where	    -   Matches documents that satisfy a JavaScript expression.

Queries
    $expr	    -   db.getCollection('query_collection').find({$expr: {$gt: ["$marks.maths","$marks.english_1"]}})
    $jsonSchema	-   ?? 
    $mod	    -   db.getCollection('query_collection').find({"marks.maths":{ $mod:[4,2]}});
    $regex	    -   db.getCollection('query_collection').find({"first_name": /^K*$/});
    $text	    -   
    $where	    -   

*/

/*****************************/
/****** Array Operators ******/
/*****************************/

/*
Description -
    $all	    -   Matches arrays that contain all elements specified in the query.
    $elemMatch	-   Selects documents if element in the array field matches all the specified $elemMatch conditions.
    $size	    -   Selects documents if the array field is a specified size.

Queries
    $all	    -   db.getCollection('query_collection').find({"skills": {$all:["Angular","Nodejs"]}});
    $elemMatch	-   db.getCollection('query_collection').find({"skills": {$elemMatch: {$gt:"P", $lt:"Z"}}})
    $size	    -   db.getCollection('query_collection').find({"skills": {$size: 2}})

    Using $all with $elemMatch
        db.getCollection('query_collection').find({"projects": {$all: [{$elemMatch: { "project_name": "Project 1", "priority": 4}}, {$elemMatch: {"project_name": "Project 2", "priority": 2}}]}});

*/
