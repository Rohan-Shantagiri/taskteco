const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017";
var dbo;
var db;

MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},(error,result)=>{
    if(error)
        throw error;
    dbo = result;
    db = dbo.db('techdb');
    console.log("Established connection to mongodb database Techdb");
})

function addData(details,callback){
    db.collection('data').insertOne(details,(error,result) => {
        if(error)
           throw error;
        callback(result);
    })
}

function fetchdetails(callback){
    db.collection('data').find().toArray((error,result)=>{
        callback(result);
    })
};

function fetchdetailsid(id,callback){
    db.collection('data').findOne({id : id},(error,result)=>{
        callback(result);
    })
};

module.exports.fetchdetailsid = fetchdetailsid;
module.exports.fetchdetails = fetchdetails;
module.exports.addData = addData;


