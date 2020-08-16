const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017";
var dbo;
var db;


//  Establishing connection with the Mongo Server
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(error,result)=>{
    if(error)
        throw error;
    dbo = result;
    db = result.db('techdb');
    console.log("Established connection to mongodb database Techdb");
    
})


// Mongo query for inserting the data
function addData(data,callback){
    console.log(data);
    db.collection('data').insertOne(data,(error,result) => {
        if(error)
           throw error;
        callback(result);
    })
}

// Mongo query for fetching the data
function fetchdetails(callback){
    db.collection('data').find().toArray((error,result)=>{
        callback(result);
    })
};

// Mongo query for fetching the data with particular id
function fetchdetailsid(name,callback){
    // console.log(name);
    db.collection('data').findOne({name : name},(error,result)=>{
        callback(result);
    })
};

// Mongo query for deleting the data
function deletedata(name,callback){
    db.collection('data').deleteOne({name:name},(err,result)=>{
        callback(result);
    })
}

// Mongo query for updating the data
function updatedata(name,data,callback){
    db.collection('data').updateOne({name:name},{$set:data},(err,result)=>{
        callback(result);
    })
}

module.exports.fetchdetailsid = fetchdetailsid;
module.exports.fetchdetails = fetchdetails;
module.exports.addData = addData;
module.exports.updatedata = updatedata;
module.exports.deletedata = deletedata;


