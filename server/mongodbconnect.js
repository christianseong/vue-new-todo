const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const { ObjectId } = require("mongodb"); 

const connectURL = "mongodb+srv://christian:christian@cluster0.5cnsr.mongodb.net/shoppingMall?retryWrites=true&w=majority";
const dbName = "shoppingMall";

MongoClient.connect(connectURL, {useNewUrlParser :true} , (err, client) =>{
    if(err){
        return console.log("Unable to connect database")
    }


    console.log("Connected correctly");

    const db = client.db(dbName);

/*
    db.collection("users").insertOne({
        name : "seong",
        age : 27
    });

    db.collection("users").insertMany(
        [
            {
                name  :"Jhoodo",
                age : 29
            },
            {
                name  :"adfsdf",
                age : 32
            },

        ],
        (err ,result) =>{
            if(err) {
                return console.log("Unabale to insert User");
            }

            console.log(result.ops);
        }


    );



    db.collection("users").findOne({ _id : new ObjectId("60626f8fe6c1a0be5d248ebe")}, (err,user) =>{
        if(err){
            return console.log("Unable to find user");
        }


        console.log(user);
    })

    

    db.collection("users")
    .find({ age : 25})
    .toArray((err,user) =>  {
        if(err){
            console.log(err);
        }
        console.log(user);
    });


    db.collection("users").updateOne(
        {
            _id : new ObjectId("60626f50e6c1a0be5d248ebd"),
        },
        {
            $set :{
                name : "change again",
                age : 50
            },
        }
    );

*/

db.collection("users").deleteOne({
    age : 50
});


});




