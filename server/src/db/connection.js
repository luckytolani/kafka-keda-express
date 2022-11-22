import mongoose from "mongoose";

mongoose.connect(
  "mongodb://username:password@mongodb-service:27017/m2pTask?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) console.log("Database connected Succesfully");
    else console.log("Error In Mongo Connection", err);
  }
);
