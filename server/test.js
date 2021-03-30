const mongodbURL = "mongodb+srv://waikiki:!ckd1814813@cluster0.xlf6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const dbName = "shoppingmall";


MongoClient.connect(mongodbURL, {useNewUrlParser : true}, (err,client) => {
    if(err) {
         console.log(err);
    }
    console.log("Mongodb Conneted!");

    const db = client.db(dbName);

    db.collection("user").deleteOne({
        name: "준후"
    })
});