/******************************************/
/************* Find Queries 3 *************/
/******************************************/

/* find() Queries for null values and missing fields */
/* In all the Description "null_field" is just a property/field inside a Document */

/*
Description - To query documents in which property null_field is null or not
PS - It will also return documents that either contain the null_field field whose value is 
    null or that do not contain the null_field field

Query -
    db.getCollection("query_collection").find({ null_filed: null });

*/


/*
Description - To query documents in which property "null_field" value is null and the document should have the "null_field" in it
PS - $type is used to match the BSON type of the data 
    BSON type are just like datatypes 
    for eg $type:10 here refers to "null" type and $type:4 refers to "Array" type
    Link for all the BSON type with value - https://docs.mongodb.com/manual/reference/bson-types/
Query -
    db.getCollection('query_collection').find({ null_field : { $type: 10 } })

*/


/*
Description - To query documents in which property "null_field" does not exists in the document
Query -
    db.getCollection('query_collection').find({ null_field : { $exists: false } })

*/

/*
Description - To query documents in which property null_field exists in the document
Query -
    db.getCollection('query_collection').find({ null_field : { $exists: true } })

*/
