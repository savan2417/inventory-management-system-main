const mongoose = require('mongoose')
const mongo_URI = "mongodb://127.0.0.1:27017/inventory-management";

const connectToMongo = async () => {
  try {
    mongoose.connect(mongo_URI);
    console.log("Connected mongodb");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
