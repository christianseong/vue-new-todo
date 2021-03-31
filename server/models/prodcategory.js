const mongoose = require("mongoose");



const CategorySchema = new mongoose.Schema({
   name: {
    type :String,
    required : true
  },
  search_count:{
    type: Number,
    required : true
  }
});

const Category = mongoose.model("Category",CategorySchema); 

module.exports = Category;