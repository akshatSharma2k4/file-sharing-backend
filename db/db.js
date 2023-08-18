const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connectionResponse = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection successful");
  } catch (error) {
    console.log("Error connecting to DB", error);
  }
}; 
module.exports = connectDB;
