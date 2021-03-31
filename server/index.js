const express = require('express');

const mongoose = require('mongoose');

const User = require("./models/user");
const ProdCategory = require('./models/prodcategory');

const cors = require('cors');





const app = express();
const port = 3000;
app.use(cors());

mongoose
  .connect("mongodb+srv://christian:christian@cluster0.5cnsr.mongodb.net/shoppingMall?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
  
app.use(express.json());

app.get("/", async (req,res) =>{
    try{
        res.send("connect")
    }catch(err){
        console.log("error");
    }

})


app.post("/users", async (req, res) => {

    console.log(req.body);
    console.log(res);

    const user = new User(req.body);
  
    try {
      await user.save();
      res.status(204).send();
    } catch (e) {
      res.status(500).json({
        message: "User 저장 실패",
      });
    }
  });



app.post("/product/category/post", async (req, res) => {

  console.log(req.body);
  console.log(res);

  const prod = new ProdCategory(req.body);

  try {
    await prod.save();
    res.status(204).send();
  } catch (e) {
    res.status(500).json({
      message: "Prod 저장 실패",
    });
  }
});


app.get('/product/category', function(req,res){
  ProdCategory.find(function(err, books){
      if(err) return res.status(500).send({error: 'database failure'});
      res.json(books);
  })
});





app.listen(port, () => {
    console.log("Server is up on port " + port);
  });