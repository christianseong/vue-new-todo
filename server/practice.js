const mongoose = require("mongoose");


const connectURL = "mongodb+srv://christian:christian@cluster0.5cnsr.mongodb.net/shoppingMall?retryWrites=true&w=majority";

mongoose.connect(connectURL,{
    useNewUrlParser : true,
    useCreateIndex : true
})
.then( () =>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
});

const UserShcema = new mongoose.Schema({
    name : {
        type : String ,
        required : true,
    },
    age : {
        type : Number,
        validate(value){
            if(value<=0){
                throw new Error("Age must be positive");
            }
        }
    } ,
    saveData : {
        type : Date,
        default : Date.now,
    },
})

const User = mongoose.model("User", UserShcema);

const me = new User({
    name : "mongoose",
    age : 1,
});


me.save().then(()=>{
    console.log(me);
})
.catch((err)=>{
    console.log(err);
})