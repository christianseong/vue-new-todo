const mongodbURL = ""

const mongodb = require('mongodb');


const MongoClient = mongodb.MongoClient;


MongoClient.connect(mongodbURL, {useNewUrlParser : true }, (err,client) =>{

});

MongoClient.connect(mongodbURL, {useNewUrlParser : true }, (err,client) => {

    if(err){
        console.log(err);
    }

    console.log("Mongodb Conneted!");


    const db = client.db(db이름);



    db.collection("user").insertOne({
        name : "jaeho",
        age : 25,
        email : "christian@naver.com"
    });

    db.collection("user").deleteOne({
        name : "박준후"
    })

});




